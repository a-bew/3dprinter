import { COOKIE_NAME } from "@/constant";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = cookies();
    const token = cookieStore.get(COOKIE_NAME);
    if (!token) {
        return NextResponse.json({message: "Unauthorized"}, {
            status: 401,
        });
    } 

    const { value } = token;
    const secret = process.env.JWT_SECRET || "";

    try {
        verify(value, secret);

        const response = {
            user: "Super Top Secret User"
        }
        return NextResponse.json({message: "Authorized"}, {
            status: 200,
        });
    } catch (e) {
        return NextResponse.json({message: "Something went wrong"}, {
            status: 400,
        });
    }

}