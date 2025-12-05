import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import HomePage from './pages/Home.jsx'
import ReinigungPage from './pages/Reinigung.jsx'
import UmzuegePage from './pages/Umzuege.jsx'
import UeberUnsPage from './pages/UeberUns.jsx'
import BlogPage from './pages/Blog.jsx'
import BlogPostPage from './pages/BlogPost.jsx'
import FaqPage from './pages/Faq.jsx'
import KontaktPage from './pages/Kontakt.jsx'
import ImpressumPage from './pages/Impressum.jsx'
import DatenschutzPage from './pages/Datenschutz.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/reinigung" element={<ReinigungPage />} />
          <Route path="/umzuege" element={<UmzuegePage />} />
          <Route path="/ueber-uns" element={<UeberUnsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
