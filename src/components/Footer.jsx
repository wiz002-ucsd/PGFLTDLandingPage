const footerLinks = {
  Services: [
    'Ceiling Insulation',
    'Underfloor Insulation',
    'Wall Insulation',
    'Healthy Homes Assessments',
    'New Build Insulation',
    'Heat Pump Installation',
  ],
  Company: [
    { label: 'About Us', href: '#trust' },
    { label: 'Our Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-9 h-9 bg-[#F97316] rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12h6v10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display text-xl font-semibold tracking-tight">PGF Insulation</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-8">
              Auckland's trusted insulation experts. Over 10 years making New Zealand homes warmer, healthier, and more energy-efficient.
            </p>

            {/* Contact block */}
            <div className="space-y-3">
              <a
                href="tel:094416900"
                className="flex items-center gap-3 text-white/70 hover:text-[#F97316] transition-colors text-sm"
              >
                <svg className="w-4 h-4 shrink-0 text-[#F97316]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                (09) 441 6900
              </a>
              <a
                href="tel:+64218602580"
                className="flex items-center gap-3 text-white/70 hover:text-[#F97316] transition-colors text-sm"
              >
                <svg className="w-4 h-4 shrink-0 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                +64 21 860 258
              </a>
              <a
                href="mailto:sales@pgfltd.co.nz"
                className="flex items-center gap-3 text-white/70 hover:text-[#F97316] transition-colors text-sm"
              >
                <svg className="w-4 h-4 shrink-0 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                sales@pgfltd.co.nz
              </a>
              <div className="flex items-start gap-3 text-white/50 text-sm">
                <svg className="w-4 h-4 shrink-0 mt-0.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                14C Vega Place, Rosedale,<br />Auckland 0632, New Zealand
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {footerLinks.Services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + CTA */}
          <div>
            <h4 className="font-display font-semibold text-white mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="space-y-3">
              <a
                href="#contact"
                className="block w-full bg-[#F97316] hover:bg-[#EA6C0A] text-white text-center font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
              >
                Get Free Quote
              </a>
              <a
                href="tel:094416900"
                className="block w-full border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-center font-medium py-3 px-4 rounded-xl transition-all text-sm"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} PGF Limited. All rights reserved. |{' '}
            <span className="text-white/20">NZBN: PGF Limited</span>
          </p>
          <div className="flex items-center gap-1 text-white/20 text-xs">
            <span>Mon–Fri 8:30am–5:00pm</span>
            <span className="mx-2">·</span>
            <span>Auckland, NZ</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
