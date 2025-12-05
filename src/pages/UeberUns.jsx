import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

import { ShieldCheck, Users, Sparkles } from 'lucide-react'

const values = [
  {
    title: 'Pünktlichkeit',
    copy: 'Fixe Zeitfenster werden eingehalten – Übergaben erfolgen vorbereitet und auf die Minute.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparenz',
    copy: 'Klare Absprachen, dokumentierte Schritte und eine erreichbare Ansprechperson während des gesamten Umzugs.',
    icon: Users,
  },
  {
    title: 'Schweizer Qualitätsstandards',
    copy: 'Sorgfältige Materialien, saubere Protokolle und Abnahmegarantie gemäss regionalen Vorgaben.',
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
          <h1 className="mt-4 text-4xl font-semibold text-primaryDark">Über uns – Ihr Partner für einen sorgenfreien Wohnungswechsel</h1>
          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Hinter Deti steht ein engagiertes Team, das versteht, wie anspruchsvoll ein Umzug sein kann. Wir sind nicht nur
            eine Reinigungsfirma – wir sind Ihre Lösung für den kompletten Standortwechsel in Bern und der Zentralschweiz.
          </p>
          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Das bedeutet für Sie: Ein Ansprechpartner für den gesamten Prozess und die Sicherheit einer 100%igen Abnahmegarantie.
            Wir arbeiten speditiv, zuverlässig und verwenden umweltschonende Materialien, um Ihr altes Zuhause makellos an die
            Verwaltung zu übergeben.
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

      <div className="px-0 sm:px-6 lg:px-8">
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

