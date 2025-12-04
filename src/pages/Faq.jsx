import Seo from '../components/Seo.jsx'
import ClosingCTA from '../components/ClosingCTA.jsx'

const faqs = [
  {
    question: 'Welche Garantie bietet Deti Facility bei Reinigungen?',
    answer:
      'Wir sichern jede Übergabe für 72 Stunden ab. Sollte die Verwaltung Beanstandungen melden, kommen wir kostenlos erneut vorbei.',
  },
  {
    question: 'In welchen Gemeinden rund um Bern seid ihr aktiv?',
    answer:
      'Wir bedienen Bern Stadt, Köniz, Ostermundigen, Zollikofen, Ittigen sowie das gesamte Mittelland auf Anfrage.',
  },
  {
    question: 'Könnt ihr die Schlüsselübergabe stellvertretend übernehmen?',
    answer:
      'Ja. Unsere Einsatzleitung nimmt an der Abgabe teil, füllt das Protokoll aus und dokumentiert alles für Sie.',
  },
  {
    question: 'Wie früh sollte ein Umzug gebucht werden?',
    answer:
      'Optimal sind 3–4 Wochen Vorlauf. Notfallteams sind jedoch auch innerhalb von 48 Stunden aktivierbar.',
  },
]

function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ"
        description="Antworten auf die häufigsten Fragen zu Reinigung, Umzug und Übergabe in Bern."
        canonicalPath="/faq"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />
      <section className="bg-backgroundSurface">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.4em] text-primary">FAQ</p>
          <h1 className="mt-4 text-4xl font-semibold text-primaryDark">Antworten für Berns anspruchsvollste Übergaben.</h1>
          <p className="mt-4 max-w-3xl text-lg text-textSecondary">
            Wenn noch Fragen offen sind, erreichen Sie uns jederzeit via info@deti-reinigung.ch oder +41 79 151 12 16.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-card bg-white p-6 shadow-soft">
              <summary className="cursor-pointer text-lg font-semibold text-primaryDark">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm text-textSecondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ClosingCTA
          eyebrow="Weitere Fragen?"
          title="Wir antworten innerhalb von 2 Stunden."
          subtitle="Telefonisch, via Video-Call oder vor Ort – wie es Ihnen passt."
        />
      </div>
    </>
  )
}

export default FaqPage


