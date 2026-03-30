import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Lower Energy Bills',
    desc: 'Proper insulation can cut heating and cooling costs by up to 30%, putting money back in your pocket every month.',
    accent: '#F97316',
    bg: 'bg-orange-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: 'Year-Round Comfort',
    desc: 'Warmer in winter, cooler in summer. Create a consistently comfortable home for your family regardless of the weather outside.',
    accent: '#3B82F6',
    bg: 'bg-blue-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Healthier Living',
    desc: 'Reduce moisture, dampness and mould. A well-insulated home improves air quality and supports better respiratory health for your family.',
    accent: '#6B8F6B',
    bg: 'bg-green-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'NZ Regulation Compliant',
    desc: 'We install to the 2023 Healthy Homes Standards across all 6 NZ climate zones — keeping landlords and property managers fully compliant.',
    accent: '#8B5CF6',
    bg: 'bg-purple-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Eco-Friendly',
    desc: 'Reducing energy consumption is one of the most effective ways to lower your household carbon footprint and help the environment.',
    accent: '#10B981',
    bg: 'bg-emerald-50',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Increased Property Value',
    desc: 'Energy-efficient, compliant homes command higher rents and sale prices. Insulation is one of the best ROI home improvements available.',
    accent: '#F59E0B',
    bg: 'bg-amber-50',
  },
]

export default function Benefits() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Why Insulate</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Benefits that last a lifetime
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Insulation isn't just about staying warm — it's a smart investment with returns you'll feel every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="animate-on-scroll group rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-default"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${b.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                style={{ color: b.accent }}
              >
                {b.icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-[#1F2937] mb-3">{b.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
