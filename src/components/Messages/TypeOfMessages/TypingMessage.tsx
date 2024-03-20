import React from 'react';


interface Props{
    avatar: string;
}

const TypingMessage = ({avatar}: Props) => {
    return (
        <div className='message message-typing'>
            <div className='message-avatar'>
                <img src={avatar} alt='User avatar'/>
            </div>
            <div className='message-content'>
                <div className='message-bubble'>
                    <div className="message-typing-container">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TypingMessage;