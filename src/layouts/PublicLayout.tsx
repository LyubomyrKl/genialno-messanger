import React from 'react';
import {IWithChildren} from '@src/types/common';


const PublicLayout: React.FC<IWithChildren> = ({children}) => {
    return (
        <section className='auth centered-by-flex row-column'>
            {children}
        </section>
    );
};

export default PublicLayout;