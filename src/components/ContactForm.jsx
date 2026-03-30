import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const serviceOptions = [
  'Ceiling Insulation',
  'Underfloor Insulation',
  'Wall Insulation',
  'Healthy Homes Assessment',
  'New Build Insulation',
  'Heat Pump Installation',
  'Bathroom Fan / Ventilation',
  'Not Sure — Need Advice',
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Full name is required'
  if (!form.email.trim()) errors.email = 'Email address is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email'
  if (!form.phone.trim()) errors.phone = 'Phone number is required'
  if (!form.service) errors.service = 'Please select a service'
  return errors
}

export default function ContactForm() {
  const ref = useScrollReveal()

  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', service: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    try {
      // TODO: Replace with your actual backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!response.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', address: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-[#1F2937] placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 ${
      errors[field]
        ? 'border-red-400 bg-red-50 focus:border-red-400'
        : 'border-gray-200 bg-white focus:border-[#F97316]'
    }`

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 bg-[#FAF8F5]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-[#6B8F6B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#6B8F6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-display text-3xl font-bold text-[#1F2937] mb-4">Message Sent!</h2>
          <p className="text-gray-500 text-lg mb-8">
            Thanks for getting in touch. Our team will be in contact within one business day to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setStatus('idle')}
              className="bg-[#F97316] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#EA6C0A] transition-colors"
            >
              Send Another Enquiry
            </button>
            <a
              href="tel:094416900"
              className="border border-gray-200 text-[#1F2937] font-semibold px-6 py-3 rounded-xl hover:border-gray-300 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Call (09) 441 6900
            </a>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5]">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div className="animate-on-scroll">
            <span className="text-[#F97316] text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1F2937] mt-3 mb-5 leading-tight">
              Get your free
              <br />
              <span className="text-[#F97316]">no-obligation</span> quote
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Fill in the form and we'll be in touch within one business day. Or call us directly during business hours.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-10">
              <a
                href="tel:094416900"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Office</div>
                  <div className="text-[#1F2937] font-semibold">(09) 441 6900</div>
                </div>
              </a>

              <a
                href="tel:+64218602580"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Mobile</div>
                  <div className="text-[#1F2937] font-semibold">+64 21 860 258</div>
                </div>
              </a>

              <a
                href="mailto:sales@pgfltd.co.nz"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-xl flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-[#1F2937] font-semibold">sales@pgfltd.co.nz</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1F2937]/5 rounded-xl flex items-center justify-center text-[#1F2937]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Address</div>
                  <div className="text-[#1F2937] font-semibold text-sm">14C Vega Place, Rosedale, Auckland 0632</div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h4 className="font-display font-semibold text-[#1F2937] mb-3">Business Hours</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monday – Friday</span>
                  <span className="font-medium text-[#1F2937]">8:30am – 5:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Saturday – Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="animate-on-scroll">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 lg:p-10">
              <h3 className="font-display text-2xl font-semibold text-[#1F2937] mb-1">Request a Free Quote</h3>
              <p className="text-gray-400 text-sm mb-8">We'll respond within one business day.</p>

              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm flex items-center gap-3">
                  <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Something went wrong. Please try again or call us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Service */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-[#F97316]">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="021 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                      Service Required <span className="text-[#F97316]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className={`${inputClass('service')} cursor-pointer`}
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? 'service-error' : undefined}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.service && <p id="service-error" className="text-red-500 text-xs mt-1.5">{errors.service}</p>}
                  </div>
                </div>

                {/* Address (optional) */}
                <div>
                  <label htmlFor="address" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Property Address <span className="text-gray-400 font-normal normal-case">(optional)</span>
                  </label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    autoComplete="street-address"
                    placeholder="123 Example Street, Auckland"
                    value={form.address}
                    onChange={handleChange}
                    className={inputClass('address')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your home, any specific concerns, or questions you have..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-[#1F2937] placeholder-gray-400 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#F97316]/40 focus:border-[#F97316] resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#F97316] hover:bg-[#EA6C0A] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#F97316]/20 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Free Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-gray-400 text-xs">
                  No spam. We'll only contact you about your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
