'use client'
import { useFormState, useFormStatus} from 'react-dom'
import { signup } from '@/app/actions/auth/auth'
import Input from '@/app/ui/components/input';
import {IoPerson} from 'react-icons/io5';
import {useState} from 'react';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri';

export function SignupForm() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [state, action] = useFormState(signup, null)

    const toggleVisibility = () =>  setIsPasswordVisible(state => !state);

    const hasStatePasswordError = state?.status == 'error' && state.responseData.hasOwnProperty('password')
    const hasStateNameError = state?.status == 'error' && state.responseData.hasOwnProperty('name')
    const hasStateMessageError = state?.status == 'error' && state.responseData.hasOwnProperty('message')


    const hasConflict = state?.status == 'conflict';


    return (
        <div className='w-full'>
            <form action={action}>
                <div className='pb-5'>
                    <Input
                        error={hasStateNameError}
                        name={'name'}
                        placeholder="Name"
                        icon={<IoPerson/>}
                    >
                        Name
                    </Input>
                    {hasStateNameError && (
                        <div className={'error-text'}>
                            <p>Password must:</p>
                            <ul>
                                {/*@ts-ignore*/}
                                {state.responseData.name.map((error) => (
                                    <li key={error}>- {error}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>


                <div>
                    <Input
                        error={hasStatePasswordError}
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
                    {hasStatePasswordError && (
                        <div className={'error-text'}>
                            <p>Password must:</p>
                            <ul>
                                {/*@ts-ignore*/}
                                {state.responseData.password.map((error) => (
                                    <li key={error}>- {error}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                {/*@ts-ignore*/}
                {hasConflict && <p className={'text-center error-text mt-3'}>{state?.responseData.messages[0]}</p>}

                <div className='flex items-center justify-center py-5'>
                    <SignupButton/>
                </div>
                {/*@ts-ignore*/}
                {hasStateMessageError && state.responseData.messages.map((message) => (
                    <p key={message} className={'text-center error-text'}>{message}</p>
                ))}


            </form>
        </div>
    )
}


export function SignupButton() {
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