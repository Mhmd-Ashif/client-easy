import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  return NextResponse.json({ message: "Hello from API!" });
}

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, company, service, message } = body;

  // Set up transporter (Gmail example)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // where you want to receive emails
      subject: `New Contact Form Submission from ${name}`,
      html: `
  <div style="
    background-color: #ffffff;
    font-family: 'Manrope', sans-serif;
    color: #1f1f1f;
    padding: 24px;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    line-height: 1.6;
  ">
    <h2 style="margin-bottom: 16px; font-weight: 600;">📬 New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Message:</strong><br/>${message}</p>
    <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
    <footer style="font-size: 14px; color: #888;">
      You received this message from your website's contact form.
    </footer>
  </div>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
