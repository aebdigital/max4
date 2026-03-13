import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: "Neplatné dáta formulára." }, { status: 400 });
  }

  const name = normalizeString(payload.name);
  const email = normalizeString(payload.email);
  const phone = normalizeString(payload.phone);
  const website = normalizeString(payload.website);

  if (website) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Vyplňte prosím meno, e-mail aj telefónne číslo." },
      { status: 400 },
    );
  }

  const smtpApiKey = process.env.SMTP2GO_API_KEY;
  const toEmail = process.env.SMTP2GO_TO_EMAIL ?? "servismax4@gmail.com";
  const fromEmail = process.env.SMTP2GO_FROM_EMAIL;
  const senderName = process.env.SMTP2GO_FROM_NAME ?? "MAX4 Web";

  if (!smtpApiKey || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Formulár ešte nie je dokončený na serveri. Nastavte SMTP2GO_API_KEY a SMTP2GO_FROM_EMAIL.",
      },
      { status: 500 },
    );
  }

  const subject = `Novy dopyt z webu MAX4 od ${name}`;
  const submittedAt = new Date().toLocaleString("sk-SK", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Bratislava",
  });

  const textBody = [
    "Novy dopyt z webu MAX4",
    "",
    `Meno a priezvisko: ${name}`,
    `E-mail: ${email}`,
    `Telefon: ${phone}`,
    `Odoslane: ${submittedAt}`,
  ].join("\n");

  const htmlBody = `
    <h1>Novy dopyt z webu MAX4</h1>
    <p><strong>Meno a priezvisko:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Odoslane:</strong> ${escapeHtml(submittedAt)}</p>
  `;

  const smtpResponse = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Smtp2go-Api-Key": smtpApiKey,
    },
    body: JSON.stringify({
      sender: fromEmail,
      to: [toEmail],
      subject,
      text_body: textBody,
      html_body: htmlBody,
      custom_headers: [
        {
          header: "X-MAX4-Reply-Email",
          value: email,
        },
        {
          header: "X-MAX4-Reply-Phone",
          value: phone,
        },
        {
          header: "X-MAX4-Sender-Name",
          value: name,
        },
        {
          header: "X-MAX4-Source",
          value: senderName,
        },
      ],
    }),
  });

  const smtpPayload = (await smtpResponse.json().catch(() => null)) as
    | {
        error?: string;
        data?: {
          succeeded?: number;
          failed?: number;
        };
      }
    | null;

  if (!smtpResponse.ok || !smtpPayload || smtpPayload.data?.succeeded !== 1) {
    return NextResponse.json(
      {
        error:
          smtpPayload?.error ??
          "E-mail sa nepodarilo odoslať cez SMTP2GO. Skontrolujte API kľúč a overenú odosielaciu adresu.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
