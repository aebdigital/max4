import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookie-settings-button";
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
    <main className="min-h-screen">
      <section className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
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
              <h1 className="mt-4 font-[family:var(--font-display)] text-4xl uppercase leading-none sm:text-5xl">
                Ochrana osobných údajov
              </h1>
            </div>

            <div className="grid gap-3 text-base leading-8 text-[color:var(--muted)]">
              <p>MAX4 s. r. o.</p>
              <p>Nad jazierkom 23 831 07 Bratislava</p>
              <p>IČO: 44877641, DIČ: 2022865086</p>
              <p>E-mail: servismax4@gmail.com</p>
              <p>Tel.: +421 904 427 684</p>
            </div>

            <p className="max-w-3xl text-base leading-8 text-[color:var(--muted)]">
              Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú, aké osobné údaje spracúvame v
              súvislosti s používaním našej webovej stránky a kontaktných formulárov.
            </p>
          </div>

          <div className="mt-10 grid gap-10">
            <section className="grid gap-5">
              <h2 className="font-[family:var(--font-display)] text-3xl uppercase">I. Kontaktný formulár</h2>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                Na stránke www.max4.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám:
              </p>
              <ul className="grid gap-2 text-base leading-8 text-[color:var(--muted)]">
                <li>Položiť otázku k našim produktom a službám</li>
                <li>Požiadať o cenovú ponuku</li>
              </ul>
              <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--background)] p-6">
                <p className="font-semibold">Rozsah spracúvaných údajov:</p>
                <ul className="mt-3 grid gap-2 text-base leading-8 text-[color:var(--muted)]">
                  <li>Meno a priezvisko</li>
                  <li>E-mailová adresa</li>
                  <li>Telefónne číslo</li>
                </ul>
              </div>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                <strong className="text-[var(--foreground)]">Účel spracovania:</strong> Spracúvame uvedené údaje, aby
                sme vás mohli kontaktovať a reagovať na váš dopyt.
              </p>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                <strong className="text-[var(--foreground)]">Právny základ:</strong> Článok 6 ods. 1 písm. b) GDPR –
                plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.
              </p>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                <strong className="text-[var(--foreground)]">Doba uchovávania:</strong> Osobné údaje budeme uchovávať
                maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.
              </p>
            </section>

            <section className="grid gap-5">
              <h2 className="font-[family:var(--font-display)] text-3xl uppercase">II. Súbory cookies</h2>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                Na našej webovej stránke používame cookies výlučne na nasledujúce účely:
              </p>
              <ul className="grid gap-3 text-base leading-8 text-[color:var(--muted)]">
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
              <p className="text-base leading-8 text-[color:var(--muted)]">
                <strong className="text-[var(--foreground)]">Správa súhlasov:</strong> Používateľ môže kedykoľvek
                odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v
                prehliadači.
              </p>
            </section>

            <section className="grid gap-5">
              <h2 className="font-[family:var(--font-display)] text-3xl uppercase">III. Práva dotknutej osoby</h2>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                Podľa nariadenia GDPR máte nasledujúce práva:
              </p>
              <ul className="grid gap-2 text-base leading-8 text-[color:var(--muted)]">
                {rights.map((right) => (
                  <li key={right}>{right}</li>
                ))}
              </ul>
              <p className="text-base leading-8 text-[color:var(--muted)]">
                V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na servismax4@gmail.com alebo
                telefónnom čísle +421 904 427 684.
              </p>
            </section>
          </div>

          <p className="mt-10 border-t border-[var(--line)] pt-8 text-base leading-8 text-[color:var(--muted)]">
            Tieto Zásady nadobúdajú účinnosť dňom 8. 6. 2025.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
