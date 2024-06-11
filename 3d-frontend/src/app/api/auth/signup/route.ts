import { sign } from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { COOKIE_NAME, MAX_AGE } from "@/constant";

export async function POST(request:Request) {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
        return new Response('Missing email or password', { status: 400 });
    }

    if (email !== 'test' || password !== 'test') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const secret = process.env.JWT_SECRET || "";

    const token = sign({ email }, secret, { expiresIn: MAX_AGE });

    const serialized = serialize(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: MAX_AGE,
        sameSite: "strict",
        path: "/",
    });

    const response = {
        message: 'Authenticated',
    }

    return new Response(JSON.stringify(response), { status: 200, headers: {
        "Set-Cookie": serialized,
    }});
    
}