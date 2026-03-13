"use client";

import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "max4-cookie-consent";

type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const defaultDraft: CookieConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
};

function readConsent(): CookieConsentState | null {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(rawValue) as Partial<CookieConsentState>;

    return {
      necessary: true,
      analytics: Boolean(parsedValue.analytics),
      marketing: Boolean(parsedValue.marketing),
      updatedAt:
        typeof parsedValue.updatedAt === "string"
          ? parsedValue.updatedAt
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

function saveConsent(settings: Omit<CookieConsentState, "updatedAt">) {
  const nextValue: CookieConsentState = {
    ...settings,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextValue));
  return nextValue;
}

function Toggle({
  checked,
  disabled = false,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onChange}
      className={`relative inline-flex h-8 w-14 items-center rounded-full border transition ${
        checked
          ? "border-[var(--brand)] bg-[var(--brand)]"
          : "border-black/10 bg-black/10"
      } ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"}`}
    >
      <span
        className={`h-6 w-6 rounded-full bg-white shadow transition ${
          checked ? "translate-x-7" : "translate-x-1"
        }`}
      />
    </button>
  );
}

export function CookieConsent() {
  const [isReady, setIsReady] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [draft, setDraft] = useState(defaultDraft);

  useEffect(() => {
    const existingConsent = readConsent();

    if (existingConsent) {
      setDraft(existingConsent);
    } else {
      setIsBannerVisible(true);
    }

    setIsReady(true);

    const handleOpenSettings = () => {
      const currentConsent = readConsent();

      if (currentConsent) {
        setDraft(currentConsent);
      }

      setIsSettingsOpen(true);
      setIsBannerVisible(false);
    };

    window.addEventListener("max4:open-cookie-settings", handleOpenSettings);

    return () => {
      window.removeEventListener("max4:open-cookie-settings", handleOpenSettings);
    };
  }, []);

  const consentSummary = useMemo(() => {
    if (draft.analytics && draft.marketing) {
      return "Povolené sú analytické aj marketingové cookies.";
    }

    if (draft.analytics) {
      return "Povolené sú analytické cookies.";
    }

    if (draft.marketing) {
      return "Povolené sú marketingové cookies.";
    }

    return "Aktívne sú iba nevyhnutné cookies.";
  }, [draft.analytics, draft.marketing]);

  const handleSave = (nextSettings: Omit<CookieConsentState, "updatedAt">) => {
    const savedConsent = saveConsent(nextSettings);
    setDraft(savedConsent);
    setIsBannerVisible(false);
    setIsSettingsOpen(false);
  };

  if (!isReady) {
    return null;
  }

  return (
    <>
      {isBannerVisible ? (
        <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6">
          <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-black/10 bg-white/95 p-5 shadow-[0_24px_80px_rgba(17,17,17,0.18)] backdrop-blur sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--brand)]">
                  Cookies
                </p>
                <h2 className="mt-2 font-[family:var(--font-display)] text-3xl uppercase leading-none">
                  Vyberte si, ktoré cookies môžeme používať
                </h2>
                <p className="mt-4 text-sm leading-7 text-[color:var(--muted)] sm:text-base">
                  Používame nevyhnutné cookies pre fungovanie webu a voliteľné analytické a marketingové cookies iba
                  podľa vášho výberu. {consentSummary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black/5"
                >
                  Nastavenia
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleSave({
                      necessary: true,
                      analytics: false,
                      marketing: false,
                    })
                  }
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold transition hover:bg-black/5"
                >
                  Len nevyhnutné
                </button>
                <button
                  type="button"
                  onClick={() =>
                    handleSave({
                      necessary: true,
                      analytics: true,
                      marketing: true,
                    })
                  }
                  className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  Prijať všetko
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isSettingsOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/45 px-3 py-4 sm:px-4 sm:py-6">
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[1.5rem] border border-white/30 bg-white p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:rounded-[2rem] sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand)] sm:text-sm sm:tracking-[0.22em]">
                  Nastavenia cookies
                </p>
                <h2 className="mt-2 font-[family:var(--font-display)] text-2xl uppercase leading-none sm:text-3xl">
                  Spravujte súhlasy
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                aria-label="Zavrieť"
                className="text-3xl leading-none text-black"
              >
                x
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:gap-4">
              <div className="rounded-[1.25rem] border border-black/10 bg-[var(--background)] p-4 sm:rounded-[1.5rem] sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="pr-2 text-base font-semibold sm:text-lg">Nevyhnutné cookies</h3>
                  <Toggle checked disabled />
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  Zabezpečujú základnú funkčnosť stránky a nie je možné ich vypnúť.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-black/10 bg-[var(--background)] p-4 sm:rounded-[1.5rem] sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="pr-2 text-base font-semibold sm:text-lg">Analytické cookies</h3>
                  <Toggle
                    checked={draft.analytics}
                    onChange={() =>
                      setDraft((currentValue) => ({
                        ...currentValue,
                        analytics: !currentValue.analytics,
                      }))
                    }
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  Pomáhajú nám lepšie porozumieť návštevnosti a správaniu používateľov.
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-black/10 bg-[var(--background)] p-4 sm:rounded-[1.5rem] sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="pr-2 text-base font-semibold sm:text-lg">Marketingové cookies</h3>
                  <Toggle
                    checked={draft.marketing}
                    onChange={() =>
                      setDraft((currentValue) => ({
                        ...currentValue,
                        marketing: !currentValue.marketing,
                      }))
                    }
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  Umožňujú pracovať s reklamnými a remarketingovými nástrojmi, ak ich v budúcnosti nasadíte.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              <button
                type="button"
                onClick={() =>
                  handleSave({
                    necessary: true,
                    analytics: false,
                    marketing: false,
                  })
                }
                className="rounded-full border border-black/10 px-4 py-2.5 text-xs font-semibold transition hover:bg-black/5 sm:px-5 sm:py-3 sm:text-sm"
              >
                Len nevyhnutné
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSave({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="rounded-full border border-black/10 px-4 py-2.5 text-xs font-semibold transition hover:bg-black/5 sm:px-5 sm:py-3 sm:text-sm"
              >
                Povoliť všetko
              </button>
              <button
                type="button"
                onClick={() =>
                  handleSave({
                    necessary: true,
                    analytics: draft.analytics,
                    marketing: draft.marketing,
                  })
                }
                className="rounded-full bg-[var(--brand)] px-4 py-2.5 text-xs font-semibold text-white transition hover:brightness-110 sm:px-5 sm:py-3 sm:text-sm"
              >
                Uložiť nastavenia
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
