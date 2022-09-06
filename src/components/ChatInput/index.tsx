import React from 'react';
import {SmileOutlined, CameraOutlined, AudioOutlined} from '@ant-design/icons';
import {Input} from 'antd';
import './ChatInput.scss';

const ChatInput = () => {
    return (
        <div className='chat-input'>
            <div className='chat-input-smile'>
                <SmileOutlined />
            </div>
            <Input className='chat-input-field' placeholder='Type message text'/>
            <div className='chat-input-camera'>
                <CameraOutlined />
            </div>
            <div className='chat-input-micro'>
                <AudioOutlined />
            </div>
        </div>
    );
};

export default ChatInput;