import React from 'react';
import {SignupForm} from '@/app/ui/auth/signup-form';

const Signup = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className='w-full max-w-[400px] flex flex-col items-center justify-center'>
                <h2 className='text-center text-2xl mb-5'>Registration Form</h2>
                <SignupForm/>
            </div>
        </main>
    );
};

export default Signup;