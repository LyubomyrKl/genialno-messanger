import React from 'react';
import {verifySession} from '@/app/lib/dal';

const MessagesPage = async () => {
    const session = await verifySession()


    console.log('session');
    return (
        <div>
            Some page
        </div>
    );
};

export default MessagesPage;