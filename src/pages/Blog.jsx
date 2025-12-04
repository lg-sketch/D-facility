import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'
import blogPosts from '../data/blogPosts.js'

function BlogPage() {
  return (
    <div className="bg-white">
      <Seo
        title="Blog & Insights"
        description="Aktuelle Insights zu Reinigung, Umzug und Facility Management in Bern – kuratiert von Deti Facility Management GmbH."
        canonicalPath="/blog"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Deti Facility Insights',
          publisher: {
            '@type': 'Organization',
            name: 'Deti Facility Management GmbH',
          },
        }}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">Blog</p>
          <h1 className="mt-4 text-4xl font-semibold text-primaryDark">Tipps & Tricks</h1>
          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Nützliche Tipps und Expertenwissen rund um Reinigung, Umzüge und stressfreie Wohnungsübergaben.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="flex flex-col overflow-hidden rounded-[32px] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 text-xs uppercase tracking-[0.3em] text-white">
                  {post.reading}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-textSecondary">{post.date}</p>
                <h2 className="mt-2 text-xl font-semibold text-primaryDark">{post.title}</h2>
                <p className="mt-2 text-sm text-textSecondary flex-1">{post.excerpt}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-primary">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-backgroundSurface px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Content + Services"
          title="Lassen Sie uns gemeinsam Ihre Story erzählen."
          subtitle="Wir liefern nicht nur Dienstleistungen, sondern auch die Kommunikation, die Kunden überzeugt."
        />
      </div>
    </div>
  )
}

export default BlogPage

