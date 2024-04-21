import { z } from 'zod';
import {
    IConflictSignUpState,
    IErrorSignUpState,
    ISuccessSignUpState,
    IValidateFormValuesSignUpFormResponse,
    IValidateSignUpFormResponse
} from '@/app/actions/auth/definitions';
import dbClient from '@/app/db/mongodb';

// Define schema for sign-up form validation using Zod
const SignupFormSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
});

// Function to validate the sign-up form data
const validateSignUpForm = (formData: FormData): IValidateSignUpFormResponse => {
    const rowName = formData.get('name');
    const rowPassword = formData.get('password');

    // Validate form values
    const { status, fieldsData } = validateSignUpFormValues(rowName, rowPassword);

    if (status === 'error') {
        // Return error state if validation fails
        return {
            status,
            state: fieldsData as IErrorSignUpState,
        };
    }

    const { name } = fieldsData as ISuccessSignUpState;
    // Check if the user already exists
    const isPresentAlready = validateSignUpFormConflictByName(name);

    if (isPresentAlready !== null) {
        // Return conflict state if user already exists
        return {
            status: 'conflict',
            state: {
                messages: ['User already exists']
            } as IConflictSignUpState,
        };
    }

    // Return success state if validation passes and user doesn't exist
    return {
        status: 'success',
        state: fieldsData as ISuccessSignUpState,
    };
};



// Function to validate sign-up form values against defined schema
const validateSignUpFormValues = (
    name: FormDataEntryValue | null,
    password: FormDataEntryValue | null
): IValidateFormValuesSignUpFormResponse => {
    const validatedFields = SignupFormSchema.safeParse({
        name,
        password,
    });

    return {
        status: validatedFields.success ? 'success' : 'error',
        fieldsData: validatedFields.success ? validatedFields.data : validatedFields.error.flatten().fieldErrors,
    };
};




// Function to check if a user with the given name already exists
const validateSignUpFormConflictByName = async (name: string) => {
    return await dbClient.db('messenger').collection('users').findOne({ name });
};





// Export the main function for sign-up form validation
export default validateSignUpForm;