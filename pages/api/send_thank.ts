// /app/api/send-thank-you/route.ts (Next.js 13/14 API route)
import { Resend } from 'resend';
import { auth } from '@clerk/nextjs/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { userId } = await auth(); // from Clerk
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    // fetch user details from Clerk
    const userRes = await fetch(`https://api.clerk.dev/v1/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
      },
    });
    const user = await userRes.json();

    const email = user.email_addresses?.[0]?.email_address;
    const name = user.first_name || "there";

    if (!email) {
      return new Response("No email found", { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Thanks for filling out the form!',
      html: `<p>Hi ${name},</p><p>Thank you for filling out the form. We'll connect with you shortly!</p>`,
    });

    return new Response("Email sent!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
