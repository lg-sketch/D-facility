import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Share2, Linkedin, Mail, PhoneCall, Printer } from 'lucide-react'
import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import blogPosts from '../data/blogPosts.js'

const siteUrl = 'https://www.deti-reinigung.ch'

function BlogPostPage() {
  const { slug } = useParams()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return (
      <div className="bg-white px-4 py-24 text-center text-textPrimary sm:px-6 lg:px-8">
        <p className="text-sm uppercase tracking-[0.4em] text-primary">Blog</p>
        <h1 className="mt-2 text-3xl font-semibold text-primaryDark">Artikel nicht gefunden</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <ArrowLeft className="h-4 w-4" /> Zurück zum Blog
        </Link>
      </div>
    )
  }

  const canonicalPath = `/blog/${post.slug}`
  const shareUrl = encodeURIComponent(`${siteUrl}${canonicalPath}`)
  const shareText = encodeURIComponent(post.title)

  return (
    <div className="bg-white">
      <Seo
        title={post.title}
        description={post.excerpt}
        canonicalPath={canonicalPath}
        keywords={post.tags}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          datePublished: post.date,
          keywords: post.tags.join(', '),
        }}
      />

      <article className="mx-auto max-w-4xl px-4 pb-16 pt-8 text-textPrimary sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <ArrowLeft className="h-4 w-4" /> Zurück zum Blog
        </Link>
        <div className="mt-8 overflow-hidden rounded-[40px]">
          <div className="relative">
            <img
              src={post.heroImage || post.image}
              alt={post.title}
              className="h-[420px] w-full rounded-[40px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-sm uppercase tracking-[0.4em] text-white">
              {post.category}
            </div>
          </div>
        </div>

        <header className="mt-8 space-y-3">
          <h1 className="text-4xl font-semibold leading-tight text-primaryDark">{post.title}</h1>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="rounded-full border border-primary/30 px-4 py-1 text-primaryDark">
              {post.date}
            </span>
            <span className="rounded-full border border-primary/30 px-4 py-1 text-primaryDark">{post.reading}</span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-primaryDark">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-primaryDark">
          <ShareIcon icon={Share2} href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} />
          <ShareIcon icon={Linkedin} href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} />
          <ShareIcon icon={Mail} href={`mailto:?subject=${shareText}&body=${shareUrl}`} />
          <ShareIcon icon={PhoneCall} href="https://wa.me/41791511216" />
          <ShareIcon icon={Printer} href="javascript:window.print()" />
        </div>
        <div className="mt-10 space-y-10">
          {post.sections.map((section, idx) => {
            if (section.type === 'text') {
              return (
                <section key={idx} className="space-y-3">
                  <h2 className="text-2xl font-semibold text-primaryDark">{section.heading}</h2>
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-base text-textSecondary">
                      {formatInline(paragraph)}
                    </p>
                  ))}
                </section>
              )
            }
            if (section.type === 'image') {
              return (
                <figure key={idx} className="overflow-hidden rounded-[32px]">
                  <img src={section.src} alt={section.alt} className="w-full object-cover" loading="lazy" />
                  <figcaption className="mt-2 text-center text-xs text-textSecondary">{section.alt}</figcaption>
                </figure>
              )
            }
            if (section.type === 'list') {
              return (
                <section key={idx}>
                  <h2 className="text-2xl font-semibold text-primaryDark">{section.heading}</h2>
                  <ul className="mt-4 space-y-2 text-base text-textSecondary">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          ✓
                        </span>
                        <span>{formatInline(item)}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )
            }
            return null
          })}
        </div>
      </article>

      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-primaryDark">Weitere Artikel</h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {blogPosts
            .filter((entry) => entry.slug !== post.slug)
            .slice(0, 3)
            .map((entry) => (
              <Link
                key={entry.slug}
                to={`/blog/${entry.slug}`}
                className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-soft transition hover:-translate-y-1"
              >
                <img src={entry.image} alt={entry.title} className="h-32 w-full object-cover" loading="lazy" />
                <div className="space-y-2 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{entry.date}</p>
                  <p className="text-sm font-semibold text-primaryDark">{entry.title}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Nächster Schritt"
          title="Wir planen Ihren Reinigung- oder Umzugs-Case."
          subtitle="Ein Ansprechpartner für Dispo, Ausführung und Abnahme – garantiert übergabefertig."
          backgroundImage="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80"
        />
      </div>
    </div>
  )
}

function ShareIcon({ icon, href }) {
  const IconComponent = icon
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 text-primaryDark transition hover:-translate-y-0.5"
    >
      <IconComponent className="h-4 w-4" />
    </a>
  )
}

function formatInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="text-primaryDark">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <span key={idx}>{part}</span>
  })
}

export default BlogPostPage

