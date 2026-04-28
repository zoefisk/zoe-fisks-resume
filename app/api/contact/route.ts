import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        const contactEmail = process.env.CONTACT_EMAIL;
        const contactFrom = process.env.CONTACT_FROM ?? "Portfolio Contact <onboarding@resend.dev>";

        if (!resendApiKey) {
            return NextResponse.json(
                { error: "Missing RESEND_API_KEY environment variable." },
                { status: 500 }
            );
        }

        if (!contactEmail) {
            return NextResponse.json(
                { error: "Missing CONTACT_EMAIL environment variable." },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Please fill out all fields." },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: contactFrom,
            to: contactEmail,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `
Name: ${name}
Reply Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { error: error.message ?? "Resend failed to send the email." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error("Contact form error:", error);

        return NextResponse.json(
            { error: "Unexpected server error while sending message." },
            { status: 500 }
        );
    }
}
