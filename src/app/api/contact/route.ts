import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.EMAIL_TO;

    const sender = process.env.RESEND_FROM_EMAIL;

    if (!apiKey || !recipient || !sender) {
      console.error("Email configuration is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "The email service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    const body = await request.json();

    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const type = String(body.type ?? "").trim();
    const rating = String(body.rating ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const property = String(body.property ?? "").trim();
    const message = String(body.message ?? "").trim();
    const comments = String(body.comments ?? "").trim();

    if (!name || !type) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide your name and message type.",
        },
        { status: 400 }
      );
    }

    if (type !== "feedback" && type !== "quote") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form type.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(apiKey);

    const subject =
      type === "feedback"
        ? "New Customer Feedback - Virtuous Pressure & Window Washing"
        : "New Quote Request - Virtuous Pressure & Window Washing";

    const text =
      type === "feedback"
        ? [
            "NEW CUSTOMER FEEDBACK",
            "",
            `Name: ${name}`,
            `Email: ${email || "Not provided"}`,
            `Rating: ${rating || "Not provided"} / 5`,
            "",
            "Comments:",
            comments || message || "No comments provided.",
          ].join("\n")
        : [
            "NEW QUOTE REQUEST",
            "",
            `Name: ${name}`,
            `Email: ${email || "Not provided"}`,
            `Phone: ${phone || "Not provided"}`,
            `Service: ${service || "Not provided"}`,
            `Property type: ${property || "Not provided"}`,
            "",
            "Project details:",
            message || comments || "No additional details provided.",
          ].join("\n");

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      subject,
      text,
      ...(email ? { replyTo: email } : {}),
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "We could not send your message. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        type === "feedback"
          ? "Thank you for your feedback!"
          : "Your quote request has been sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}