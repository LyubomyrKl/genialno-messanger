import React from 'react';
import {CheckCircleOutlined, CheckOutlined} from '@ant-design/icons';

interface IconReadiedProps{
    isReadied: boolean | undefined
}

const IconReadied = ({isReadied}:IconReadiedProps) => (
    <>{isReadied ? <CheckCircleOutlined/> : <CheckOutlined/>}</>
);

export default IconReadied;