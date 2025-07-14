import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/app/config';

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    if (!code) {
        return NextResponse.json({ error: 'Missing authorization code' }, { status: 400 });
    }

    try {
        // Exchange authorization code for access token
        const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                code: code,
                client_id: config.google.clientId!,
                client_secret: config.google.clientSecret!,
                redirect_uri: config.google.redirectUri!,
                grant_type: 'authorization_code',
            }),
        });

        const tokenData = await tokenRes.json();

        if (!tokenData.access_token) {
            return NextResponse.json({ error: 'Failed to get access token', details: tokenData }, { status: 500 });
        }

        // Use access token to get user info
        const userInfoRes = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${tokenData.access_token}`,
            },
        });

        const userInfo = await userInfoRes.json();

        // You can now:
        // - Create a user session
        // - Save user to DB
        // - Issue a JWT
        // For now, just return the user info

        return NextResponse.json({ user: userInfo });
    } catch (err) {
        console.error('Google OAuth Error:', err);
        return NextResponse.json({ error: 'Something went wrong during authentication' }, { status: 500 });
    }
}
