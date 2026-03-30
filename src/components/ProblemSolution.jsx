import { useScrollReveal } from '../hooks/useScrollReveal'

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.07 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
    title: 'Up to 40% of heat escapes through ceiling & floors',
    desc: "New Zealand homes lose enormous amounts of heat through uninsulated surfaces — you're paying to heat the outside.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Energy bills growing every year',
    desc: 'Without insulation, your heating and cooling systems work twice as hard — costing you hundreds extra every winter.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Cold, damp homes harm your family's health",
    desc: 'Poorly insulated homes breed mould and damp — leading to respiratory issues, especially for children and the elderly.',
  },
]

export default function ProblemSolution() {
  const ref = useScrollReveal()

  return (
    <section className="py-20 bg-[#FAF8F5]">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Problem */}
        <div className="animate-on-scroll text-center mb-16">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">The Problem</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Your home is leaking heat
            <span className="text-[#F97316]">.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Most New Zealand homes — especially older ones — have inadequate insulation, leading to predictable and costly problems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {problems.map((p, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group hover:shadow-md transition-shadow duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {p.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-[#1F2937] mb-3 leading-snug">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Solution Bridge */}
        <div className="animate-on-scroll relative rounded-3xl bg-[#1F2937] overflow-hidden p-10 lg:p-16">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316] opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6B8F6B] opacity-10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">The Solution</span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mt-3 mb-5 leading-tight">
                One investment.{' '}
                <span className="text-[#F97316]">Lifetime</span>{' '}
                comfort.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Professional insulation by PGF creates a thermal barrier that keeps warmth in during winter and heat out during summer — dramatically reducing your energy bills and improving your family's health.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Warmer winters', icon: '🔥', color: 'bg-[#F97316]/10 text-[#F97316]' },
                { label: 'Cooler summers', icon: '❄️', color: 'bg-blue-500/10 text-blue-400' },
                { label: 'Lower bills', icon: '💰', color: 'bg-[#6B8F6B]/10 text-[#6B8F6B]' },
                { label: 'Healthier air', icon: '🌿', color: 'bg-emerald-500/10 text-emerald-400' },
              ].map((item) => (
                <div key={item.label} className={`${item.color} rounded-xl p-5 flex flex-col gap-2 border border-white/5`}>
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-sm font-semibold text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
