import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// Simple password - in production, use env variable
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request: Request) {
    try {
        const { password } = await request.json();

        if (password === ADMIN_PASSWORD) {
            // Set secure cookie - Next.js 16 requires await
            const cookieStore = await cookies();
            cookieStore.set('admin_auth', 'authenticated', {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: '/',
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json(
            { error: 'Invalid password' },
            { status: 401 }
        );
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Server error' },
            { status: 500 }
        );
    }
}

export async function DELETE() {
    // Logout
    const cookieStore = await cookies();
    cookieStore.delete('admin_auth');
    return NextResponse.json({ success: true });
}
