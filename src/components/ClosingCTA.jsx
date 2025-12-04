import { useId } from 'react'

const defaultBackground = '/slike/reinigung-background.jpg'

function ClosingCTA({
  eyebrow = 'Bereit für den nächsten Schritt?',
  title = 'Garantierte Übergaben ohne Stress.',
  subtitle = 'Wir kombinieren Reinigung, Umzug und Qualitätsmanagement, damit Berns Wohnungen makellos bleiben.',
  backgroundImage = defaultBackground,
}) {
  const formId = useId()

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-[40px] shadow-soft">
        <img
          src={backgroundImage}
          alt="Team arbeitet an einer Übergabe"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primaryDark/90 via-primary/85 to-primaryLight/75" />
        <div className="relative grid gap-10 p-8 text-white lg:grid-cols-[1.1fr,0.9fr] lg:p-12">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-white/70">{eyebrow}</p>
            <h2 className="text-4xl font-semibold leading-tight">{title}</h2>
            <p className="text-base text-white/85">{subtitle}</p>
            <p className="text-sm text-white/70">
              Telefon: <a href="tel:+41791511216" className="font-semibold underline">+41 79 151 12 16</a> · Mail:{' '}
              <a href="mailto:info@deti-reinigung.ch" className="font-semibold underline">
                info@deti-reinigung.ch
              </a>
            </p>
          </div>

          <form
            aria-labelledby={`${formId}-title`}
            className="rounded-[30px] bg-white/95 p-6 text-textPrimary shadow-soft backdrop-blur"
          >
            <p id={`${formId}-title`} className="text-lg font-semibold text-primaryDark">
              Kontaktformular
            </p>
            <p className="text-xs text-textSecondary">Wir melden uns innerhalb von 2 Stunden.</p>
            <div className="mt-4 grid gap-3">
              <InputField label="Name" type="text" name="cta-name" />
              <InputField label="E-Mail" type="email" name="cta-email" />
              <InputField label="Telefon" type="tel" name="cta-phone" />
              <div>
                <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">Nachricht</label>
                <textarea
                  name="cta-message"
                  rows="3"
                  className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-sm focus:border-primary focus:outline-none"
                  placeholder="Erzählen Sie uns kurz von Ihrem Projekt..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-5 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Anfrage senden
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function InputField({ label, type, name }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.3em] text-textSecondary">{label}</label>
      <input
        type={type}
        name={name}
        className="mt-2 w-full rounded-2xl border border-mutedLavender bg-backgroundSurface px-4 py-3 text-sm focus:border-primary focus:outline-none"
        required
      />
    </div>
  )
}

export default ClosingCTA

