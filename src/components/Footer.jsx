import { NavLink } from 'react-router-dom'

const partnerLogos = [
  { src: '/slike/aios.webp', alt: 'AIOS Partner' },
  { src: '/slike/swiss_hosting.webp', alt: 'Swiss Hosting' },
]

function Footer({ className = '' }) {
  return (
    <footer className={`border-t border-white/30 bg-primaryDark text-white ${className}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-start lg:gap-8 lg:px-8">
        <div className="space-y-4 lg:flex-[0.75]">
          <p className="text-xs uppercase tracking-[0.4em] text-white/70">Deti Facility</p>
          <h3 className="text-2xl font-semibold leading-tight">
            <span className="bg-gradient-to-r from-white via-[#DFF6FF] to-[#0EBCCE]/70 bg-clip-text text-transparent">
              Sauberkeit & Umzüge
            </span>
            <br />
            <span>mit Garantie für Bern.</span>
          </h3>
          <img src="/slike/co2.jpg" alt="CO₂ reduzierte Flotte" className="h-12 w-auto object-contain" loading="lazy" />
        </div>
        <div className="flex flex-1 flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="lg:flex-[1.2]">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em]">Sitemap</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {[
                { label: 'Home', to: '/' },
                { label: 'Reinigung', to: '/reinigung' },
                { label: 'Umzüge', to: '/umzuege' },
                { label: 'Über uns', to: '/ueber-uns' },
                { label: 'Blog', to: '/blog' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Kontakt', to: '/kontakt' },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="hover:text-white">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:flex-[1.4] space-y-2 text-sm text-white/80">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em]">Kontakt</h4>
            <p className="font-semibold whitespace-nowrap">Deti Facility Management GmbH</p>
            <p className="whitespace-nowrap">Tel: +41 79 151 12 16</p>
            <p className="whitespace-nowrap">Mail: info@deti-reinigung.ch</p>
            <p className="whitespace-nowrap">Web: www.deti-reinigung.ch</p>
          </div>
          <div className="lg:flex-[0.9] space-y-2 text-sm text-white/80">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em]">Öffnungszeiten</h4>
            <p>Montag – Freitag</p>
            <p>08:00–12:00</p>
            <p>13:30–17:00</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 px-4 py-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Deti Facility Management GmbH · Bern · Alle Rechte vorbehalten.</span>
            <NavLink to="/impressum" className="hover:text-white">
              Impressum
            </NavLink>
            <NavLink to="/datenschutz" className="hover:text-white">
              Datenschutz
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            {partnerLogos.map((logo) => (
              <img key={logo.src} src={logo.src} alt={logo.alt} className="h-5 w-auto object-contain" loading="lazy" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

