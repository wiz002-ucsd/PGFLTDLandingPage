import { useScrollReveal } from '../hooks/useScrollReveal'

export default function FinalCTA() {
  const ref = useScrollReveal()

  return (
    <section className="py-24 bg-[#FAF8F5] relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[#F97316] opacity-5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <div ref={ref} className="animate-on-scroll">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Don't Wait</span>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-[#1F2937] mt-4 mb-6 leading-tight">
            Your warm home
            <br />
            is one call away.
          </h2>
          <p className="text-gray-500 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Join hundreds of Auckland families who've already made the switch to a warmer, healthier, and more energy-efficient home.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-bold px-10 py-5 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-[#F97316]/30 hover:shadow-xl hover:-translate-y-0.5 text-lg"
            >
              Get My Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:094416900"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#1F2937] text-[#1F2937] font-bold px-10 py-5 rounded-2xl hover:bg-[#1F2937] hover:text-white transition-all duration-200 text-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call (09) 441 6900
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            {[
              '✓ Free, no-obligation quote',
              '✓ Same-day response',
              '✓ NZ Healthy Homes compliant',
              '✓ 10+ years experience',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
