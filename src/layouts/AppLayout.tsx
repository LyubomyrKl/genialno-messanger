import React from 'react';
import {IWithChildren} from '@src/types/common';




const AppLayout: React.FC<IWithChildren> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AppLayout;