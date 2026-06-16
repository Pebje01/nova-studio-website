import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { voornaam, achternaam, email, bericht, voorkeur } = await req.json();

  if (!voornaam || !email) {
    return NextResponse.json({ error: "Verplichte velden ontbreken" }, { status: 400 });
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: process.env.WEB3FORMS_KEY,
      subject: `Nieuwe intakeaanvraag van ${voornaam} ${achternaam}`,
      name: `${voornaam} ${achternaam}`,
      email,
      voorkeur: voorkeur || "niet opgegeven",
      bericht: bericht || "",
    }),
  });

  const data = await res.json();

  if (!data.success) {
    console.error("Web3Forms fout:", data);
    return NextResponse.json({ error: "Verzenden mislukt" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
