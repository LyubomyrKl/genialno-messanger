import React, {useEffect, useRef, useState} from 'react';
import '../Messages.scss';
import { PauseOutlined, RightCircleOutlined  } from '@ant-design/icons';
import soundSvg from '@src/assets/sound.svg';
import {audioDurationToSeconds} from '@src/utils';

interface Prop {
    audio: string
}

const AudioMessage = ({audio}: Prop) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState<number>();
    const [progress, setProgress] = useState<number>(0);
    const audioElem = useRef<HTMLAudioElement>(null);


    useEffect(() => {
        if(audioElem.current) {

            audioElem.current.addEventListener('ended', () => {
                if(audioElem.current) {
                    setIsPlaying(false);
                    setProgress(0);
                    setCurrentTime(audioElem.current.duration);
                }
            });
            audioElem.current.addEventListener('playing', () => setIsPlaying(true));
            audioElem.current.addEventListener('pause', () => setIsPlaying(false));
            audioElem.current.addEventListener('loadedmetadata', () => {
                if(audioElem.current) {
                    setCurrentTime(audioElem.current.duration);
                }
            });
            audioElem.current.addEventListener('timeupdate', () => {
                if(audioElem.current) {
                    setProgress(audioElem.current.currentTime/audioElem.current.duration * 100);
                    setCurrentTime(audioElem.current.currentTime);
                }
            });

        }

    }, []);

    const togglePLay = () => {
        if( audioElem.current){
            isPlaying ?
                audioElem.current.pause()
                :
                audioElem.current.play();

            setIsPlaying(state => !state);
        }
    };


    return<div className='message-audio message-bubble centered-by-flex' onClick={togglePLay}>
        <div className='message-audio-progress' style={{width: progress * 1.4 + '%'}}></div>
        <audio ref={audioElem} preload='auto' src={audio}></audio>
        <div className='message-audio-info display-flex'>
            <div className="audio-btn display-flex align-items-center" >
                {isPlaying ? <PauseOutlined/> : <RightCircleOutlined />}
            </div>
            <div className="message-audio-svg ">
                <img src={soundSvg} alt="sound svg"/>
            </div>
        </div>
        <span className='message-audio-duration'>
            {currentTime ? audioDurationToSeconds(currentTime) : '00:00'}
        </span>
    </div>;
};

export default AudioMessage;