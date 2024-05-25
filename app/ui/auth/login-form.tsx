'use client'

import React, {useState} from 'react';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri';
import Input from '@/app/ui/components/input';
import {IoPerson} from 'react-icons/io5';
import {useFormState, useFormStatus} from 'react-dom';
import {login} from '@/app/actions/auth/auth';

const LoginForm = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const toggleVisibility = () =>  setIsPasswordVisible(state => !state);
    const [state, action] = useFormState(login, null)

    return (
        <form action={action}>
            <div className="pb-5">
                <Input
                    name={'name'}
                    placeholder="Name"
                    icon={<IoPerson/>}
                >
                    Name
                </Input>
            </div>
            {state?.status ==='error' && state?.responseData?.name &&
                <div  className={'error-text pb-5'}>
                    <ul>
                        {/*@ts-ignore*/}
                        {state.responseData.name.map((error) => (
                            <li key={error}>- {error}</li>
                        ))}
                    </ul>
                </div>

           }
            <div className="pb-5">
                <Input

                    name={'password'}
                    type={isPasswordVisible ? 'text' : 'password'}
                    placeholder="Password"
                    icon={isPasswordVisible ?
                        <RiEyeLine onClick={toggleVisibility}/>
                        :
                        <RiEyeOffLine onClick={toggleVisibility}
                        />}
                >
                    Password
                </Input>
                {state?.status ==='error' && state?.responseData?.password &&
                    <div className={'error-text pb-5'}>
                        <ul>
                            {/*@ts-ignore*/}
                            {state.responseData.password.map((error) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>

                }
            </div>

            <div className="flex justify-center">
                <LoginButton/>
            </div>
        </form>
    );
};

export default LoginForm;

export function LoginButton() {
    const {pending} = useFormStatus()

    return (
        <button
            className='bg-app-bg-blue px-5 py-2 rounded-lg text-lg transition text-app-black hover:bg-app-bg-blue-light'
            aria-disabled={pending}
            type="submit"
        >
            {pending ? 'Submitting...' : 'Sign up'}
        </button>
    )
}