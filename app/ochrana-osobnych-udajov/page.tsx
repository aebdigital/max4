import Link from "next/link";
import Image from "next/image";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Ochrana osobných údajov | Max4 Autoservis Bratislava",
};

const rights = [
  "Prístup k osobným údajom, ktoré spracúvame",
  "Oprava nepresných alebo neúplných údajov",
  "Vymazanie („právo zabudnutia“), ak na spracovanie už nie je právny základ",
  "Obmedzenie spracovania",
  "Prenosnosť údajov",
  "Odvolanie súhlasu – stane sa účinným dňom odvolania",
  "Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)",
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--background)]">
      <SiteHeader />
      <section className="relative isolate min-h-[20vh]">
        <Image
          src="/images/max4/hero.webp"
          alt="Škoda Superb pred autoservisom"
          fill
          priority
          className="object-cover object-[76%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(93deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.6)_34%,rgba(0,0,0,0.42)_62%,rgba(0,0,0,0.46)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.64)_24%,rgba(74,60,240,0.1)_100%)]" />
        <div className="relative z-10 mx-auto flex min-h-[20vh] w-full max-w-[92rem] items-end px-6 pb-8 pt-28 sm:px-8 sm:pt-32 lg:px-12">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white/78">Právne informácie</p>
            <h1 className="mt-3 text-5xl uppercase leading-none text-white sm:text-6xl">
              Ochrana osobných údajov
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-[2.5rem] border border-[var(--line)] bg-white/80 p-8 shadow-[var(--shadow)] backdrop-blur sm:p-10">
          <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-black/5"
              >
                Späť na hlavnú stránku
              </Link>
              <CookieSettingsButton className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium transition hover:bg-black/5">
                Nastavenia cookies
              </CookieSettingsButton>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--brand)]">Právne informácie</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl uppercase leading-none sm:text-5xl">
                Ochrana osobných údajov
              </h2>
            </div>

            <div className="grid gap-3 text-base leading-7 text-[color:var(--muted)]">
              <p>MAX4 s. r. o.</p>
              <p>Nad jazierkom 23 831 07 Bratislava</p>
              <p>IČO: 44877641, DIČ: 2022865086</p>
              <p>E-mail: servismax4@gmail.com</p>
              <p>Tel.: +421 904 427 684</p>
            </div>

            <p className="max-w-4xl text-base leading-7 text-[color:var(--muted)]">
              Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú, aké osobné údaje spracúvame v
              súvislosti s používaním našej webovej stránky.
            </p>
          </div>

          <div className="mt-10 grid gap-10">
            <section className="grid gap-5">
              <h2 className="font-[family:var(--font-display)] text-3xl uppercase">I. Súbory cookies</h2>
              <p className="text-base leading-7 text-[color:var(--muted)]">
                Na našej webovej stránke používame cookies výlučne na nasledujúce účely:
              </p>
              <ul className="grid gap-3 text-base leading-7 text-[color:var(--muted)]">
                <li>
                  Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení
                  prehliadača).
                </li>
                <li>
                  Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku používajú
                  (nasadzujeme ich len so súhlasom používateľa).
                </li>
                <li>
                  Marketingové cookies – používame ich len na základe súhlasu používateľa, ak budú na stránke v
                  budúcnosti nasadené reklamné alebo remarketingové nástroje.
                </li>
              </ul>
              <p className="text-base leading-7 text-[color:var(--muted)]">
                <strong className="text-[var(--foreground)]">Správa súhlasov:</strong> Používateľ môže kedykoľvek
                odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v
                prehliadači.
              </p>
            </section>

            <section className="grid gap-5">
              <h2 className="font-[family:var(--font-display)] text-3xl uppercase">II. Práva dotknutej osoby</h2>
              <p className="text-base leading-7 text-[color:var(--muted)]">
                Podľa nariadenia GDPR máte nasledujúce práva:
              </p>
              <ul className="grid gap-2 text-base leading-7 text-[color:var(--muted)]">
                {rights.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p className="text-base leading-7 text-[color:var(--muted)]">
                V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na servismax4@gmail.com alebo
                telefónnom čísle +421 904 427 684.
              </p>
            </section>
          </div>

          <p className="mt-10 border-t border-[var(--line)] pt-8 text-base leading-7 text-[color:var(--muted)]">
            Tieto Zásady nadobúdajú účinnosť dňom 8. 6. 2025.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
