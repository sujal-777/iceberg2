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
      subject: 'Thank You for Showing Interest in Partnering with ICEBERG!',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0048B0;">Hi ${first_name},</h2>

          <p>Thank you for your interest in partnering with <strong>ICEBERG</strong>.</p>

          <p>We’re excited about the possibility of collaborating with passionate individuals and organizations who share our vision — to empower CA, CMA, and CS aspirants with top-quality education and guidance.</p>

          <p>Your partnership request has been received and is currently under review. Our team will get in touch with you shortly to explore potential synergies and next steps.</p>

          <p style="margin-top: 30px;">If you have any additional details to share or questions in the meantime, feel free to reply to this email.</p>

          <p>Looking forward to building something impactful together.</p>

          <p>Best regards,<br/>Team ICEBERG</p>

          <hr style="margin-top: 30px;" />
          <p style="font-size: 12px; color: #888;">ICEBERG — Collaborating to elevate the future of CA, CMA & CS education in India.</p>
        </div>
      `,
    });

    console.log(res);

    return new Response("Partner email sent!", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending partner email", { status: 500 });
  }
}
