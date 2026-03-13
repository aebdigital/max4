"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  website: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  website: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error ?? "Správu sa nepodarilo odoslať.");
      }

      setFormState(initialFormState);
      setStatus({
        type: "success",
        message: "Ďakujeme. Váš dopyt bol odoslaný a ozveme sa vám čo najskôr.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Odoslanie sa nepodarilo. Skúste to prosím znova.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[var(--line)] bg-[var(--background)] p-6">
      <div className="grid gap-5">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--brand)]">Kontaktný formulár</p>
          <h3 className="mt-3 font-[family:var(--font-display)] text-3xl uppercase leading-none">
            Napíšte nám a ozveme sa vám späť
          </h3>
        </div>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Meno a priezvisko</span>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={(event) =>
              setFormState((currentValue) => ({
                ...currentValue,
                name: event.target.value,
              }))
            }
            required
            autoComplete="name"
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">E-mailová adresa</span>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={(event) =>
              setFormState((currentValue) => ({
                ...currentValue,
                email: event.target.value,
              }))
            }
            required
            autoComplete="email"
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-medium">Telefónne číslo</span>
          <input
            type="tel"
            name="phone"
            value={formState.phone}
            onChange={(event) =>
              setFormState((currentValue) => ({
                ...currentValue,
                phone: event.target.value,
              }))
            }
            required
            autoComplete="tel"
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]"
          />
        </label>

        <label className="hidden">
          <span>Website</span>
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formState.website}
            onChange={(event) =>
              setFormState((currentValue) => ({
                ...currentValue,
                website: event.target.value,
              }))
            }
          />
        </label>

        <p className="text-sm leading-7 text-[color:var(--muted)]">
          Odoslaním formulára súhlasíte so spracovaním údajov podľa{" "}
          <Link href="/ochrana-osobnych-udajov" className="underline decoration-[var(--brand)] underline-offset-4">
            zásad ochrany osobných údajov
          </Link>
          .
        </p>

        <label className="flex items-start gap-3 text-sm leading-7 text-[color:var(--muted)]">
          <input
            type="checkbox"
            required
            className="mt-1 h-4 w-4 rounded border border-black/15 accent-[var(--brand)]"
          />
          <span>Potvrdzujem, že som sa oboznámil so zásadami ochrany osobných údajov.</span>
        </label>

        {status ? (
          <div
            className={`rounded-2xl px-4 py-3 text-sm leading-7 ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-800"
                : "bg-rose-50 text-rose-800"
            }`}
          >
            {status.message}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-[var(--brand)] px-6 py-3 font-[family:var(--font-display)] text-sm uppercase tracking-[0.16em] text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Odosielam..." : "Odoslať dopyt"}
        </button>
      </div>
    </form>
  );
}
