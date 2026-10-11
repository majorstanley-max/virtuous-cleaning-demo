import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";


const apiKey = process.env.GEMINI_API_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!apiKey) {
      console.error("GEMINI_API_KEY is missing from .env.local");

      return NextResponse.json(
        { error: "The assistant is not configured yet." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const message = body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { error: "Please keep your message under 2,000 characters." },
        { status: 400 }
      );
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: message.trim(),
      config: {
        systemInstruction: `
You are the virtual customer assistant for Virtuous Pressure & Window Washing.

Your job is to help website visitors with questions about window cleaning,
pressure washing, residential properties, commercial properties, and requesting
a cleaning quote.

Be polite, professional, friendly, and concise.

Explain services in plain English. If a visitor wants a quote, appointment,
or property assessment, direct them to the website's quote form or ask them
to contact the business by phone at (281) 902-2796 or email
virtuouspww@gmail.com.

Do not invent prices, confirmed appointments, service areas, insurance details,
business credentials, customer reviews, guarantees, or availability.

If you do not know an answer, say so honestly and recommend contacting the team.

Never claim that you have booked an appointment, sent an email, or saved a
customer's details. You are an informational assistant only.
        `,
      },
    });

    const reply = response.text?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "I couldn't prepare a response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini chat error:", error);

    return NextResponse.json(
      {
        error:
          "Sorry, the assistant is temporarily unavailable. Please contact our team directly.",
      },
      { status: 500 }
    );
  }
}