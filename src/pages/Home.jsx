import { NavLink } from 'react-router-dom'
import { ShieldCheck, Sparkles, Truck, BadgeCheck } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

const heroBackground =
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80'

const heroAvatars = [
  {
    src: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=120&q=80',
    alt: 'Deti Crew Member',
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
    alt: 'Move Lead',
  },
  {
    src: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=120&q=80',
    alt: 'Cleaning Specialist',
  },
]

const iconBoxes = [
  {
    title: '360° Reinigung',
    copy: 'Privat, Büro und Neubau mit tabellarischer Kontrolle.',
    icon: Sparkles,
  },
  {
    title: 'Umzug & Übergabe',
    copy: 'Möbeltransport mit dokumentierter Schlüsselübergabe.',
    icon: Truck,
  },
  {
    title: 'Garantie',
    copy: 'Schriftliche Zufriedenheit plus Übergabe an Verwaltung.',
    icon: BadgeCheck,
  },
]

const checklistItems = [
  'Protokoll nach Schweizer Mietrecht',
  'Ökologische Pflegemittel',
  'Pünktliche Schlüsselübergabe',
]

const steps = [
  { title: 'Anfrage', detail: 'Kontaktieren Sie uns für eine kostenlose Offerte.' },
  { title: 'Besichtigung', detail: 'Kostenlose Begehung vor Ort oder per Video.' },
  { title: 'Ausführung', detail: 'Pünktlicher Umzug plus gründliche Reinigung.' },
  { title: 'Übergabe', detail: 'Erfolgreiche Abgabe mit Garantie & Protokoll.' },
]

const reviews = [
  {
    quote: 'Die Endreinigung war absolut stressfrei. Die Abnahmegarantie hat super funktioniert.',
    author: 'Sarah M.',
    role: 'Privatkundin aus Bern',
  },
  {
    quote: 'Wir haben unser komplettes Büro gezügelt – alles wurde sorgfältig verpackt und pünktlich geliefert.',
    author: 'Markus B.',
    role: 'Geschäftsführer aus Thun',
  },
  {
    quote: 'Sehr freundliches Personal und faire Preise. Hatte Angst vor dem Umzug, aber alles lief perfekt.',
    author: 'Julia K.',
    role: 'Privatkundin aus Köniz',
  },
]

function HomePage() {
  return (
    <div className="bg-white">
      <Seo
        title="Reinigung & Umzüge in Bern"
        description="Deti Facility Management GmbH liefert brillante Reinigungen, stressfreie Umzüge und garantierte Wohnungsübergaben in Bern und Umgebung."
        keywords={[
          'Reinigung Bern',
          'Umzug Bern',
          'Wohnungsübergabe Reinigung',
          'Facility Management Bern',
        ]}
        canonicalPath="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Deti Facility Management GmbH',
          url: 'https://www.deti-reinigung.ch/',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://www.deti-reinigung.ch/?s={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />
      <HeroSection />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {iconBoxes.map((box) => (
            <article key={box.title} className="flex flex-col gap-3 text-left">
              <box.icon className="h-12 w-12 text-primary" strokeWidth={1} />
              <h3 className="text-xl font-semibold text-primaryDark">{box.title}</h3>
              <p className="text-sm text-textSecondary">{box.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex-1 p-0 lg:pr-8">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Unser Qualitäts-Versprechen</p>
          <h3 className="mt-3 text-3xl font-semibold">Alles erledigt, bevor die Verwaltung kommt.</h3>
          <p className="mt-3 text-sm text-textSecondary">
            Wir garantieren ein <strong>gerichtsfestes Protokoll</strong>, lückenlose Fotodokumentation und koordinieren den
            Termin direkt mit Ihrer Verwaltung.
          </p>
          <ul className="mt-6 space-y-4">
            {checklistItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-textSecondary">
                <img src="/slike/check.png" alt="" className="mt-0.5 h-5 w-5 flex-shrink-0" loading="lazy" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <img
            src="/slike/deti-team.jpg"
            alt="Checkliste und Reinigungsteam"
            className="h-full w-full rounded-[32px] object-cover shadow-soft"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Der Ablauf</p>
          <h2 className="mt-2 text-3xl font-semibold text-primaryDark">So einfach funktioniert&apos;s</h2>
          <p className="mt-2 text-sm text-textSecondary">Vier Schritte zu Ihrer stressfreien Reinigung und Übergabe.</p>
        </div>
        <div className="relative mt-12 rounded-[32px] bg-backgroundSurface/60 p-6 shadow-soft">
          <div className="pointer-events-none absolute left-16 right-16 top-16 hidden md:block">
            <div className="arrow-path animate-arrow-line h-1 w-full rounded-full opacity-60" />
          </div>
          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex flex-col items-center text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-semibold text-primaryDark shadow-soft">
                  0{index + 1}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-primaryDark">{step.title}</h4>
                <p className="mt-2 text-sm text-textSecondary">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-backgroundSurface/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-3xl font-semibold text-primaryDark">Das sagen unsere Kunden</p>
            <div className="mt-3 flex items-center justify-center gap-2 text-primary">
              <span className="flex items-center gap-1 text-xl">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx}>★</span>
                ))}
              </span>
              <span className="text-sm text-textSecondary">4.9/5 (500+ Bewertungen)</span>
            </div>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.author}
                className="rounded-3xl border border-white/70 bg-white/40 p-8 text-center shadow-soft backdrop-blur"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-primary shadow-soft">
                  ”
                </div>
                <p className="mt-6 text-sm text-textSecondary">„{review.quote}“</p>
                <p className="mt-6 text-base font-semibold text-primaryDark">{review.author}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{review.role}</p>
                <div className="mt-4 flex justify-center gap-1 text-accentYellow">
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="px-0 sm:px-6 lg:px-8">
        <ClosingCTA />
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-b-[48px] text-white">
      <div className="absolute inset-0">
        <img src={heroBackground} alt="Modern Küche in Bern" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-br from-primaryDark/95 via-primary/85 to-primaryLight/70" />
      </div>
      <section className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-32 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex-1 space-y-6 pr-0 lg:pr-10">
          <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.4em]">
            Bern & Umgebung
          </span>
          <h1 className="bg-gradient-to-r from-white via-[#DFF6FF] to-[#0EBCCE]/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-lg lg:text-5xl">
            Zügeln &amp; Reinigen ohne Stress.
          </h1>
          <p className="text-lg text-white/90">
            Ihr Partner für Umzug und Reinigung in Bern mit 100% Abnahmegarantie. Konzentrieren Sie sich auf das Neue, wir machen den Rest.
          </p>
          <div className="flex flex-wrap gap-3">
            <NavLink
              to="/kontakt"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition hover:-translate-y-0.5"
            >
              Offerte anfordern
            </NavLink>
            <NavLink
              to="/reinigung"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Unsere Services
            </NavLink>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="-space-x-3">
              {heroAvatars.map((avatar) => (
                <span key={avatar.src} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/40">
                  <img src={avatar.src} alt={avatar.alt} className="h-full w-full rounded-full object-cover" loading="lazy" />
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold">⭐ 4.9/5</p>
              <p className="text-xs text-white/80">Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative">
            <img
              src="/slike/facility.jpg"
              alt="Übergabefertiges Haus"
              className="h-80 w-full rounded-[36px] object-cover shadow-soft"
              loading="lazy"
            />
            <div className="absolute -bottom-6 left-4 right-4 flex items-center gap-4 rounded-2xl bg-white/70 p-4 shadow-lg backdrop-blur-xl border border-white/50 sm:left-10 sm:right-28">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8FFF2] text-[#26C281]">
                <ShieldCheck className="h-6 w-6" color="#26C281" />
              </span>
              <div>
                <p className="text-base font-semibold text-primaryDark">Abnahmegarantie inklusive</p>
                <p className="text-sm text-textSecondary">Keine Diskussionen bei der Übergabe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

