import { NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";
import { resend } from "@/utils/resend";

export async function POST(req: Request) {
    const { firstName, email } = await req.json();

    if (!firstName) {
        return NextResponse.json({ success: false, message: "enter your first name" }, { status: 400 });
    }

    if (!email || !email.includes("@")) {
        return NextResponse.json({ success: false, message: "invalid email" }, { status: 400 });
    }

    const { error } = await supabase.from("early_access_signups").insert([{ first_name: firstName, email }]);

    if (error) {
        if (error.code === "23505") {
            return NextResponse.json({ success: false, message: "Already signed up" }, { status: 409 });
        }
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }

    // 📨 Send confirmation email
    try {
        await resend.emails.send({
            from: "Ismael S. <onboarding@rep-reflect.ishthecoder.com>",
            to: [email],
            subject: "Thanks for joining RepReflect 🚀",
            html: `
        <h1>Hey ${firstName || "there"}, you're in!</h1>
        <p>Thanks for signing up for early access to <strong>RepReflect</strong> — the mindful fitness tracker.</p>
        <p>If you've got 30 seconds, could you fill out this form? 🗒️</p>
        <p>👉 <a href="https://tally.so/r/nPgJ1d" target="_blank">https://tally.so/r/nPgJ1d</a></p>
        <p>We're building a lift-and-run tracking app that will help with tracking progress and keep you mindful.</p>
        <p>No fluff. No distractions. Just clarity.</p>
        <p>We'll be sure to reach out as soon as we're ready for testers.</p>
        <p>Until then, keep training — and keep reflecting 🧠</p>
        <p>-- Ismael<br /><em>The RepReflect Team</em></p>
        `,
        });
    } catch (emailErr) {
        console.error("Email failed:", emailErr);
        // Optionally still return success — or report error
    }

    return NextResponse.json({ success: true });
}
