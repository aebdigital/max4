import Image from "next/image";
import { HeroParallax } from "@/components/hero-parallax";
import { SiteHeader } from "@/components/site-header";
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
    note: "Volajte pre servis a objednanie termínu",
  },
  {
    label: "NONSTOP ODŤAHOVKA",
    value: "+421 903 729 792",
    href: "tel:+421903729792",
    note: "Rýchla pomoc na ceste 24/7",
  },
] as const;

const reasons = [
  {
    title: "15 rokov skúseností",
    copy: "Servis všetkých značiek motorových vozidiel s dôrazom na kvalitu opráv, pružnosť a osobný prístup.",
  },
  {
    title: "NONSTOP odťahová služba",
    copy: "Ak sa vaše vozidlo pokazí na ceste a neviete sa dostať domov, rýchlo a bezpečne odtiahneme vaše vozidlo na požadované miesto. Volajte na číslo +421 903 729 792.",
  },
  {
    title: "Diagnostika vozidiel",
    copy: "Využívame moderné elektronické nástroje na identifikáciu a riešenie problémov s vaším vozidlom, vrátane analýzy pamäte závad riadiacich jednotiek.",
  },
] as const;

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[var(--background)]">
      <SiteHeader home />
      <section className="relative isolate min-h-screen overflow-hidden">
        <HeroParallax src="/images/max4/hero.webp" alt="Škoda Superb pred autoservisom" />
        <div className="absolute inset-0 bg-[linear-gradient(93deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.55)_34%,rgba(0,0,0,0.3)_62%,rgba(0,0,0,0.44)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.58)_16%,rgba(74,60,240,0.08)_38%,rgba(0,0,0,0.12)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[92rem] flex-col px-6 pb-16 pt-28 sm:px-8 sm:pt-32 lg:px-12">

          <div className="flex flex-1 items-center py-14 lg:py-20">
            <div className="w-full max-w-5xl">
              <div className="max-w-4xl">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
                  Bratislava · Rožňavská 2
                </p>
                <h1 className="max-w-4xl font-[family:var(--font-display)] text-4xl uppercase leading-[0.92] text-white sm:text-7xl lg:text-[7.5rem]">
                  Autoservis, na ktorý sa dá spoľahnúť
                </h1>
                <p className="mt-6 max-w-4xl text-base leading-7 text-white/92 sm:mt-8 sm:text-[1.15rem] sm:leading-8">
                  Autoservis MAX4 Vám poskytne servis všetkých značiek motorových vozidiel. Ponúkame alternatívu
                  voči veľkým autoservisom, najmä svojou pružnosťou, prístupom k zákazníkom, zaujímavými cenami a to
                  všetko pri dodržiavaní štandardov a kvality opráv.
                </p>
                <div className="mt-8 flex flex-nowrap gap-3 sm:mt-10 sm:flex-wrap sm:gap-4">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center justify-center rounded-full bg-[var(--brand)] px-5 py-3 font-[family:var(--font-display)] text-lg uppercase leading-none !text-white shadow-[0_18px_40px_rgba(74,60,240,0.45)] transition hover:-translate-y-0.5 hover:brightness-110 sm:px-7 sm:py-4 sm:text-2xl"
                  >
                    Kontakt
                  </a>
                  <a
                    href="#sluzby"
                    className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-[family:var(--font-display)] text-lg uppercase leading-none text-black transition hover:bg-white/88 sm:px-7 sm:py-4 sm:text-2xl"
                  >
                    Naše služby
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="o-nas" className="mx-auto grid w-full max-w-[92rem] gap-12 px-6 py-24 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
        <div className="relative min-h-[22rem] overflow-hidden bg-[#dcdcdc] shadow-[var(--shadow)]">
          <Image
            src="/images/max4/mechanicalworks.avif"
            alt="Autoservis Max4 pri práci"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.22)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-sm uppercase tracking-[0.28em] text-white/70">Max4 Bratislava</p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/80">
              S dlhoročnými skúsenosťami a tímom odborníkov zabezpečujeme starostlivosť o vaše vozidlo od bežného
              servisu až po náročnejšie opravy.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--brand)]">O nás</p>
          <h2 className="mt-4 font-[family:var(--font-display)] text-5xl uppercase leading-[0.9] text-[var(--foreground)] sm:text-6xl">
            Partner pre servis, údržbu aj rýchlu pomoc na ceste
          </h2>
          <p className="mt-8 text-xl leading-8 text-[color:var(--muted)]">
            Sme spoľahlivým partnerom pre všetky vaše potreby údržby a servisu vozidla. S dlhoročnými skúsenosťami a
            tímom odborníkov sme schopní zabezpečiť, že vaše auto bude vždy v najlepšom možnom stave, či už prídete za
            nami osobne alebo potrebujete aby sme prišli my za Vami.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
              <h3 className="font-[family:var(--font-display)] text-4xl uppercase text-[var(--foreground)]">Všetky značky</h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                Servis osobných vozidiel naprieč značkami a typmi opráv.
              </p>
            </div>
            <div className="bg-[var(--panel)] p-7 shadow-[var(--shadow)]">
              <h3 className="font-[family:var(--font-display)] text-4xl uppercase text-[var(--brand)]">Osobný prístup</h3>
              <p className="mt-3 text-base leading-7 text-[color:var(--muted)]">
                Pružnosť, férové ceny a riešenia prispôsobené konkrétnemu vozidlu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="py-24">
        <div className="mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[var(--brand)]">Naše služby</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-5xl uppercase leading-none text-[var(--brand)] sm:text-6xl">
                Kompletný servis na jednom mieste
              </h2>
            </div>
            <a
              href="#kontakt"
              className="w-fit rounded-full border border-[var(--brand)] px-7 py-4 font-[family:var(--font-display)] text-2xl uppercase leading-none text-[var(--foreground)] transition hover:bg-[var(--brand)] hover:text-white"
            >
              Kontakt
            </a>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`${index === 0 ? "xl:col-span-1" : ""}`}
              >
                <div className="relative h-64 overflow-hidden shadow-[var(--shadow)]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pt-5">
                  <h3 className="font-[family:var(--font-display)] text-4xl uppercase leading-none text-[var(--foreground)]">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-[color:var(--muted)]">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preco-my" className="bg-[var(--brand)] py-24 text-white">
        <div className="mx-auto grid w-full max-w-[92rem] gap-8 px-6 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:px-12">
          <div className="p-0 sm:p-2">
            <p className="text-sm uppercase tracking-[0.32em] text-white/70">Prečo práve my?</p>
            <h2 className="mt-4 font-[family:var(--font-display)] text-5xl uppercase leading-none sm:text-6xl">
              Kvalita opráv bez zbytočných kompromisov
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-8 text-white/88">
              Autoservis MAX4 Vám poskytne servis všetkých značiek motorových vozidiel. Ponúkame alternatívu voči
              veľkým autoservisom, najmä svojou pružnosťou, prístupom k zákazníkom, zaujímavými cenami a to všetko pri
              dodržiavaní štandardov a kvality opráv.
            </p>
          </div>

          <div className="bg-black p-8 shadow-[0_24px_60px_rgba(0,0,0,0.26)] sm:p-10">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="border-l-4 border-[var(--brand)] py-3 pl-6 first:pt-0 last:pb-0"
              >
                <h3 className="font-[family:var(--font-display)] text-[2.65rem] uppercase text-white sm:text-5xl">
                  {reason.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-white/86">{reason.copy}</p>
              </article>
            ))}
            <a
              href="#kontakt"
              className="mt-8 inline-flex rounded-full border border-[var(--brand)] px-7 py-4 font-[family:var(--font-display)] text-2xl uppercase leading-none text-white transition hover:bg-[var(--brand)]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </section>

      <section id="kontakt" className="py-24">
        <div className="mx-auto w-full max-w-[92rem] px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-[var(--brand)]">Kontakt</p>
              <h2 className="mt-4 font-[family:var(--font-display)] text-5xl uppercase leading-none sm:text-6xl">
                Zavolajte nám
              </h2>

              <div className="mt-10 grid gap-6">
                <div>
                  <h3 className="font-[family:var(--font-display)] text-3xl uppercase text-[var(--brand)]">Mail</h3>
                  <p className="mt-3 text-2xl text-[var(--muted)]">servismax4@gmail.com</p>
                </div>
                <div>
                  <h3 className="font-[family:var(--font-display)] text-3xl uppercase text-[var(--brand)]">Adresa</h3>
                  <p className="mt-3 text-xl leading-8 text-[var(--muted)]">
                    Rožňavská 2 Bratislava 826 48
                    <br />
                    (vchod oproti - Trnavská 100, areál NAD 820)
                  </p>
                </div>
                <div>
                  <h3 className="font-[family:var(--font-display)] text-3xl uppercase text-[var(--brand)]">Otváracie hodiny</h3>
                  <p className="mt-3 text-xl leading-8 text-[var(--muted)]">
                    Po-Pia: 09:00 - 17:00
                    <br />
                    So-Ne: Zatvorené
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 self-start">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="bg-black p-8 text-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition hover:-translate-y-1"
                >
                  <h3 className="font-[family:var(--font-display)] text-2xl uppercase leading-none text-white/72 sm:text-3xl">
                    {item.label}
                  </h3>
                  <p className="mt-4 font-[family:var(--font-display)] text-[1.8rem] uppercase leading-[0.95] text-white sm:text-6xl">
                    {item.value}
                  </p>
                  <p className="mt-4 text-lg leading-7 text-white/78">{item.note}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 overflow-hidden border border-[var(--line)] shadow-[var(--shadow)]">
            <iframe
              title="Mapa autoservisu Max4"
              src="https://www.google.com/maps?cid=5982388827617436226&output=embed"
              className="h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
