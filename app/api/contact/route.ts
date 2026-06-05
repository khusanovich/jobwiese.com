import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL ?? 'info@Jobwiese.com';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'Jobwiese <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Neue Anfrage von ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #db2777;">Neue Kontaktanfrage – Jobwiese</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td><td>${name}</td></tr>
            <tr><td style="padding: 8px 0; font-weight: bold;">E-Mail:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-weight: bold;">Telefon:</td><td>${phone}</td></tr>` : ''}
          </table>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
          <h3 style="color: #374151;">Nachricht:</h3>
          <p style="color: #4b5563; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
