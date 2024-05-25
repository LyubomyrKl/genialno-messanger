import {SignupForm} from '@/app/ui/auth/signup-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='w-full max-w-[400px] flex flex-col items-center justify-center'>
          <h2 className='text-center text-2xl mb-5'>Registration Form</h2>
          <SignupForm/>
      </div>
    </main>
  );
}
