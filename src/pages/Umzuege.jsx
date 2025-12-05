import { Truck, Boxes, ShieldCheck } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

const detailCards = [
  {
    title: 'Verpackung & Schutzsysteme',
    body: 'Spezialfolien, Flight Cases und Boxen mit QR-Label sichern Möbel und Technik gegen jeden Stoß.',
    icon: Boxes,
  },
  {
    title: 'Routen- & Liftmanagement',
    body: 'Halteverbotszonen, Möbellifte und Zeitfenster werden zentral geplant und mit Nachbarn abgestimmt.',
    icon: Truck,
  },
  {
    title: 'Übergabe & Protokolle',
    body: 'Schlüsselübergabe, Abnahme und unterschriebene Protokolle laufen über unsere Einsatzleitung.',
    icon: ShieldCheck,
  },
]

function UmzuegePage() {
  return (
    <>
      <Seo
        title="Umzüge Bern – Möbel & Übergabe"
        description="Deti Facility Management GmbH organisiert Umzüge, Möbellogistik und Übergaben für Bern mit garantierter Schlüsselübergabe."
        keywords={['Umzug Bern', 'Möbeltransport Bern', 'Umzugsfirma Bern', 'Wohnungsübergabe']}
        canonicalPath="/umzuege"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'MovingCompany',
          name: 'Deti Facility Management GmbH',
          areaServed: 'Bern und Umgebung',
          url: 'https://www.deti-reinigung.ch/umzuege',
          telephone: '+41 79 151 12 16',
        }}
      />
      <section className="bg-backgroundSurface">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-32 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="flex-1 space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Umzüge</p>
            <h1 className="text-4xl font-semibold leading-tight text-primaryDark">
              Möbellogistik mit{' '}
              <span className="bg-gradient-to-r from-[#0EBCCE] to-[#1D1DBF] bg-clip-text text-transparent">
                Übergabe-Power
              </span>{' '}
              für Berns Wohn- und Geschäftsräume.
            </h1>
            <p className="text-lg text-textSecondary">
              Der Schmerz: Treppenhäuser voller Kartons, hektische Schlüsselübergaben, verpasste Termine – und Möbel, die länger unterwegs sind als geplant.
            </p>
            <p className="text-textSecondary">
              Wir verstärken den Druck nicht, wir lösen ihn: präzise Planung, eingerichtete Halteverbotszonen, Möbellifte, Klimaracks und das Reinigungsteam, das unmittelbar nachzieht.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative rounded-card shadow-soft">
              <img
                src="/slike/umzuege.jpg"
                alt="Umzugsservice Bern"
                className="h-[360px] w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 right-6 w-56 rounded-3xl bg-primary text-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Flotte 2025</p>
                <p className="text-3xl font-semibold">4h</p>
                <p className="text-xs">durchschnittliche Verzugszeit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {detailCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] border border-mutedLavender/60 bg-white/30 p-6 backdrop-blur"
            >
              <card.icon className="h-8 w-8 text-primary" strokeWidth={1} />
              <h3 className="mt-3 text-xl font-semibold text-primaryDark">{card.title}</h3>
              <p className="mt-2 text-sm text-textSecondary">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="relative order-1 lg:order-1">
            <img
              src="/slike/furniture.jpg"
              alt="Umzugsteam bei der Arbeit"
              className="h-[360px] w-full rounded-[32px] object-cover shadow-soft"
              loading="lazy"
            />
          </div>
          <div className="order-2 lg:order-2">
            <h2 className="text-3xl font-semibold text-primaryDark">Wir nehmen den Zug-Stress raus</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3 lg:grid-cols-1">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-textSecondary">Wenn es brennt</h4>
                <p className="mt-2 text-sm text-textSecondary">
                  Lift fehlt, Bewilligungen sind nicht da, Möbel stauen sich auf dem Trottoir und Nachbarn drohen mit Polizei.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-textSecondary">Druck steigt</h4>
                <p className="mt-2 text-sm text-textSecondary">
                  Übergabeuhr tickt, Käufer warten, Verwaltung fordert Protokolle – jede Verzögerung kostet Depot und Reputation.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-textSecondary">Wir lösen es</h4>
                <p className="mt-2 text-sm text-textSecondary">
                  Deti koordiniert Transporte, Reinigung und Schlüsselübergabe in einem Stream. Nacharbeiten erfolgen innerhalb
                  von 24h ohne Mehrkosten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-card bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-primaryDark">Ablauf</h3>
            <ol className="mt-4 space-y-4 text-sm text-textSecondary">
              <li>
                <strong>1. Inventar-Scan:</strong> Wir labeln jedes Möbelstück mit QR-Code und Foto.
              </li>
              <li>
                <strong>2. Route & Bewilligungen:</strong> Halteverbote, Lift-Slots und Schlüsselübergaben werden bestätigt.
              </li>
              <li>
                <strong>3. Durchführung:</strong> Crew-Lead trackt jeden Raum, Kunden erhalten Live-Updates.
              </li>
              <li>
                <strong>4. Übergabe:</strong> Wir unterschreiben Protokolle und übergeben die Keys persönlich.
              </li>
            </ol>
          </div>
          <div className="rounded-card bg-primary text-white p-8 shadow-soft">
            <h3 className="text-2xl font-semibold">Transparente Kennzahlen</h3>
            <p className="mt-2 text-sm text-white/80">
              Sie erhalten ein Dashboard mit Zeitplan, Crew-Status und Schadensprotokollen.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Transportschäden</p>
                <p className="text-3xl font-semibold">0.4%</p>
                <p className="text-xs text-white/70">Letzte 12 Monate</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Nacharbeiten</p>
                <p className="text-3xl font-semibold">16</p>
                <p className="text-xs text-white/70">pro Jahr</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-0 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Umzug planen"
          title="Selbst heikle Übergaben werden entspannt."
          subtitle="Wir synchronisieren Möbellogistik, Reinigung und Abgabe – so entsteht Vertrauen bei Verwaltungen und Käufern."
        />
      </div>
    </>
  )
}

export default UmzuegePage

