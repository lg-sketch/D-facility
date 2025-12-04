import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Deti Facility Management GmbH',
  url: 'https://www.deti-reinigung.ch',
  email: 'info@deti-reinigung.ch',
  telephone: '+41 79 151 12 16',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bern',
    addressCountry: 'CH',
  },
  areaServed: 'Bern und Umgebung',
  sameAs: ['https://www.deti-reinigung.ch'],
  makesOffer: [
    { '@type': 'Offer', name: 'Wohnungs- & Büroreinigung' },
    { '@type': 'Offer', name: 'Umzüge & Möbeltransporte' },
  ],
}

function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const noTopPaddingRoutes = new Set(['/', '/reinigung', '/umzuege'])
  const mediumPaddingRoutes = new Set(['/ueber-uns', '/faq', '/kontakt', '/blog'])
  const noTopPadding = noTopPaddingRoutes.has(location.pathname)
  const mediumPadding = mediumPaddingRoutes.has(location.pathname)

  useEffect(() => {
    const id = 'org-schema'
    let script = document.getElementById(id)
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = id
      document.head.appendChild(script)
    }
    script.innerHTML = JSON.stringify(organizationSchema)
  }, [])

  return (
    <div className={`min-h-screen text-textPrimary ${isHome ? 'bg-lavender-gradient bg-primary-radial' : 'bg-white'}`}>
      <Header transparent={isHome} />
      <main
        className={`${noTopPadding ? 'pt-0' : mediumPadding ? 'pt-16' : 'pt-24'} ${
          isHome ? '' : 'bg-white'
        } pb-0`}
      >
        <Outlet />
      </main>
      <Footer className={isHome ? '' : 'mt-20'} />
    </div>
  )
}

export default Layout

