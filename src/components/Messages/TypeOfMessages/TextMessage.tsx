import React from 'react';

interface Props {
    text?: string
    attachments?: {
        url: string
        filename: string
    }[]
}

const TextMessage = ({text, attachments}: Props) => {
    return (
        <div>
            {text  && <div className='message-bubble'>
                <p className='message-text'>{text}</p>
            </div>}

            {attachments && <div className="message-attachments">
                {attachments.map(item => {
                    return <div key={item.url} className="message-attachments-item">
                        <img src={item.url} alt={item.filename}/>
                    </div>;
                })}
            </div>}
        </div>
    );
};

export default TextMessage;