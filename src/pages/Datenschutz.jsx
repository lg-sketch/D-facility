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
        <div className="mt-6 space-y-6 text-sm text-textSecondary">
          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">1. Allgemeines und Verantwortlicher</h2>
            <p>
              Der Schutz Ihrer Privatsphäre ist uns wichtig. Mit der folgenden Datenschutzerklärung erläutern wir, welche
              Personendaten wir bearbeiten, wenn Sie unsere Website www.deti-reinigung.ch besuchen oder unsere
              Dienstleistungen in Anspruch nehmen. Wir richten uns dabei nach dem Schweizer Datenschutzgesetz (DSG).
            </p>
            <p>Verantwortlich für die Datenbearbeitung auf dieser Website ist:</p>
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

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">2. Datensicherheit (SSL/TLS-Verschlüsselung)</h2>
            <p>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
              Beispiel der Anfragen, die Sie an uns senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und
              an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">3. Server-Log-Dateien</h2>
            <p>
              Der Provider dieser Website erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien,
              die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>IP-Adresse (gekürzt/anonymisiert)</li>
              <li>Datum und Uhrzeit der Serveranfrage</li>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
            </ul>
            <p>
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen
              Datenquellen wird nicht vorgenommen. Wir behalten uns vor, diese Daten nachträglich zu prüfen, wenn uns
              konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">4. Kontaktformular und E-Mail-Kontakt</h2>
            <p>
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem
              Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, E-Mail, Telefonnummer, Adresse)
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage
              unseres berechtigten Interesses an der effektiven Bearbeitung der an uns gerichteten Anfragen oder zur
              Erfüllung vorvertraglicher Massnahmen (Offertenerstellung).
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">5. Cookies</h2>
            <p>
              Unsere Website verwendet teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und
              enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              Die meisten der von uns verwendeten Cookies sind so genannte „Session-Cookies“. Sie werden nach Ende Ihres
              Besuchs automatisch gelöscht.
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur
              im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschliessen sowie das
              automatische Löschen der Cookies beim Schliessen des Browsers aktivieren.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">6. Weitergabe von Daten an Dritte</h2>
            <p>
              Wir geben Ihre personenbezogenen Daten nur an Dritte weiter, wenn dies zur Erfüllung unserer vertraglichen
              Pflichten notwendig ist (z.B. an Subunternehmer für Spezialreinigungen oder Logistikpartner beim Umzug), wenn
              wir gesetzlich dazu verpflichtet sind oder wenn Sie eingewilligt haben.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">7. Ihre Rechte</h2>
            <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten.</li>
              <li>Berichtigung unrichtiger Daten.</li>
              <li>Löschung Ihrer Daten.</li>
              <li>Einschränkung der Datenverarbeitung.</li>
            </ul>
            <p>
              Wenn Sie Fragen hierzu oder zum Datenschutz haben, können Sie sich jederzeit unter der oben angegebenen Adresse
              oder per E-Mail an{' '}
              <a href="mailto:info@deti-reinigung.ch" className="text-primary">
                info@deti-reinigung.ch
              </a>{' '}
              an uns wenden.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-primaryDark">8. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils aktuelle,
              auf unserer Website publizierte Fassung.
            </p>
          </div>
        </div>
      </section>
      <div className="px-0 pb-16 sm:px-6 lg:px-8">
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

