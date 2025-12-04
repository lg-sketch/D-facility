import { useEffect } from 'react'

const siteName = 'Deti Facility Management GmbH'
const baseUrl = 'https://www.deti-reinigung.ch'

function ensureMeta({ key, value, attr = 'name' }) {
  let element = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value || '')
}

function removeMeta({ key, attr = 'name' }) {
  const element = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (element) {
    element.remove()
  }
}

function Seo({
  title,
  description,
  keywords = [],
  canonicalPath = '/',
  schema,
  schemaId,
  noIndex = false,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${siteName}` : siteName
    document.title = fullTitle
    if (description) {
      ensureMeta({ key: 'description', value: description })
      ensureMeta({ key: 'og:description', value: description, attr: 'property' })
      ensureMeta({ key: 'twitter:description', value: description, attr: 'name' })
    }
    ensureMeta({ key: 'og:title', value: fullTitle, attr: 'property' })
    ensureMeta({ key: 'twitter:title', value: fullTitle })
    ensureMeta({ key: 'og:site_name', value: siteName, attr: 'property' })
    const keywordsValue = keywords.length ? keywords.join(', ') : undefined
    if (keywordsValue) {
      ensureMeta({ key: 'keywords', value: keywordsValue })
    } else {
      removeMeta({ key: 'keywords' })
    }
    ensureMeta({ key: 'og:type', value: 'website', attr: 'property' })
    ensureMeta({ key: 'twitter:card', value: 'summary_large_image' })
    ensureMeta({ key: 'robots', value: noIndex ? 'noindex, nofollow' : 'index, follow' })

    const canonicalUrl = `${baseUrl}${canonicalPath}`
    ensureMeta({ key: 'og:url', value: canonicalUrl, attr: 'property' })

    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', canonicalUrl)

    let schemaNode
    if (schema) {
      const id = schemaId || `schema-${canonicalPath.replace(/[^\w-]/g, '') || 'root'}`
      schemaNode = document.getElementById(id)
      if (!schemaNode) {
        schemaNode = document.createElement('script')
        schemaNode.type = 'application/ld+json'
        schemaNode.id = id
        document.head.appendChild(schemaNode)
      }
      schemaNode.innerHTML = JSON.stringify(schema)
    }

    return () => {
      if (schema && schemaNode) {
        schemaNode.remove()
      }
    }
  }, [title, description, keywords, canonicalPath, schema, schemaId, noIndex])

  return null
}

export default Seo

