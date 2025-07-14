import {NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken";

const dummyUser = {
    email: "admin@example.com",
    password: "password123",
};

const JWT_SECRET = "your-secret-key";

export async function POST(req: NextRequest) {
    const {email, password} = await req.json();

    if (email === dummyUser.email && password === dummyUser.password) {
        const token = jwt.sign(
            {email: dummyUser.email},
            JWT_SECRET,
            {expiresIn: "1h"}
        );

        return NextResponse.json({
            success: true,
            token,
        });
    }

    return NextResponse.json({
        success: false,
        message: "Invalid credentials",
    }, {status: 401});
}
