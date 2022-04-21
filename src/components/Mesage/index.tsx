import React from 'react';
import {IWithChildren} from '@src/types/common';
import distanceInWordsToNow from 'date-fns/formatDistanceToNow';
import './Message.scss';
interface Prop extends IWithChildren {
    avatar: string,
    time: string
    user: {
        name: string
    }
}


const Message: React.FC<Prop> = ({avatar, time, children}) => {
    return (
        <div className='message'>
            <div className="message-avatar">
                <img src={avatar} alt='User avatar'/>
            </div>
            <div className="message-content">
                <div className="message-bubble">
                    <p className='message-text'>{children}</p>
                </div>
                <span className='message-time'>{distanceInWordsToNow(new Date(time))}</span>
            </div>
        </div>
    );
};

export default Message;