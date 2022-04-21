import classNames from 'classnames';
import React from 'react';
import './Block.scss';
import {IWithChildren} from '@src/types/common';


interface IBlockProps extends IWithChildren{
    className?: string
}

const Block: React.FC<IBlockProps>= (props) => {
    return (
        <div className={classNames('block', props.className)}>
            {props.children} 
        </div>
    );
};

export default Block;