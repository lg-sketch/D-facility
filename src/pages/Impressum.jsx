import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

function ImpressumPage() {
  return (
    <>
      <Seo title="Impressum" description="Impressum der Deti Facility Management GmbH." canonicalPath="/impressum" />
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-primaryDark">Impressum</h1>
        <div className="mt-6 space-y-5 text-sm text-textSecondary">
          <div className="space-y-1">
            <p className="font-semibold text-textPrimary">Deti Facility Management GmbH</p>
            <p>Weissensteinstrasse 14</p>
            <p>3008 Bern</p>
            <p>Tel: <a href="tel:+41791511216" className="text-primary">+41 79 151 12 16</a></p>
            <p>
              Mail:{' '}
              <a href="mailto:info@deti-reinigung.ch" className="text-primary">
                info@deti-reinigung.ch
              </a>
            </p>
            <p>
              Web:{' '}
              <a href="https://www.deti-reinigung.ch" className="text-primary">
                www.deti-reinigung.ch
              </a>
            </p>
          </div>

          <div className="space-y-1">
            <h2 className="text-base font-semibold text-primaryDark">Handelsregistereintrag</h2>
            <p>Eingetragener Firmenname: Deti Facility Management GmbH</p>
            <p>Nummer: CHE-100.923.483</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">Haftungsausschluss (Disclaimer)</h2>
            <p>
              Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität,
              Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden
              materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
              veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind,
              werden ausgeschlossen.
            </p>
            <p>
              Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte
              Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise
              oder endgültig einzustellen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">Haftung für Links</h2>
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche
              Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene
              Gefahr des Nutzers oder der Nutzerin.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">Urheberrechte</h2>
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören
              ausschliesslich der Firma Deti Facility Management GmbH oder den speziell genannten Rechtsinhabern. Für die
              Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
            </p>
          </div>
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

