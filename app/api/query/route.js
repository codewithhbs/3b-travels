import { NextResponse } from "next/server";

export async function POST(req) {
  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 }); }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const mobile = String(body.mobile || "").replace(/\D/g, "").slice(-10);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^[6-9]\d{9}$/.test(mobile)) {
    return NextResponse.json({ ok: false, error: "Name, e-mail and mobile are required" }, { status: 422 });
  }

  const query = {
    name, email, mobile,
    destination: String(body.destination || "").slice(0, 100),
    travelDate: String(body.travelDate || "").slice(0, 20),
    travellers: String(body.travellers || "").slice(0, 4),
    message: String(body.message || "").slice(0, 2000),
    source: String(body.source || ""),
    at: new Date().toISOString(),
  };

  // TODO: connect delivery — nodemailer / CRM / WhatsApp API. Logged for now.
  console.log("[3B Travels] New query:", query);

  return NextResponse.json({ ok: true });
}
