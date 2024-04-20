'use client'
import { useFormState, useFormStatus} from 'react-dom'
import { signup } from '@/app/actions/auth'
import Input from '@/app/ui/components/input';
import {IoPerson} from 'react-icons/io5';
import {AiOutlineEye} from 'react-icons/ai';
import {useState} from 'react';
import {RiEyeLine, RiEyeOffLine} from 'react-icons/ri';

export function SignupForm() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [state, action] = useFormState(signup, null)

    const toggleVisibility = () => {
        setIsPasswordVisible(state => !state);
    }

    return (
        <div className='w-full'>
            <form action={action}>
                <div className='pb-5'>
                    <Input
                        error={false}
                        name={'name'}
                        placeholder="Name"
                        icon={<IoPerson/>}
                    >
                        Name
                    </Input>
                </div>
                {state?.errors?.name && <p>{state.errors.name}</p>}

                <div>
                    <Input
                        error={true}
                        name={'password'}
                        type={isPasswordVisible ? 'text' : 'password'}
                        placeholder="Password" icon={isPasswordVisible ? <RiEyeLine onClick={toggleVisibility}/> : <RiEyeOffLine onClick={toggleVisibility}/>}
                    >
                        Password
                    </Input>
                </div>
                {state?.errors?.password && (
                    <div>
                        <p>Password must:</p>
                        <ul>
                            {state.errors.password.map((error) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className='flex items-center justify-center py-5'>
                    <SignupButton/>
                </div>
            </form>
        </div>
    )
}


export function SignupButton() {
    const {pending, data, action, method} = useFormStatus()

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