import {z} from 'zod';

const LoginFormSchema = z.object({
    name: z
        .string({
            required_error: 'Username is required',
        })
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    password: z
        .string({
            required_error: 'Password is required',
        })
        .min(1)

});





export const validateLoginForm = (name: FormDataEntryValue | null, password: FormDataEntryValue | null) => {

    return LoginFormSchema.safeParse({
        name,
        password
    })
}