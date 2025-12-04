import { Droplets, PanelsTopLeft, Building } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

const detailCards = [
  {
    title: 'Feinreinigung & Sanitär',
    body: 'Kalk, Silikonfugen und Edelstahlflächen werden mit pH-neutralen Mitteln behandelt – inklusive Dampf und Politur.',
    icon: Droplets,
  },
  {
    title: 'Fenster & Fassaden',
    body: 'Rahmen, Schlösser und Lamellen werden im Trocken-Wet-Wechsel gereinigt, damit keine Tropfen bleiben.',
    icon: PanelsTopLeft,
  },
  {
    title: 'Büro- & Retailflächen',
    body: 'Nachtteams mit geräuscharmen Maschinen halten Ihren Umsatzraum offen und glänzend.',
    icon: Building,
  },
]

function ReinigungPage() {
  return (
    <>
      <Seo
        title="Reinigung Bern – Garantierte Übergabe"
        description="Deti Facility Management GmbH liefert Umzugs-, Büro- und Spezialreinigungen mit Zufriedenheitsgarantie in Bern und Umgebung."
        keywords={['Reinigung Bern', 'Umzugsreinigung', 'Büroreinigung Bern', 'Übergabegarantie Bern']}
        canonicalPath="/reinigung"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Reinigungsservice Bern',
          provider: {
            '@type': 'Organization',
            name: 'Deti Facility Management GmbH',
          },
          areaServed: 'Bern und Umgebung',
          serviceType: 'Wohnungs- und Büroreinigung mit Garantie',
        }}
      />
      <section className="bg-backgroundSurface">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-32 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="flex-1 space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-primary">Reinigung</p>
            <h1 className="text-4xl font-semibold leading-tight text-primaryDark">
              Glänzende Wohnungen mit{' '}
              <span className="bg-gradient-to-r from-[#0EBCCE] to-[#1D1DBF] bg-clip-text text-transparent">
                Übergabegarantie
              </span>{' '}
              für Bern.
            </h1>
            <p className="text-lg text-textSecondary">
              Wenn Ablagerungen, Termin- und Abgabedruck drohen, kippt die Stimmung zwischen Vermietern und Mietern. Jede Beanstandung bedeutet verlorene Zeit und doppelte Kosten.
            </p>
            <p className="text-textSecondary">
              Deshalb setzen wir auf tabellarische Qualitätskontrollen, dokumentierte Nachweise und Teams, die erst abtreten, wenn Verwaltung oder Käufer schriftlich zufrieden sind.
            </p>
          </div>
          <div className="flex-1">
            <div className="relative rounded-card shadow-soft">
              <img
                src={`${import.meta.env.BASE_URL}slike/reinigung-hero.jpg`}
                alt="Reinigungsteam Deti Facility"
                className="h-[360px] w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-6 right-6 w-56 rounded-3xl bg-primary text-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">Audit 2025</p>
                <p className="text-3xl font-semibold">98%</p>
                <p className="text-xs">Abnahmen beim ersten Versuch</p>
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
              className="rounded-[28px] border border-mutedLavender/60 bg-white/30 p-6 text-textPrimary backdrop-blur"
            >
              <card.icon className="h-8 w-8 text-primary" strokeWidth={1} />
              <h3 className="mt-3 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-textSecondary">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="order-2 lg:order-2">
            <h2 className="text-3xl font-semibold text-primaryDark">Wir übernehmen die Spannung</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3 lg:grid-cols-1">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-textSecondary">
                  Wenn es weh tut
                </h4>
                <p className="mt-2 text-sm text-textSecondary">
                  Wohnungsabnahmen verschieben sich, wenn Backofen, Fenster und Silikonfugen nicht perfekt sind. Verwaltungen blocken die Kaution.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-textSecondary">Druck steigt</h4>
                <p className="mt-2 text-sm text-textSecondary">
                  Jeder Folgetermin hängt dran: Umzug, Wohnungsübergabe, Inserate. Das Team arbeitet hektisch, Möbel stehen im Treppenhaus, Fehler passieren.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-textSecondary">Wir lösen es</h4>
                <p className="mt-2 text-sm text-textSecondary">
                  Deti Facility stellt ein spezialisiertes Übergabe-Team, dokumentiert alles digital und fixiert die Verantwortung schriftlich – inklusive Nachreinigung binnen 24h.
                </p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-1">
            <img
              src={`${import.meta.env.BASE_URL}slike/buero.jpg`}
              alt="Wohnungsabgabe mit Checkliste"
              className="h-full w-full rounded-[32px] object-cover shadow-soft"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-card bg-white p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-primaryDark">Ablauf</h3>
            <ol className="mt-4 space-y-4 text-sm text-textSecondary">
              <li>
                <strong>1. Objektanalyse:</strong> Video-Walkthrough oder Vor-Ort-Begehung inkl. Checkliste.
              </li>
              <li>
                <strong>2. Einsatzplan:</strong> Materialliste, Maschinen und Haustechnik-Kooperation werden fixiert.
              </li>
              <li>
                <strong>3. Durchführung:</strong> Teamleiter protokolliert jede Zone, Kunden erhalten Push-Updates.
              </li>
              <li>
                <strong>4. Übergabe:</strong> Wir übergeben persönlich oder vertreten Sie bei der Verwaltung.
              </li>
            </ol>
          </div>
          <div className="rounded-card bg-primary text-white p-8 shadow-soft">
            <h3 className="text-2xl font-semibold">Widgets für Sichtbarkeit</h3>
            <p className="mt-2 text-sm text-white/80">
              Sie erhalten eine geteilte Map mit Kennzahlen: Zeit, Räume, Fotos, Garantiebis.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Checkpoints</p>
                <p className="text-3xl font-semibold">42</p>
                <p className="text-xs text-white/70">pro Objekt</p>
              </div>
              <div className="rounded-3xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Rückfragen</p>
                <p className="text-3xl font-semibold">0.8%</p>
                <p className="text-xs text-white/70">seit 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Reinigung buchen"
          title="Ihre Wohnungsabgabe? Schon geregelt."
          subtitle="Wir kombinieren Präzision, Dokumentation und Empathie – damit Berns Verwaltungen sofort unterschreiben."
        />
      </div>
    </>
  )
}

export default ReinigungPage

