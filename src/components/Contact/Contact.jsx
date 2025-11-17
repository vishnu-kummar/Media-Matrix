import React, { useEffect } from 'react';
import { useForm } from '@formspree/react';

export default function Contact() {
  // 1. FORMSPREE INTEGRATION: Replace with your actual Form ID
  const [state, handleSubmit] = useForm("mldazqje"); 
  const submitted = state.succeeded;

  // Local state for controlled inputs (kept for good practice, though Formspree relies on 'name' attributes)
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inventoryType: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact | Media Matrix";
  }, []);

  const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inventoryTypes = [
    "Electronics & Gadgets",
    "FMCG Products",
    "Hospitality Services",
    "Fashion & Apparel",
    "Automotive",
    "Healthcare Products",
    "Other"
  ];

  const quickLinks = [
    // 📞 IMPORTANT: Replace the number below with your actual contact number
    { icon: "📞", title: "Quick Call", desc: "Schedule a consultation", action: "Book Call", link: "tel:++91-9070106050" }, 
    { icon: "📧", title: "Email Us", desc: "info@mediamatrix.in", action: "Send Email", link: "mailto:info@mediamatrix.in" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 rounded-full mb-6 text-sm font-bold shadow-sm">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
              We're Here to Help
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-sky-800 to-cyan-700 bg-clip-text text-transparent">
                Let's Transform Your Inventory
              </span>
              <br />
              <span className="text-orange-500">Into Media Success</span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Connect with India's leading media barter experts. We'll help you convert excess inventory into valuable media placements.
            </p>

            {/* Quick Contact Stats */}
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {[
                { value: "< 24hrs", label: "Response Time" },
                { value: "14+ Years", label: "Experience" },
                { value: "500+", label: "Happy Clients" },
                { value: "Pan-India", label: "Coverage" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-black bg-gradient-to-r from-sky-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Cards (Centered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-16 relative z-10">
        <div className="max-w-lg mx-auto"> 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link, idx) => (
              <a 
                key={idx}
                href={link.link} 
                className="bg-white rounded-2xl p-6 shadow-xl border border-sky-100 hover:shadow-2xl hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl mb-3">{link.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-1">{link.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{link.desc}</p>
                </div>
                <div className="text-sky-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                  {link.action}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* 👈 LEFT COLUMN - RETAINED CONTENT */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-4xl font-black text-sky-800 mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We specialize in converting excess inventory into strategic media placements. Let's discuss how barter can maximize your brand's reach.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {[
                { icon: '⚡', title: 'Quick Response', desc: 'Get answers within 24 hours' },
                { icon: '🎯', title: 'Expert Consultation', desc: 'Free barter strategy session' },
                { icon: '🔒', title: 'Confidential', desc: 'Your data is 100% secure' },
                { icon: '💼', title: 'Dedicated Manager', desc: 'Personal account manager' }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-100 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to Expect */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span>
                What Happens Next?
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">1.</span>
                  <span>We review your inquiry within 24 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">2.</span>
                  <span>Schedule a free consultation call</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">3.</span>
                  <span>Get a customized barter proposal</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-500">4.</span>
                  <span>Start your media campaign journey</span>
                </li>
              </ol>
            </div>
          </div>
          {/* END LEFT COLUMN */}

          {/* RIGHT COLUMN - Contact Form (Formspree Integrated) */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-sky-100">
              {!submitted ? (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-sky-800">Get Your Free Consultation</h3>
                      <p className="text-gray-600 text-sm">Fill out the form and we'll contact you shortly</p>
                    </div>
                  </div>

                  {/* FORM TAG uses Formspree's handleSubmit */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name"
                        required 
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter e-mail"
                          required
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phoneNumber"
                          required
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Company and Inventory Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          // Not required
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Inventory Type *
                        </label>
                        <select
                          name="inventoryType"
                          value={formData.inventoryType}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300"
                        >
                          <option value="">Select Type</option>
                          {inventoryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Tell Us About Your Requirements *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your inventory and media requirements..."
                        required
                        rows="5"
                        className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-4 focus:ring-sky-100 transition-all duration-300 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full py-5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                    >
                      <span>{state.submitting ? 'Sending...' : 'Submit Inquiry'}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                    {state.errors && <p className="text-red-500 text-center mt-3 text-sm">Submission failed. Please check your inputs.</p>}
                    
                    <p className="text-xs text-gray-500 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                </div>
              ) : (
                // SUCCESS MESSAGE
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
                  <p className="text-lg text-gray-700 mb-2">
                    Your inquiry has been received successfully.
                  </p>
                  <p className="text-gray-600">
                    Our team will contact you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
          {/* END RIGHT COLUMN */}

        </div>
      </div>
    </div>
  );
}