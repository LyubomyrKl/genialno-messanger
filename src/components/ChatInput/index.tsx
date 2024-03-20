import React, {useState} from 'react';
import {LinkOutlined, SmileOutlined, AudioOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import './ChatInput.scss';
import Picker, {IEmojiData} from 'emoji-picker-react';

const ChatInput:React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [isEmojiWindowVisible, setIsEmojiWindowVisible] = useState<boolean>(false);

    const onEmojiClick = (emojiObject: IEmojiData ) => {
        setInputText(state => state + emojiObject.emoji);
    };

    return (
        <div className='chat-input'>
            <div className='chat-input-smile'>
                <LinkOutlined />
            </div>
            <Input className='chat-input-field'
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)}
                value={inputText} placeholder='Type message text'
            />
            <div className='chat-input-emoji'
                onMouseEnter={() => setIsEmojiWindowVisible(true)}
                onMouseLeave={() => setIsEmojiWindowVisible(false)}
            >
                <SmileOutlined/>
                <div
                    onMouseEnter={() => setIsEmojiWindowVisible(true)}
                    onMouseLeave={() => setIsEmojiWindowVisible(false)}
                >
                    {isEmojiWindowVisible && <Picker
                        pickerStyle={{position: 'absolute', top: '60%', right: '0',}}
                        onEmojiClick={(_, obj) => onEmojiClick(obj)}
                        disableAutoFocus
                        disableSearchBar
                    />}
                </div>
            </div>
            <div className='chat-input-micro'>
                <AudioOutlined />
            </div>
        </div>
    );
};

export default ChatInput;