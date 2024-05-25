import React from 'react';
import LoginForm from '@/app/ui/auth/login-form';

const LoginPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className='w-full max-w-[400px] flex flex-col items-center justify-center'>
                <h2 className='text-center text-2xl mb-5'>Login</h2>
                <LoginForm/>
            </div>
        </main>
    );
};

export default LoginPage;