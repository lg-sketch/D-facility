import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Reinigung', to: '/reinigung' },
  { label: 'Umzüge', to: '/umzuege' },
  { label: 'Über uns', to: '/ueber-uns' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Kontakt', to: '/kontakt' },
]

function Header({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!transparent) return
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparent])

  const isTransparent = transparent && !scrolled

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-white/20 transition-all ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-backgroundSurface/95 text-textPrimary shadow-soft backdrop-blur'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span
              className={`text-2xl font-semibold ${isTransparent ? 'text-white' : 'text-primaryDark'}`}
              style={{
                background: 'linear-gradient(135deg, #F4B740 0%, #4750FF 100%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              ✦
            </span>
          </div>
          <span className={`text-lg font-semibold tracking-wide ${isTransparent ? 'text-white' : 'text-primaryDark'}`}>
            DETI Reinigung
          </span>
        </NavLink>
        <nav className="hidden flex-wrap items-center gap-3 text-xs font-semibold md:flex md:gap-6 md:text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive
                    ? 'bg-white/90 text-primary shadow-soft'
                    : isTransparent
                      ? 'text-white/80 hover:text-white'
                      : 'text-textSecondary hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className={`inline-flex h-10 w-10 flex-col items-center justify-center rounded-full border text-sm md:hidden ${
              isTransparent ? 'border-white/60 text-white' : 'border-primary/30 text-primary'
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menü öffnen"
          >
            <span className={`block h-0.5 w-5 transform bg-current transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`mt-1 block h-0.5 w-5 bg-current transition ${menuOpen ? 'scale-0' : ''}`} />
            <span className={`mt-1 block h-0.5 w-5 transform bg-current transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
          <NavLink
            to="/kontakt"
            className={`hidden rounded-full px-5 py-2 text-sm font-semibold md:inline-flex ${
              isTransparent ? 'bg-white text-primary' : 'bg-primary text-white shadow-soft'
            }`}
          >
            Offerte
          </NavLink>
        </div>
      </div>
      {menuOpen && (
        <div className={`${isTransparent ? 'bg-primary/95 text-white' : 'bg-backgroundSurface text-textPrimary'} px-4 py-4 md:hidden`}>
          <div className="space-y-3 text-sm font-semibold">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block rounded-full px-4 py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/kontakt"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-2 text-white"
              onClick={() => setMenuOpen(false)}
            >
              Offerte
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

