// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Contact form data:", body);

    return NextResponse.json({ success: true, message: "Contact received" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid request" }, { status: 400 });
  }
}
