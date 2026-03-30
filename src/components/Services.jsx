import { useScrollReveal } from '../hooks/useScrollReveal'

const services = [
  {
    title: 'Ceiling Insulation',
    desc: 'The most impactful insulation upgrade. Stops warm air escaping through your roof — the single largest source of heat loss in most NZ homes.',
    features: ['Pink Batts installation', 'Earthwool & Glasswool options', 'New builds & retrofits', 'All ceiling types'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    badge: 'Most Popular',
    badgeColor: 'bg-[#F97316] text-white',
  },
  {
    title: 'Underfloor Insulation',
    desc: 'Keep the cold from creeping up through your floors. Essential for homes with suspended timber floors — a major cause of chilly rooms.',
    features: ['Greenstuf & Mammoth brands', 'Eliminates cold floors', 'Moisture management', 'Accessible crawlspaces'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Wall Insulation',
    desc: 'Insulating exterior walls dramatically reduces heat transfer and noise — especially important for older NZ homes built without wall batts.',
    features: ['Blown-in insulation', 'Renovation specialists', 'Noise reduction', 'Existing & new walls'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Healthy Homes Assessments',
    desc: 'Comprehensive inspections to ensure your property meets the 2023 NZ Healthy Homes Standards. Essential for landlords and property managers.',
    features: ['Full compliance report', 'All climate zones', 'Landlord certificates', 'Same-week assessments'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    badge: 'Landlords',
    badgeColor: 'bg-[#6B8F6B] text-white',
  },
  {
    title: 'New Build Insulation',
    desc: 'Get it right from the start. We work with builders and developers to specify and install the optimal insulation package for new residential and commercial builds.',
    features: ['Builder partnerships', 'Specification advice', 'Residential & commercial', 'Code compliance'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
      </svg>
    ),
    badge: null,
    badgeColor: '',
  },
  {
    title: 'Heat Pump & Ventilation',
    desc: 'Complement your insulation with efficient heat pump installation and bathroom ventilation — for complete home comfort and moisture control.',
    features: ['Heat pump supply & install', 'Bathroom fan installation', 'Range hood installation', 'Air conditioning'],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    badge: null,
    badgeColor: '',
  },
]

export default function Services() {
  const ref = useScrollReveal()

  return (
    <section id="services" className="py-24 bg-[#FAF8F5]">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Complete insulation solutions for homes, rentals, and commercial properties across Auckland.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {service.badge && (
                <span className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${service.badgeColor}`}>
                  {service.badge}
                </span>
              )}

              <div className="w-14 h-14 rounded-xl bg-[#1F2937] text-white flex items-center justify-center mb-6">
                {service.icon}
              </div>

              <h3 className="font-display text-xl font-semibold text-[#1F2937] mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>

              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-[#6B8F6B] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1F2937] hover:bg-[#111827] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Enquire About a Service
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
