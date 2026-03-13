# SMTP2GO setup

The contact form posts to `app/api/contact/route.ts` and sends email through the SMTP2GO HTTP API.

## Required environment variables

Copy `.env.example` to `.env.local` for local development or add the same variables in your hosting provider:

```bash
CONTACT_FORM_RECIPIENT=servismax4@gmail.com
SMTP2GO_API_KEY=api-xxxxxxxxxxxxxxxxxxxx
SMTP2GO_SENDER=noreply@your-verified-domain.sk
```

## Important note

`SMTP2GO_SENDER` must be an address that SMTP2GO recognizes as an allowed or verified sender for your account.

## Form flow

1. The website form submits JSON to `POST /api/contact`.
2. The route validates the request and blocks basic bot submissions via a hidden honeypot field.
3. The route calls SMTP2GO's `https://api.smtp2go.com/v3/email/send` endpoint.
4. MAX4 receives the inquiry at `CONTACT_FORM_RECIPIENT`.
