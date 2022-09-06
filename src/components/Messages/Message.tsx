import React from 'react';
import './Messages.scss';
import classNames from 'classnames';
import {Time} from '@src/utils/index';
import IconReadied from '@components/IconReaded';
import TypingMessage from '@components/Messages/TypeOfMessages/TypingMessage';
import TextMessage from '@components/Messages/TypeOfMessages/TextMessage';
import AudioMessage from '@components/Messages/TypeOfMessages/AudioMessage';

interface Prop {

    avatar: string,
    user: {
        name: string
    }
    time: string
    isMe: boolean
    isAudio: boolean
    text?: string
    isReadied?: boolean
    isTyping?: boolean
    audio?: string
    attachments?: {
        url: string
        filename: string
    }[]
}

const Message: React.FC<Prop> = ({
    attachments,
    audio,
    isAudio,
    text,
    isTyping,
    isReadied,
    avatar,
    time,
    isMe
}) => {

    if(isTyping){
        return <TypingMessage avatar={avatar}/>;
    }

    const messageClasses = {
        'message-me': isMe,
        'message-is-audio': audio,
    };

    return (
        <div className={classNames('message', messageClasses)}>
            <div className='message-avatar'>
                <img src={avatar} alt='User avatar'/>
            </div>
            <div className='message-content'>

                {isAudio ?  <AudioMessage audio='https://assets.mixkit.co/sfx/preview/mixkit-wrong-answer-fail-notification-946.mp3'/> : <TextMessage text={text} attachments={attachments}/>}
                <span className='message-time'><Time date={new Date(time)}/></span>
            </div>
            {isMe && <div className='message-checked' ><IconReadied isReadied={isReadied}/></div>}
        </div>
    );
};

export default Message;