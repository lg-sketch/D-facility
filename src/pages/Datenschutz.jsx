import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

function DatenschutzPage() {
  return (
    <>
      <Seo
        title="Datenschutz"
        description="Datenschutzerklärung der Deti Facility Management GmbH."
        canonicalPath="/datenschutz"
        noIndex
      />
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-primaryDark">Datenschutzerklärung</h1>
        <div className="mt-6 space-y-4 text-sm text-textSecondary">
          <p>
            Verantwortlich: Deti Facility Management GmbH · info@deti-reinigung.ch · +41 79 151 12 16.
          </p>
          <p>
            Wir verarbeiten personenbezogene Daten gemäss Schweizer Datenschutzgesetz (revDSG) und – soweit anwendbar –
            nach DSGVO.
          </p>
          <p>
            Zwecke: Beantwortung von Anfragen, Erstellung von Offerten, Durchführung von Verträgen, Marketing (Google
            Ads/Analytics), Sicherheitsmassnahmen.
          </p>
          <p>
            Rechtsgrundlagen: Vertragserfüllung, Einwilligung, berechtigtes Interesse. Daten werden nur solange
            gespeichert, wie es der Zweck erfordert.
          </p>
          <p>
            Rechte: Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch. Kontaktieren Sie uns via
            info@deti-reinigung.ch.
          </p>
          <p>
            Drittanbieter: Hosting (Vercel/Äquivalent in EU), Analytik (Google Ireland), Kartenmaterial (Google Maps).
          </p>
          <p>Diese Erklärung wird bei Bedarf aktualisiert. Stand: Dezember 2025.</p>
        </div>
      </section>
      <div className="px-4 pb-16 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Transparenz"
          title="Datenschutz ist Teil unserer Qualität."
          subtitle="Fragen zur Datenverarbeitung? Wir antworten gern persönlich."
        />
      </div>
    </>
  )
}

export default DatenschutzPage

