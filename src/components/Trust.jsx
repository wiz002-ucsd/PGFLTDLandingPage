import { useScrollReveal } from '../hooks/useScrollReveal'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Homeowner, Birkenhead',
    text: "PGF transformed our draughty villa. The difference in warmth is remarkable — and our power bill dropped by almost $80 a month. Couldn't be happier.",
    rating: 5,
  },
  {
    name: 'James T.',
    role: 'Landlord, North Shore',
    text: "Got 3 rental properties sorted for Healthy Homes compliance. PGF were professional, fast, and gave me the documentation I needed straight away.",
    rating: 5,
  },
  {
    name: 'Linda K.',
    role: 'Property Manager, Auckland',
    text: "Used PGF for ceiling and underfloor insulation across multiple properties. Reliable, well-priced, and always on time. Highly recommend.",
    rating: 5,
  },
]

const brands = ['PinkBatts', 'Earthwool', 'Greenstuf', 'Mammoth', 'Eliment']

const stats = [
  { value: '10+', label: 'Years in Business' },
  { value: '500+', label: 'Homes Insulated' },
  { value: '6', label: 'NZ Climate Zones' },
  { value: '5★', label: 'Customer Rating' },
]

export default function Trust() {
  const ref = useScrollReveal()

  return (
    <section id="trust" className="py-24 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="animate-on-scroll text-center mb-16">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Auckland's most recommended
            <br />
            insulation team
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => (
            <div
              key={i}
              className="animate-on-scroll text-center py-10 px-6 rounded-2xl bg-[#FAF8F5] border border-gray-100"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display text-5xl font-bold text-[#F97316] mb-2">{s.value}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="animate-on-scroll mb-20">
          <p className="text-center text-gray-400 text-sm uppercase tracking-widest font-medium mb-8">
            Trusted insulation brands we install
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
            {brands.map((brand) => (
              <div
                key={brand}
                className="bg-[#FAF8F5] border border-gray-100 rounded-xl px-6 py-3 text-[#1F2937] font-display font-semibold text-sm hover:border-[#F97316]/30 hover:bg-[#F97316]/5 transition-all duration-200"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Banner */}
        <div className="animate-on-scroll mb-20 bg-[#6B8F6B]/10 border border-[#6B8F6B]/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-[#6B8F6B] flex items-center justify-center shrink-0">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-[#1F2937] mb-1">
              2023 NZ Healthy Homes Standards Compliant
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              All our installations meet or exceed New Zealand's Healthy Homes Standards across all six climate zones. We provide full documentation for landlords and property managers.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#6B8F6B] hover:bg-[#5a7a5a] text-white font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap"
          >
            Get Compliant
          </a>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-[#1F2937] text-center mb-10">
            What our customers say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="animate-on-scroll bg-[#FAF8F5] rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#F97316]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-[#1F2937] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
