'use server'

import dbClient from "@/app/db/mongodb";

import bcrypt from 'bcrypt';
import {
    IConflictSignUpState,
    IErrorSignUpState,
    ISuccessSignUpState, TSignupFormState,
} from '@/app/actions/auth/definitions';
import validateSignUpForm from '@/app/actions/auth/signup-form-validator';
import {createSession, deleteSession} from '@/app/lib/session/session';
import {redirect} from 'next/navigation';
import {Paths} from '@/app/conts/paths';
import {validateLoginForm} from '@/app/actions/auth/login-form-validator';

export async function signup(prevState: TSignupFormState, formData: FormData): Promise<TSignupFormState | undefined>{
    const {status, state } = await validateSignUpForm(formData)

    if(status === 'error'){
        return {
            status,
            responseData: state as IErrorSignUpState
        }
    }

    if(status === 'conflict'){
        return {
            status,
            responseData: state as IConflictSignUpState
        }
    }


    const { name, password } = state as ISuccessSignUpState
    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await dbClient.db('messenger')
        .collection('users').insertOne({name, password: hashedPassword})


    if (!user.insertedId) {
        return {
            status: 'conflict',
            responseData: {
                messages: ['An error occurred while creating your account.']
            },
        }
    }

    await createSession(user.insertedId)
    redirect(Paths.messages)
}


export async function login(_: any, formData: FormData){
    const rawName = formData.get('name');
    const rawPassword = formData.get('password');

    const validatedFields = validateLoginForm(rawName, rawPassword)


    if(!validatedFields.success){
        return {
            status: 'error',
            responseData: validatedFields.error.flatten().fieldErrors
        }
    }

    const user = await dbClient.db('messenger')
        .collection('users').findOne({name: rawName})

    if (!user) {
        return {
            status: 'error',
            responseData: {
                name: ['User not found.']
            }
        };
    }

    const passwordMatch = bcrypt.compare(String(rawPassword), user.password);

    if (!passwordMatch) {
        return {
            status: 'error',
            responseData: {
                password: ['Invalid password.']
            }
        };
    }

    await createSession(user._id);
    redirect(Paths.messages);
}

export async function logout() {
    deleteSession()
    redirect('/login')
}


