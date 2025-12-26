import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function checkAuth() {
    const cookieStore = await cookies();
    const authCookie = cookieStore.get('admin_auth');

    if (!authCookie || authCookie.value !== 'authenticated') {
        redirect('/admin/login');
    }

    return true;
}
