import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, first_name } = await req.json();

    if (!email || !first_name) {
      return new Response("Missing name or email", { status: 400 });
    }

    const res = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'ICEBERG Counseling Form Submitted Successfully!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0048B0;">Hi ${first_name},</h2>
          <p>Thank you for submitting the counseling form on <strong>ICEBERG</strong>.</p>

          <p>We’re thrilled to support your journey toward becoming a successful <strong>CA, CMA, or CS professional</strong>.</p>

          <p>Our team will carefully review your information and reach out to you shortly with the next steps. If you have any urgent questions, feel free to reply to this email.</p>

          <p style="margin-top: 30px;">Until then, stay focused and keep moving forward!</p>

          <p>Warm regards,<br/>Team ICEBERG</p>
          <hr style="margin-top: 30px;" />
          <p style="font-size: 12px; color: #888;">This is an automated message from ICEBERG — Your trusted partner for CA, CMA, and CS preparation.</p>
        </div>
      `,
    });

    console.log(res);

    return new Response("Email sent!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
