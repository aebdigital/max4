"use client";

import Link from "next/link";
import { useState } from "react";

const homeNavigation = [
  { label: "O nás", href: "#o-nas" },
  { label: "Služby", href: "#sluzby" },
  { label: "Prečo my", href: "#preco-my" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

const subpageNavigation = [
  { label: "O nás", href: "/#o-nas" },
  { label: "Služby", href: "/#sluzby" },
  { label: "Prečo my", href: "/#preco-my" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

type SiteHeaderProps = {
  home?: boolean;
};

export function SiteHeader({ home = false }: SiteHeaderProps) {
  const navigation = home ? homeNavigation : subpageNavigation;
  const headerZIndex = 2147483000;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 isolate"
      style={{ zIndex: headerZIndex }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.72)_68%,rgba(0,0,0,0)_100%)]" />
      <div
        className="relative mx-auto flex w-full max-w-[92rem] items-center justify-between gap-6 px-6 py-2.5 sm:px-8 sm:py-3 lg:px-12"
        style={{ zIndex: headerZIndex + 1 }}
      >
        <Link
          href="/"
          className="relative text-3xl uppercase leading-none tracking-[0.02em] drop-shadow-[0_3px_16px_rgba(0,0,0,0.9)] sm:text-5xl"
          style={{
            zIndex: headerZIndex + 2,
            color: "#ffffff",
            fontFamily: "var(--font-display), sans-serif",
            fontWeight: 400,
          }}
        >
          Autoservis Max4
        </Link>
        <div
          className="relative flex items-center gap-4 sm:gap-6"
          style={{ zIndex: headerZIndex + 2 }}
        >
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span className="block h-0.5 w-full bg-white" />
              <span className="block h-0.5 w-full bg-white" />
              <span className="block h-0.5 w-full bg-white" />
            </span>
          </button>
          <nav className="hidden flex-wrap gap-5 text-base text-white lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] transition hover:text-white/75"
                style={{
                  color: "#ffffff",
                  fontFamily: "var(--font-body), sans-serif",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:+421904427684"
            className="hidden rounded-full bg-white px-5 py-3 font-[family:var(--font-display)] text-xl uppercase leading-none text-black shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition hover:bg-white/88 sm:px-7 sm:text-2xl md:inline-flex"
          >
            0904 427 684
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/35 transition ${isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        style={{ zIndex: headerZIndex + 20 }}
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        className={`fixed left-0 top-0 h-screen w-[92vw] max-w-md bg-white/96 px-6 py-2.5 text-black shadow-[0_24px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-transform duration-300 sm:px-8 sm:py-3 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: headerZIndex + 30 }}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="relative text-3xl uppercase leading-none tracking-[0.02em] text-black sm:text-5xl"
            style={{
              color: "#111111",
              fontFamily: "var(--font-display), sans-serif",
              fontWeight: 400,
            }}
          >
            Autoservis Max4
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center text-black"
          >
            <span className="text-4xl leading-none">x</span>
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-[family:var(--font-display)] text-3xl uppercase leading-none text-black sm:text-4xl"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+421904427684"
          className="mt-10 inline-flex rounded-full bg-black px-5 py-3 font-[family:var(--font-display)] text-xl uppercase leading-none !text-white"
        >
          0904 427 684
        </a>
      </aside>
    </header>
  );
}
