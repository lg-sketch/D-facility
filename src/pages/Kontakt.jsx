import { useState } from 'react'
import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

function KontaktPage() {
  const services = ['Reinigung', 'Umzüge', 'Übergabe', 'Büroreinigung', 'Spezialreinigung']
  const [selectedService, setSelectedService] = useState('')

  return (
    <>
      <Seo
        title="Kontakt"
        description="Kontaktieren Sie Deti Facility Management GmbH für Reinigung, Umzüge und Übergaben in Bern."
        canonicalPath="/kontakt"
      />
      <section className="bg-white">
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
            <div>
              <label className="text-xs font-semibold text-[#0C0C66]">Ihr Vollständiger Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-base focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#0C0C66]">E-Mail</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-base focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#0C0C66]">Telefon</label>
              <input
                type="tel"
                name="phone"
                required
                className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-base focus-border-primary focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-[#0C0C66]">
                Für welchen Service interessieren Sie sich?
              </label>
              <select
                name="service"
                required
                className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-base focus:border-primary focus:outline-none"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Bitte wählen</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            {selectedService && (
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-[#0C0C66]">Wunschtermin (Datum)</label>
                  <input
                    type="date"
                    name="date"
                      className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-base focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-[#0C0C66]">Wunschtermin (Uhrzeit)</label>
                  <input
                    type="time"
                    name="time"
                      className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-base focus:border-primary focus:outline-none"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="text-xs font-semibold text-[#0C0C66]">Ihre Nachricht</label>
              <textarea
                name="message"
                rows="4"
                className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-base focus:border-primary focus:outline-none"
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
          <h3 className="text-xl font-semibold text-primaryDark">Kontakt Info</h3>
          <p className="mt-2 text-sm text-textSecondary">
            Mail: <a href="mailto:info@deti-reinigung.ch" className="text-primary">info@deti-reinigung.ch</a>
          </p>
          <p className="text-sm text-textSecondary">
            Telefon: <a href="tel:+41791511216" className="text-primary">+41 79 151 12 16</a>
          </p>
          <p className="text-sm text-textSecondary">Web: www.deti-reinigung.ch</p>
          <div className="mt-6 h-72 w-full overflow-hidden rounded-3xl shadow-soft">
            <img
              src="/slike/deti-cleaning.png"
              alt="Region Bern & Umgebung – Einsatzgebiet"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

    </>
  )
}

export default KontaktPage

