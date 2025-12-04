import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

function KontaktPage() {
  return (
    <>
      <Seo
        title="Kontakt"
        description="Kontaktieren Sie Deti Facility Management GmbH für Reinigung, Umzüge und Übergaben in Bern."
        canonicalPath="/kontakt"
      />
      <section className="bg-backgroundSurface">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Kontakt</p>
          <h1 className="mt-4 text-4xl font-semibold text-primaryDark">Schnelle Antworten, verbindliche Zusagen.</h1>
          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Schreiben Sie uns oder buchen Sie sofort ein Beratungsgespräch. Wir antworten innerhalb von zwei Stunden.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-card bg-white p-8 shadow-soft">
          <form className="space-y-4">
            {[
              { label: 'Name', type: 'text', name: 'name' },
              { label: 'E-Mail', type: 'email', name: 'email' },
              { label: 'Telefon', type: 'tel', name: 'phone' },
              { label: 'Service', type: 'text', name: 'service' },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  required
                  className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
              </div>
            ))}
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">Nachricht</label>
              <textarea
                name="message"
                rows="4"
                className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Anfrage senden
            </button>
          </form>
        </div>
        <div className="rounded-card bg-white p-8 shadow-soft">
          <h3 className="text-xl font-semibold text-primaryDark">Direkter Draht</h3>
          <p className="mt-2 text-sm text-textSecondary">
            Mail: <a href="mailto:info@deti-reinigung.ch" className="text-primary">info@deti-reinigung.ch</a>
          </p>
          <p className="text-sm text-textSecondary">
            Telefon: <a href="tel:+41791511216" className="text-primary">+41 79 151 12 16</a>
          </p>
          <p className="text-sm text-textSecondary">Web: www.deti-reinigung.ch</p>
          <div className="mt-6 flex h-64 w-full items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primaryLight text-white">
            <span className="text-sm font-semibold">Region Bern & Umgebung – Einsatzgebiet</span>
          </div>
          <p className="mt-3 text-xs text-textSecondary">
            Region Bern & Umgebung · Deti Facility Management GmbH
          </p>
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Kontakt aufnehmen"
          title="Wir planen Ihre Übergabe heute."
          subtitle="Kurze Wege, klare Antworten und ein Team, das Verantwortung übernimmt."
        />
      </div>
    </>
  )
}

export default KontaktPage

