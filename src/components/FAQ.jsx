import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'What are the 2023 NZ Healthy Homes insulation standards?',
    a: "From 1 July 2021 (private rentals) and 1 July 2024 (all rentals), all rental homes must meet the Healthy Homes Standards. For insulation, this means ceiling insulation of R-value 2.9 to 6.6 (depending on climate zone) and underfloor insulation of R-value 1.3, where accessible. Our team ensures full compliance and provides the necessary documentation.",
  },
  {
    q: 'How much does insulation cost?',
    a: "Costs vary based on home size, type of insulation, and current state. Ceiling insulation for an average home typically ranges from $1,500–$3,500. Underfloor insulation is often $1,200–$2,800. We always provide a detailed, no-obligation quote before any work begins — so there are no surprises.",
  },
  {
    q: 'How long does installation take?',
    a: "Most residential jobs are completed in a single day. A full ceiling and underfloor insulation install for a 3-bedroom home typically takes 4–6 hours. Our team minimises disruption and leaves your home clean and tidy.",
  },
  {
    q: 'How much can I save on energy bills?',
    a: "Properly insulated homes can reduce heating and cooling costs by 20–40%. The exact saving depends on your current insulation (or lack of it), home size, and heating habits. Many customers report saving $50–$150 per month on their power bills.",
  },
  {
    q: 'Do you work with rental properties and landlords?',
    a: "Absolutely. We specialise in Healthy Homes compliance for landlords and property managers. We can assess multiple properties efficiently and provide all the documentation you need to demonstrate compliance to your tenants and council.",
  },
  {
    q: 'What insulation brands do you use?',
    a: "We install products from New Zealand's leading manufacturers including PinkBatts, Earthwool Glasswool, Greenstuf, Mammoth, and Eliment. We'll recommend the best product for your specific situation during your free consultation.",
  },
  {
    q: 'Do you offer any warranties?',
    a: "Yes. Most insulation products come with manufacturer warranties of 25–50 years. We also stand behind our workmanship. Heat pump installations include a 5-year warranty, and ventilation systems a 1-year warranty on parts and labour.",
  },
  {
    q: 'Can you insulate older NZ homes (pre-1978)?',
    a: "Yes, we specialise in retrofit insulation for older New Zealand homes. We have extensive experience working with villas, bungalows, and other older property types that present unique access challenges.",
  },
]

export default function FAQ() {
  const ref = useScrollReveal()
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div ref={ref} className="max-w-4xl mx-auto px-6">
        <div className="animate-on-scroll text-center mb-16">
          <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-4">
            Common questions
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about insulation and our services.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="animate-on-scroll border rounded-2xl"
              style={{
                borderColor: open === i ? 'rgba(249,115,22,0.3)' : 'rgb(243,244,246)',
                boxShadow: open === i ? '0 1px 2px 0 rgb(0 0 0/0.05)' : 'none',
                transition: 'border-color 200ms, box-shadow 200ms',
              }}
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-gray-50 transition-colors duration-200 rounded-2xl"
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-[#1F2937] text-base leading-snug">{faq.q}</span>
                <div
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    open === i ? 'bg-[#F97316] text-white rotate-45' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div
                style={{
                  display: 'grid',
                  gridTemplateRows: open === i ? '1fr' : '0fr',
                  transition: 'grid-template-rows 300ms ease-in-out',
                }}
              >
                <div className="overflow-hidden">
                  <div className="px-7 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:094416900"
              className="inline-flex items-center gap-2 bg-[#1F2937] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#111827] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call (09) 441 6900
            </a>
            <a
              href="mailto:sales@pgfltd.co.nz"
              className="inline-flex items-center gap-2 border border-gray-200 text-[#1F2937] font-semibold px-6 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
