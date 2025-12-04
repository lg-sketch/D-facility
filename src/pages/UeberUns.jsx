import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

import { ShieldCheck, Users, Sparkles } from 'lucide-react'

const values = [
  {
    title: 'Verlässlichkeit',
    copy: 'Wir übergeben Objekte nur, wenn Verwaltung oder Käufer schriftlich zufrieden sind.',
    icon: ShieldCheck,
  },
  {
    title: 'Empathie',
    copy: 'Teams sprechen Hochdeutsch, Französisch und Englisch – ideal für internationale Kunden.',
    icon: Users,
  },
  {
    title: 'Innovation',
    copy: 'Digitale Checklisten, Sensorik in Fahrzeugen und Reporting in Echtzeit.',
    icon: Sparkles,
  },
]

function UeberUnsPage() {
  return (
    <>
      <Seo
        title="Über Deti Facility"
        description="Deti Facility Management GmbH steht für ganzheitliche Reinigung und Umzugslogistik in Bern mit dokumentierter Qualität."
        canonicalPath="/ueber-uns"
      />
      <section className="bg-backgroundSurface">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Über uns</p>
          <h1 className="mt-4 text-4xl font-semibold text-primaryDark">Wir verbinden Facility Know-how mit der Wärme eines Familienbetriebs.</h1>
          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Deti Facility Management GmbH wurde in Bern gegründet, um Immobilieneigentümer:innen einen Partner zu geben, der Reinigung, Umzug und Garantieprozesse zusammenbringt. Unser Führungsteam kommt aus Hotellerie, Logistik und Immobilienverwaltung – dadurch kennen wir jede Checkliste.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="space-y-3 text-left">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <value.icon className="h-6 w-6" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-semibold text-primaryDark">{value.title}</h3>
              <p className="text-sm text-textSecondary">{value.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-card bg-white p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-primaryDark">Zertifizierungen & Partner</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {['SVUT Mitglied', 'ISO 9001 angelehnt', 'Regionalverband Bern', 'CO₂-reduzierte Flotte'].map((badge) => (
              <span key={badge} className="rounded-full border border-mutedLavender px-4 py-2 text-center text-sm text-textSecondary">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Lernen wir uns kennen"
          title="Wir behandeln jede Immobilie wie unsere eigene."
          subtitle="Persönliche Beratung, klare Verantwortlichkeiten und transparente Kommunikation."
        />
      </div>
    </>
  )
}

export default UeberUnsPage

