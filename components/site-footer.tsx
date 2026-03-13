import Link from "next/link";
import { CookieSettingsButton } from "./cookie-settings-button";

export function SiteFooter() {
  return (
    <footer className="px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[92rem] flex-col gap-4 border-t border-[var(--line)] pt-8 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>@ Max4 all rights reserved 2026</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/ochrana-osobnych-udajov"
            className="underline decoration-[var(--brand)] underline-offset-4"
          >
            Ochrana osobných údajov
          </Link>
          <CookieSettingsButton className="underline decoration-[var(--brand)] underline-offset-4">
            Nastavenia cookies
          </CookieSettingsButton>
          <a href="https://aebdigital.sk/" className="underline decoration-[var(--brand)] underline-offset-4">
            Tvorba stránky - AEB Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
