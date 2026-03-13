import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";

const services = [
  {
    title: "Pneuservis + geometria",
    image: "/images/max4/wheel-alignment.webp",
    alt: "Geometria kolies v autoservise Max4",
    description:
      "V našom autoservise ponúkame kompletné služby vrátane sezónneho prezutia a vyváženia kolies, opravy defektov, a kontroly hádzavosti diskov. Súčasťou našich služieb je aj presné nastavenie geometrie kolies, ktoré zabezpečuje bezpečnú a komfortnú jazdu, predchádza nadmernému opotrebeniu pneumatík a zlepšuje jazdné vlastnosti vozidla. Naši odborníci vykonávajú geometriu podľa hodnôt požadovaných výrobcom, čo zaručuje optimálny výkon a dlhú životnosť pneumatík.",
  },
  {
    title: "Mechanické práce",
    image: "/images/max4/mechanicalworks.avif",
    alt: "Mechanické práce v autoservise Max4",
    description:
      "V našom autoservise poskytujeme aj široké spektrum mechanických prác vrátane výmeny motorového oleja, filtrov, a spojok, ako aj kontroly a opravy náprav, tlmenia, a pruženia vozidla. Naši odborníci zabezpečujú opravy hnacieho ústrojenstva, mechanických častí motora, riadenia a karosérie. Zameriavame sa na dôkladnú kontrolu a výmenu opotrebovaných komponentov, čím garantujeme bezpečnú a spoľahlivú prevádzku vášho vozidla.",
  },
  {
    title: "Lakovanie",
    image: "/images/max4/lakovanie.jpg",
    alt: "Lakovanie vozidiel v autoservise Max4",
    description:
      "Ponúkame profesionálne lakovanie vozidiel, ktoré obnoví ich pôvodný lesk a chráni povrch pred koróziou a poškriabaním. Používame kvalitné laky a moderné technológie, aby sme dosiahli dokonalý a trvácny výsledok. Či už potrebujete opraviť menšie škrabance, alebo kompletné prelakovanie, naši odborníci vám zabezpečia prvotriednu starostlivosť a individuálny prístup.",
  },
  {
    title: "Servis klimatizácie",
    image: "/images/max4/klimatizacia.jpeg",
    alt: "Servis klimatizácie v autoservise Max4",
    description:
      "V rámci servisu klimatizácie vykonávame kompletnú údržbu, ktorá zahŕňa kontrolu tesnosti systému, čistenie a dopĺňanie chladiva, a výmenu peľového filtra. Používame špeciálne prístroje na dezinfekciu klimatizácie, čím eliminujeme baktérie, plesne a vírusy, ktoré sa môžu hromadiť vo výparníku. Pravidelným servisom klimatizácie dvakrát ročne zabezpečíme čistý a zdravý vzduch vo vašom vozidle, čím predídete možným alergiám a zdravotným problémom.",
  },
  {
    title: "Klampiarske práce",
    image: "/images/max4/klampiarske.webp",
    alt: "Klampiarske práce v autoservise Max4",
    description:
      "V rámci našich klampiarských prác poskytujeme opravy a výmenu poškodených dielov karosérie, vrátane plastových a zkorodovaných častí. Špecializujeme sa na komplexné opravy vozidiel po havárii, pričom používame originálne aj druhovýrobné diely. Naši odborníci zabezpečujú kvalitné riešenie poistných udalostí, aby vaše vozidlo bolo opäť v perfektnom stave.",
  },
] as const;

const contactItems = [
  {
    label: "Servis",
    value: "+421 904 427 684",
    href: "tel:+421904427684",
  },
  {
    label: "NONSTOP odťah",
    value: "+421 903 729 792",
    href: "tel:+421903729792",
  },
  {
    label: "Mail",
    value: "servismax4@gmail.com",
    href: "mailto:servismax4@gmail.com",
  },
] as const;

const reasons = [
  {
    kicker: "15+",
    title: "rokov skúseností",
    copy: "Servis všetkých značiek motorových vozidiel s dôrazom na kvalitu opráv, pružnosť a osobný prístup.",
  },
  {
    kicker: "NONSTOP",
    title: "Odťahová služba",
    copy: "Ak sa vaše vozidlo pokazí na ceste a neviete sa dostať domov, rýchlo a bezpečne odtiahneme vaše vozidlo na požadované miesto. Volajte na číslo +421 903 729 792.",
  },
  {
    kicker: "Presne",
    title: "Diagnostika vozidiel",
    copy: "Využívame moderné elektronické nástroje na identifikáciu a riešenie problémov s vaším vozidlom, vrátane analýzy pamäte závad riadiacich jednotiek.",
  },
] as const;

const navigation = [
  { label: "O nás", href: "#o-nas" },
  { label: "Služby", href: "#sluzby" },
  { label: "Prečo my", href: "#preco-my" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative isolate min-h-screen">
        <Image
          src="/images/max4/hero.webp"
          alt="Škoda Superb pred autoservisom"
          fill
          priority
          className="object-cover object-[76%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(8,8,14,0.84)_0%,rgba(8,8,14,0.65)_40%,rgba(8,8,14,0.35)_68%,rgba(8,8,14,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(67,50,226,0.45),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,107,44,0.28),transparent_24%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-10 pt-6 sm:px-8 lg:px-12">
          <header className="flex flex-col gap-6 rounded-[2rem] border border-white/15 bg-white/8 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <a href="#" className="font-[family:var(--font-display)] text-2xl uppercase tracking-[0.18em] text-white">
              Autoservis Max4
            </a>
            <nav className="flex flex-wrap gap-3 text-sm text-white/80">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-white/10 px-4 py-2 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="flex flex-1 items-center py-12 lg:py-16">
            <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,24rem)] lg:items-end">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-white/70">
                  Bratislava · Rožňavská 2
                </p>
                <h1 className="max-w-4xl font-[family:var(--font-display)] text-5xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-8xl">
                  Autoservis, na ktorý sa dá spoľahnúť
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
                  Autoservis MAX4 Vám poskytne servis všetkých značiek motorových vozidiel. Ponúkame alternatívu
                  voči veľkým autoservisom, najmä svojou pružnosťou, prístupom k zákazníkom, zaujímavými cenami a to
                  všetko pri dodržiavaní štandardov a kvality opráv.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#kontakt"
                    className="rounded-full bg-[var(--brand)] px-6 py-3 font-[family:var(--font-display)] text-sm uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(67,50,226,0.35)] transition hover:-translate-y-0.5"
                  >
                    Kontakt
                  </a>
                  <a
                    href="tel:+421904427684"
                    className="rounded-full border border-white/25 px-6 py-3 font-[family:var(--font-display)] text-sm uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
                  >
                    +421 904 427 684
                  </a>
                </div>
              </div>

              <aside className="grid gap-4 rounded-[2rem] border border-white/15 bg-black/30 p-5 backdrop-blur md:grid-cols-3 lg:grid-cols-1">
                {reasons.map((reason) => (
                  <div key={reason.title} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5">
                    <p className="font-[family:var(--font-display)] text-3xl uppercase text-white">{reason.kicker}</p>
                    <h2 className="mt-3 text-lg font-semibold text-white">{reason.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-white/72">{reason.copy}</p>
                  </div>
                ))}
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section id="o-nas" className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
        <div className="relative min-h-[22rem] overflow-hidden rounded-[2.5rem] bg-[var(--panel-strong)] shadow-[var(--shadow)]">
          <Image
            src="/images/max4/mechanicalworks.avif"
            alt="Autoservis Max4 pri práci"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(23,23,23,0.8)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-white/65">Max4 Bratislava</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
              S dlhoročnými skúsenosťami a tímom odborníkov zabezpečujeme starostlivosť o vaše vozidlo od bežného
              servisu až po náročnejšie opravy.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-medium uppercase tracking-[0.32em] text-[var(--brand)]">O nás</p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-4xl uppercase leading-none text-[var(--foreground)] sm:text-5xl">
            Partner pre servis, údržbu aj rýchlu pomoc na ceste
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--muted)] sm:text-lg">
            Sme spoľahlivým partnerom pre všetky vaše potreby údržby a servisu vozidla. S dlhoročnými skúsenosťami a
            tímom odborníkov sme schopní zabezpečiť, že vaše auto bude vždy v najlepšom možnom stave, či už prídete za
            nami osobne alebo potrebujete aby sme prišli my za Vami.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[var(--shadow)]">
              <p className="font-[family:var(--font-display)] text-3xl uppercase text-[var(--brand)]">Všetky značky</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                Servis osobných vozidiel naprieč značkami a typmi opráv.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[var(--shadow)]">
              <p className="font-[family:var(--font-display)] text-3xl uppercase text-[var(--accent)]">Osobný prístup</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--muted)]">
                Pružnosť, férové ceny a riešenia prispôsobené konkrétnemu vozidlu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="border-y border-[var(--line)] bg-white/70 py-20 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.32em] text-[var(--brand)]">Naše služby</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-4xl uppercase leading-none sm:text-5xl">
                Kompletný servis na jednom mieste
              </h2>
            </div>
            <a
              href="#kontakt"
              className="w-fit rounded-full border border-[var(--brand)] px-6 py-3 font-[family:var(--font-display)] text-sm uppercase tracking-[0.16em] text-[var(--foreground)] transition hover:bg-[var(--brand)] hover:text-white"
            >
              Kontakt
            </a>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] shadow-[var(--shadow)] ${
                  index === 0 ? "xl:col-span-2" : ""
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-[family:var(--font-display)] text-3xl uppercase leading-none">{service.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[color:var(--muted)] sm:text-base">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preco-my" className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[2.5rem] bg-[var(--panel-strong)] p-8 text-white shadow-[var(--shadow)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-white/60">Prečo práve my?</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-4xl uppercase leading-none sm:text-5xl">
              Kvalita opráv bez zbytočných kompromisov
            </h2>
            <p className="mt-6 text-base leading-8 text-white/78">
              Autoservis MAX4 Vám poskytne servis všetkých značiek motorových vozidiel. Ponúkame alternatívu voči
              veľkým autoservisom, najmä svojou pružnosťou, prístupom k zákazníkom, zaujímavými cenami a to všetko pri
              dodržiavaní štandardov a kvality opráv.
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-[family:var(--font-display)] text-sm uppercase tracking-[0.16em] text-[var(--foreground)] transition hover:-translate-y-0.5"
            >
              Dohodnúť servis
            </a>
          </div>

          <div className="grid gap-6">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[2rem] border border-[var(--line)] bg-[var(--panel)] p-7 shadow-[var(--shadow)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-[family:var(--font-display)] text-4xl uppercase text-[var(--brand)]">{reason.kicker}</p>
                    <h3 className="mt-3 text-xl font-semibold">{reason.title}</h3>
                  </div>
                  <span className="rounded-full bg-[var(--brand-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)]">
                    Max4
                  </span>
                </div>
                <p className="mt-5 text-sm leading-7 text-[color:var(--muted)] sm:text-base">{reason.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="pb-16">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
          <div className="rounded-[2.5rem] bg-[linear-gradient(135deg,#4332e2_0%,#1f1f32_100%)] p-8 text-white shadow-[0_30px_80px_rgba(67,50,226,0.35)] sm:p-10">
            <p className="text-sm uppercase tracking-[0.32em] text-white/65">Kontakt</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-4xl uppercase leading-none sm:text-5xl">
              Sme pripravení pomôcť
            </h2>
            <div className="mt-8 grid gap-5">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-[1.5rem] border border-white/14 bg-white/8 p-5 transition hover:bg-white/14"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/65">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-[var(--line)] bg-[var(--panel)] p-8 shadow-[var(--shadow)] sm:p-10">
            <ContactForm />

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--brand)]">Adresa</p>
                <p className="mt-3 text-base leading-8 text-[color:var(--muted)]">
                  Rožňavská 2 Bratislava 826 48
                  <br />
                  (vchod oproti - Trnavská 100, areál NAD 820)
                </p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--brand)]">Otváracie hodiny</p>
                <p className="mt-3 text-base leading-8 text-[color:var(--muted)]">
                  Po-Pia: 09:00 - 17:00
                  <br />
                  So-Ne: Zatvorené
                </p>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-[var(--line)]">
              <iframe
                title="Mapa autoservisu Max4"
                src="https://www.google.com/maps?q=Ro%C5%BE%C5%88avsk%C3%A1%202%20Bratislava&z=15&output=embed"
                className="h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-6 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl rounded-[2rem] border border-[var(--line)] bg-white/75 px-6 py-5 text-sm leading-7 text-[color:var(--muted)] shadow-[var(--shadow)] backdrop-blur">
          <p>
            Kontaktný formulár spracúva meno a priezvisko, e-mailovú adresu a telefónne číslo na účel odpovede na váš
            dopyt. Viac nájdete v{" "}
            <Link
              href="/ochrana-osobnych-udajov"
              className="underline decoration-[var(--brand)] underline-offset-4"
            >
              ochrane osobných údajov
            </Link>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
