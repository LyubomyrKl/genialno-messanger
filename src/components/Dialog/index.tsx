import React from 'react';
import './Dialog.scss';
import { AudioOutlined  } from '@ant-design/icons';
import IconReadied from '@components/IconReaded';
import classNames from 'classnames';
import {format, getDay, isThisWeek, isToday, isYesterday} from 'date-fns';
import {dayOfWeekAsString} from '@src/utils';

interface Prop {
    user:{
        isOnline: boolean;
        fullName: string;
        isTyping: boolean;
        avatar: string | null;
    },
    lastMessage:{
        isAudio: boolean;
        text: string;
        isMe: boolean;
        isReadied: boolean;
        createdAt: Date | number;
        countUnreadMessage?: number | null;
    }
}

const Dialog = ( {user, lastMessage}:Prop ) => {
    const {isOnline, isTyping, fullName, avatar} = user;
    const {text, isMe, isReadied, countUnreadMessage, isAudio, createdAt} = lastMessage;

    const getMessageTime = (createdAt: Date | number) => {

        if (isToday(createdAt)) {
            return format(createdAt, 'HH:mm');
        }

        if(isYesterday(createdAt)){
            return 'Yesterday';
        }

        if (isThisWeek(createdAt)){
            return dayOfWeekAsString(getDay(createdAt));
        }

        return format(createdAt, 'MM/dd/yyyy');
        
    };

    return (
        <div className={classNames('dialog',{'dialog-online': isOnline} )}>
            <div className="dialog-avatar">
                <img src={avatar || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/' +
                    '271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?' +
                    'token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZD' +
                    'QxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7' +
                    'InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJ' +
                    'jLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.' +
                    'BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E'} alt={`${fullName} avatar`}/>
            </div>
            <div className="dialog-info-wrapper">
                <div className="dialog-info">
                    <b className="dialog-info-name">{fullName}</b>
                    <span className="dialog-info-date">
                        {getMessageTime(createdAt)}
                    </span>
                </div>
                <div className="dialog-message">
                    {isTyping && <span className='ml-5 color-light-dark font-wight-600 '> Is typing</span> }
                    {isAudio ? <span className='ml-5 color-light-dark font-wight-600 '><AudioOutlined /> Voice Message</span> : <span className="dialog-lastMessage-text">{text}</span>}
                    <span className="dialog-icon">
                        {isMe ?
                            <IconReadied isReadied={isReadied}/>
                            :
                            countUnreadMessage && <span className="dialog-message-count">{countUnreadMessage < 100 ? countUnreadMessage : '+100' }</span>
                        }
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Dialog;