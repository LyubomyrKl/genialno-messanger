import React from 'react';
import clsx from 'clsx';

interface IInputProps{
    placeholder?: string;
    name: string;
    type?: React.HTMLInputTypeAttribute;
    children?: React.ReactNode;
    icon: React.ReactNode;
    error?: boolean;
}

const Input: React.FC<IInputProps> = ({
    placeholder,
    name,
    type = 'text',
    children,
    icon,
    error
}) => {
    return (
        <div className='flex flex-col justify-center'>
            <label className='pb-3 text-xl'
                   htmlFor={name}>{children}</label>
            <div className={clsx('flex items-center border-[2px] bg-app-bg-white rounded-lg py-2 px-4', error && "border-red-600")}>
                <input id={name} placeholder={placeholder} name={name} type={type}
                       className='flex-1 rounded-md focus:outline-none bg-transparent border-0'
                />
                <span className='text-2xl'>
                    {icon}
                </span>
            </div>
        </div>
    );
};

export default Input;