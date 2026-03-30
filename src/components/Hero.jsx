import { useEffect, useRef } from 'react'

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Homes Insulated' },
  { value: '100%', label: 'NZ Compliant' },
  { value: 'Free', label: 'Quotes & Advice' },
]

export default function Hero() {
  const headingRef = useRef(null)
  const subRef = useRef(null)

  useEffect(() => {
    const els = [headingRef.current, subRef.current]
    els.forEach((el, i) => {
      if (!el) return
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, i * 150)
    })
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0D1117]">
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] via-[#1a2332] to-[#0D1117]" />
        {/* Texture layer */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Warm glow */}
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F97316] opacity-10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#6B8F6B] opacity-8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
              Auckland's Trusted Insulation Experts
            </div>

            <h1
              ref={headingRef}
              className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ opacity: 0, transform: 'translateY(32px)', transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Stop Losing Heat.{' '}
              <span className="text-[#F97316]">Start Saving</span>{' '}
              Money.
            </h1>

            <p
              ref={subRef}
              className="text-lg lg:text-xl text-white/70 leading-relaxed mb-10 max-w-lg"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Professional insulation for warmer, healthier homes. Auckland's most recommended installers — free quotes, Healthy Homes compliant.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#F97316]/30 hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Get Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:094416900"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                Call (09) 441 6900
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl font-bold text-[#F97316]">{stat.value}</div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* House illustration */}
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Outer glow ring */}
              <div className="absolute inset-4 rounded-full bg-[#F97316]/10 blur-2xl" />
              {/* Inner graphic card */}
              <div className="absolute inset-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center gap-6 p-8">
                {/* House SVG */}
                <svg className="w-32 h-32 text-white/90" viewBox="0 0 120 120" fill="none">
                  <path d="M60 10L10 50v60h40V75h20v35h40V50L60 10z" fill="#F97316" fillOpacity="0.15" stroke="#F97316" strokeWidth="2"/>
                  <path d="M60 10L10 50" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
                  <path d="M60 10L110 50" stroke="white" strokeWidth="1.5" strokeOpacity="0.3"/>
                  {/* Waves representing warmth/insulation */}
                  <path d="M30 65 Q45 55 60 65 Q75 75 90 65" stroke="#F97316" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
                  <path d="M30 75 Q45 65 60 75 Q75 85 90 75" stroke="#F97316" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
                  <path d="M30 85 Q45 75 60 85 Q75 95 90 85" stroke="#F97316" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"/>
                  {/* Door */}
                  <rect x="50" y="82" width="20" height="28" rx="3" fill="#F97316" fillOpacity="0.4" stroke="#F97316" strokeWidth="1.5"/>
                  {/* Windows */}
                  <rect x="25" y="60" width="16" height="14" rx="2" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>
                  <rect x="79" y="60" width="16" height="14" rx="2" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1" strokeOpacity="0.4"/>
                </svg>

                {/* Labels */}
                <div className="text-center">
                  <div className="text-white font-display text-xl font-semibold mb-1">Warmer Inside</div>
                  <div className="text-white/50 text-sm">Year-round comfort guaranteed</div>
                </div>

                {/* Temp indicator */}
                <div className="flex gap-8 w-full justify-center">
                  <div className="text-center">
                    <div className="text-[#F97316] font-bold text-2xl">-40%</div>
                    <div className="text-white/40 text-xs">Heat Loss</div>
                  </div>
                  <div className="w-px bg-white/10" />
                  <div className="text-center">
                    <div className="text-[#6B8F6B] font-bold text-2xl">-30%</div>
                    <div className="text-white/40 text-xs">Energy Bills</div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 bg-[#6B8F6B] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                NZ Compliant ✓
              </div>
              <div className="absolute -bottom-2 -left-2 bg-white text-[#1F2937] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                Free Quote
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z" fill="#FAF8F5"/>
        </svg>
      </div>
    </section>
  )
}
