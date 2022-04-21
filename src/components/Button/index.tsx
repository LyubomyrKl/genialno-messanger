import React from 'react';
import classNames from 'classnames';
import {NativeButtonProps} from 'antd/lib/button/button';
import { Button as BaseButton } from 'antd';
import './Button.scss';


const Button: React.FC<NativeButtonProps> = (props) => {
    const classez  = {
        'button--large': props.size === 'large'
    };

    return <BaseButton {...props} className={ classNames('button', props.className,classez)}/>;

};
export default Button;