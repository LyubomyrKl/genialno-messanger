import React from 'react';
import './Dialog.scss';
import { AudioOutlined  } from '@ant-design/icons';
import IconReadied from '@components/IconReaded';
import classNames from 'classnames';
import {format, getDay, isThisWeek, isToday, isYesterday} from 'date-fns';
import {dayOfWeekAsString} from '@src/utils';
import {letters} from '@src/consts';

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

    const firstLetter = fullName.at(0);
    const defaultBackGround = letters.filter((value)=> value.letter === firstLetter?.toLowerCase())[0].color;

    return (
        <div className={classNames('dialog',{'dialog-online': isOnline} )}>
            <div className="dialog-avatar">
                {avatar ?
                    <img src={avatar} alt={`${fullName} avatar`}/>
                    :
                    <div className='dialog-default-avatar' style={{background: defaultBackGround}}>{firstLetter?.toUpperCase()}</div>
                }
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