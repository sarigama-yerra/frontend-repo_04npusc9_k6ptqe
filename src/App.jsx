import { useMemo } from 'react'

function App() {
  const sections = useMemo(() => ([
    {
      title: 'Overview',
      body:
        'The Mahabharata is one of the two great Sanskrit epics of ancient India. At over 100,000 verses, it is among the longest poems in the world. It intertwines myth, philosophy, history, and ethics to narrate the fraternal rivalry between the Kauravas and the Pandavas that culminates in the Kurukshetra war.',
    },
    {
      title: 'Authorship & Composition',
      body:
        'Traditionally attributed to the sage Vyasa, the Mahabharata was likely composed and compiled over centuries (roughly 400 BCE – 400 CE). Its layered composition includes core narratives, philosophical discourses, and later additions, reflecting evolving social and spiritual thought.',
    },
    {
      title: 'Structure',
      body:
        'The epic is divided into 18 books (parvas). It includes sub-narratives like the Bhagavad Gita, the story of Nala and Damayanti, and the tale of Savitri and Satyavan. The narrative blends royal politics, moral dilemmas, and cosmic order (dharma).',
    },
    {
      title: 'Key Characters',
      list: [
        'Krishna – Divine guide and charioteer to Arjuna, embodiment of wisdom and dharma.',
        'Yudhishthira – Eldest Pandava, upholder of truth and righteousness.',
        'Bhima – Pandava famed for strength and fierce loyalty.',
        'Arjuna – Master archer, seeker of clarity and duty.',
        'Nakula & Sahadeva – Twin Pandavas, skilled and steadfast.',
        'Draupadi – Queen of the Pandavas, symbol of dignity and resilience.',
        'Bhishma – Grand patriarch bound by vows, a moral anchor with tragic choices.',
        'Duryodhana – Eldest Kaurava, ambitious and uncompromising.',
        'Karna – Tragic hero of unmatched generosity and valor, conflicted by loyalty.',
        'Drona – Royal preceptor, torn between duty and affection.',
      ],
    },
    {
      title: 'Central Themes',
      list: [
        'Dharma (righteous duty) versus personal desire.',
        'The complexity of moral choices—right action in imperfect worlds.',
        'Fate and free will: human agency within cosmic order.',
        'The ethics of war, power, and leadership.',
        'Friendship, loyalty, vows, and their consequences.',
        'The pursuit of self-knowledge and liberation (moksha).',
      ],
    },
    {
      title: 'Historical & Cultural Significance',
      body:
        'Beyond its narrative, the Mahabharata shaped South Asian thought, art, and spirituality. Its philosophical core—the Bhagavad Gita—has inspired leaders, thinkers, and seekers worldwide. The epic continues to inform literature, theatre, dance, and modern media.',
    },
    {
      title: 'Notable Episodes',
      list: [
        'Dice Game and Exile – The turning point leading to the great war.',
        'Bhagavad Gita – Krishna’s counsel to Arjuna on duty, action, and devotion.',
        'Bhishma’s Vows – Sacrifice and the burden of righteousness.',
        'Karna’s Charity – Generosity and tragic destiny intertwined.',
        'The War at Kurukshetra – A 18-day conflict of strategy and conscience.',
        'Ashwamedha and Aftermath – Reconstruction, reflection, and renunciation.',
      ],
    },
  ]), [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-sky-50 text-gray-800">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,200,150,0.35),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(255,100,150,0.25),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(100,180,255,0.25),transparent_45%)]" />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-10">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-amber-700 bg-amber-100/80 rounded-full px-3 py-1 mb-4">
              ✨ Epic of Dharma
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-rose-600 to-sky-700">
              The Mahabharata
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-gray-700">
              A timeless Sanskrit epic weaving duty, destiny, and the human search for meaning—culminating in the great war of Kurukshetra and the wisdom of the Bhagavad Gita.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#overview" className="px-4 py-2 rounded-lg bg-amber-600 text-white hover:bg-amber-700 transition">
                Read Overview
              </a>
              <a href="/test" className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-white/60 backdrop-blur transition">
                Backend Test
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 pb-20">
        {/* Highlight Cards */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 -mt-10 mb-10">
          {[{
            label: 'Estimated Verses', value: '100,000+',
          }, {
            label: 'Books (Parvas)', value: '18',
          }, {
            label: 'Philosophical Core', value: 'Bhagavad Gita',
          }].map((c, i) => (
            <div key={i} className="rounded-xl bg-white/70 backdrop-blur shadow-sm border border-white/60 p-5">
              <p className="text-sm text-gray-500">{c.label}</p>
              <p className="text-2xl font-bold text-gray-900">{c.value}</p>
            </div>
          ))}
        </section>

        {/* Sections */}
        <section id="overview" className="space-y-10">
          {sections.map((s, idx) => (
            <div key={s.title} className="rounded-2xl bg-white/80 backdrop-blur border border-white/60 shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {idx + 1}. {s.title}
              </h2>
              {s.body && (
                <p className="text-gray-700 leading-relaxed">
                  {s.body}
                </p>
              )}
              {s.list && (
                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-700">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* Quotes */}
        <section className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            {
              q: 'You have a right to action, but never to its fruits.',
              a: 'Bhagavad Gita (2.47)'
            },
            {
              q: 'When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.',
              a: 'Bhagavad Gita (6.19)'
            }
          ].map((qt) => (
            <figure key={qt.q} className="rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-white/60 shadow-sm p-6">
              <blockquote className="text-lg text-gray-800">“{qt.q}”</blockquote>
              <figcaption className="mt-2 text-sm text-gray-500">— {qt.a}</figcaption>
            </figure>
          ))}
        </section>

        {/* Timeline */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">A brief timeline</h3>
          <div className="relative pl-6 border-l-2 border-amber-300 space-y-6">
            {[ 
              { t: 'Early oral traditions', d: 'Mythic and bardic narratives travel across regions.' },
              { t: 'c. 400 BCE – 200 BCE', d: 'Core tales take shape; early compilation begins.' },
              { t: 'c. 200 BCE – 400 CE', d: 'Expanded redactions; philosophical layers like the Gita are integrated.' },
              { t: 'Post-400 CE', d: 'Regional tellings, commentaries, and performing arts proliferate.' },
            ].map((e, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-3 top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500" />
                <p className="text-sm text-gray-500">{e.t}</p>
                <p className="text-gray-800">{e.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <footer className="mt-16 text-sm text-gray-500 text-center">
          Made as a concise, modern introduction to the Mahabharata. Explore, reflect, and keep learning.
        </footer>
      </main>
    </div>
  )
}

export default App
