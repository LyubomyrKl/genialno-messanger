import 'server-only'
import {cache} from 'react';
import { cookies } from 'next/headers'
import { decrypt } from '@/app/lib/session/session'
import {redirect} from 'next/navigation';
import {Paths} from '@/app/conts/paths';

export const verifySession = cache(async () => {
    const cookie = cookies().get('session')?.value
    const session = await decrypt(cookie)

    if (!session?.id) {
        redirect('/login')
    }

    return { isAuth: true, userId: session.userId }
})
