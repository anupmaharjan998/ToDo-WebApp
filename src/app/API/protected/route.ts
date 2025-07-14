import {NextRequest, NextResponse} from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your-secret-key";


export async function GET(req: NextRequest) {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return NextResponse.json({
            success: false,
            message: "No token provided"
        }, {status: 401});
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({
            success: true,
            message: "Valid token",
            decoded
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json({
            success: false,
            message: "Invalid token"
        }, {status: 401});
    }
}