import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 3000);
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: 'Email',
            info: 'support@videoplatform.com',
            description: 'Send us an email anytime',
            gradient: 'from-blue-500 to-cyan-500'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: 'Phone',
            info: '+1 (555) 123-4567',
            description: 'Mon-Fri from 8am to 5pm',
            gradient: 'from-purple-500 to-pink-500'
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Office',
            info: '123 Video Street, Creator City',
            description: 'Come say hello',
            gradient: 'from-orange-500 to-red-500'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-purple-700">We're online</span>
                        </div>
                        
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                            Let's Start a Conversation
                        </h1>
                        
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                            We're here to help and answer any questions you might have. We look forward to hearing from you!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Methods - Floating Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contactMethods.map((method, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                            className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                            <p className="text-lg font-semibold text-gray-700 mb-2">{method.info}</p>
                            <p className="text-gray-500">{method.description}</p>
                            
                            {hoveredCard === index && (
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <button className="text-purple-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Get in touch
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Left Column - Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Let's talk about everything!
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Don't like forms? Send us an email. We're always happy to chat about your project, creative opportunities, or just to say hello.
                            </p>
                        </div>

                        {/* Feature List */}
                        <div className="space-y-4">
                            {[
                                { icon: '⚡', text: 'Fast response time' },
                                { icon: '🎯', text: 'Dedicated support team' },
                                { icon: '🔒', text: 'Your data is secure' },
                                { icon: '💬', text: '24/7 customer service' }
                            ].map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-3">
                                {['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                                    <button
                                        key={social}
                                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:from-purple-50 hover:to-pink-50 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                                        title={social}
                                    >
                                        <span className="font-bold text-sm">{social[0]}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
                            {!submitted ? (
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h3>
                                    <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>
                                    
                                    <div className="space-y-6">
                                        {/* Name Input */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                                            />
                                        </div>

                                        {/* Email and Phone in Grid */}
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
                                                    placeholder="john@example.com"
                                                    required
                                                    className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                                                />
                                            </div>
                                        </div>

                                        {/* Message Input */}
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Your Message *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us what you're thinking about..."
                                                required
                                                rows="6"
                                                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300 resize-none"
                                            ></textarea>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            onClick={handleSubmit}
                                            className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-2xl font-bold text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3"
                                        >
                                            <span>Send Message</span>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                        </button>

                                        <p className="text-sm text-gray-500 text-center">
                                            By submitting this form, you agree to our privacy policy.
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                                    <p className="text-lg text-gray-600 mb-6">
                                        Thanks for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold">
                                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
                                        <span>Redirecting...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    );
}