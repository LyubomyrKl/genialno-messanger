'use server'

import dbClient from "@/app/db/mongodb";
import {FormState, SignupFormSchema} from '@/app/lib/signup-form/definitions';
import bcrypt from 'bcrypt';
import { ObjectId } from "mongodb";
import { redirect } from "next/navigation";

export async function signup(prevState: FormState, formData: FormData) {

    console.log(prevState, formData);
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        password: formData.get('password'),
    })

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        console.log(validatedFields.error);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, password } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)

    console.log('valiadates data', validatedFields.data);
    //
    // const data = await dbClient.db('messenger')
    //     .collection('users')
    //     .insertOne({
    //         name,
    //         password: hashedPassword,
    //     })
    //
    // console.log(data);


    // if (!data) {
    //     return {
    //         message: 'An error occurred while creating your account.',
    //     }
    // }


    // TODO:
    // 4. Create user session
    // 5. Redirect user
}