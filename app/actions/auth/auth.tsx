'use server'

import dbClient from "@/app/db/mongodb";

import bcrypt from 'bcrypt';
import {
    IConflictSignUpState,
    IErrorSignUpState,
    ISuccessSignUpState, TSignupFormState,
} from '@/app/actions/auth/definitions';
import validateSignUpForm from '@/app/actions/auth/signup-form-validator';

export async function signup(prevState: TSignupFormState, formData: FormData): Promise<TSignupFormState | undefined>{
    const {status, state } = validateSignUpForm(formData)

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

    return {
        status,
        responseData: state as ISuccessSignUpState
    }

}


