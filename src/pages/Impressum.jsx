import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

function ImpressumPage() {
  return (
    <>
      <Seo title="Impressum" description="Impressum der Deti Facility Management GmbH." canonicalPath="/impressum" />
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-primaryDark">Impressum</h1>
        <div className="mt-6 space-y-4 text-sm text-textSecondary">
          <p>Deti Facility Management GmbH</p>
          <p>Region Bern und Umgebung</p>
          <p>
            E-Mail: <a href="mailto:info@deti-reinigung.ch" className="text-primary">info@deti-reinigung.ch</a>
          </p>
          <p>
            Telefon: <a href="tel:+41791511216" className="text-primary">+41 79 151 12 16</a>
          </p>
          <p>UID wird nachgereicht. Vertretungsberechtigte Geschäftsführerin: Detina Krasniqi.</p>
          <p>Haftungsausschluss: Trotz sorgfältiger Kontrolle übernehmen wir keine Haftung für externe Links.</p>
        </div>
      </section>
      <div className="px-4 pb-16 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Noch Fragen?"
          title="Wir freuen uns auf Ihre Kontaktaufnahme."
          subtitle="Deti Facility Management GmbH · info@deti-reinigung.ch"
        />
      </div>
    </>
  )
}

export default ImpressumPage

