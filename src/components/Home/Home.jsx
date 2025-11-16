import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hook to detect window size
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth });
    useEffect(() => {
        const handleResize = () => setWindowSize({ width: window.innerWidth });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default function Home() {
    const size = useWindowSize();
    const isMobile = size.width < 1024;

    const [counter, setCounter] = useState({ clients: 0, years: 0, media: 0 });

    const mediaPartners = [
        "Times of India", "Hindustan Times", "Zee TV", "Radio City", "PVR Cinemas", "Delhi Metro"
    ];

    // Counter animation
    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = { clients: 500, years: 14, media: 50 };
        let current = { clients: 0, years: 0, media: 0 };

        const timer = setInterval(() => {
            current.clients = Math.min(current.clients + Math.ceil(targets.clients / steps), targets.clients);
            current.years = Math.min(current.years + Math.ceil(targets.years / steps), targets.years);
            current.media = Math.min(current.media + Math.ceil(targets.media / steps), targets.media);
            setCounter({ ...current });
            if (current.clients >= targets.clients) clearInterval(timer);
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero & Overview */}
            <div className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>

                <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="animate-fadeInLeft">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 mb-6 text-sm font-bold shadow-sm">
                                <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                                Trusted Media Barter Partner 
                            </div>

                            <h1 className="text-5xl md:text-6xl font-black text-sky-900 leading-tight mb-6">
                                Convert Unsold Inventory into 
                                <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                    Media Advantage
                                </span>
                            </h1>

                            {/* Company Overview (always shown) */}
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                An Advertising company which helps Brands in optimizing their existing products/services and use it to buy Media solutions (ATL/BTL) on Barter. We specialize in providing Media solutions across India in the form of cash/barter. Our goal is to provide an innovative tool to companies where they use their existing excess inventory/services rather than selling at a discounted rates in market to optimally using it to increase the reach of the product through Advertisement on Barter basis.
                            </p>

                            {/* Hero buttons */}
                            <div className="flex flex-wrap gap-4 mb-10">
                                <Link 
                                    to="/contact" 
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    <span>Get Free Consultation</span>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                                <Link 
                                    to="/services" 
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-sky-300 text-sky-800 font-bold hover:bg-sky-50 transition-all duration-300"
                                >
                                    <span>View Services</span>
                                </Link>
                            </div>

                            {/* Mobile-only sections */}
                            {isMobile && (
                                <>
                                    {/* Our Valued Clients (from About) */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Valued Clients</h2>
                                        <div className="flex flex-wrap gap-4">
                                            {["Client A", "Client B", "Client C", "Client D"].map(c => (
                                                <div key={c} className="bg-gray-100 px-4 py-2 rounded-lg">{c}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Goal & Expertise paragraph */}
                                    <p className="text-gray-700 mb-8">
                                        Our Goal & Expertise 🎯 <br />
                                        Our goal is to provide an innovative tool allowing companies to utilize their <strong>existing excess inventory/services</strong> for advertising, rather than selling at discounted market rates. This optimally increases the reach of the product through advertisement on a <strong>Barter basis</strong>. We have <strong>over 14 years of experience</strong> in the barter industry, ensuring expertise you can trust.
                                    </p>
                                </>
                            )}

                            {/* Key Stats */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: "Experience", value: `${counter.years}+ yrs`, icon: "⭐" },
                                    { label: "Pan-India", value: "Presence", icon: "🗺️" },
                                    { label: "Happy Clients", value: `${counter.clients}+`, icon: "🤝" },
                                    { label: "Facilitation", value: "10% fee", icon: "💰" }
                                ].map((s, idx) => (
                                    <div 
                                        key={s.label} 
                                        className="bg-white p-4 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1"
                                        style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
                                    >
                                        <div className="text-2xl mb-1">{s.icon}</div>
                                        <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                                        <div className="font-black text-sky-800 text-lg">{s.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Media Types Grid */}
                        <div className="animate-fadeInRight flex items-center justify-center py-10 lg:py-0">
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { title: "Print Media", list: "Newspaper • Magazines • Journals", icon: "📰", gradient: "from-gray-500 to-slate-600" },
                                    { title: "Broadcast", list: "TV • Radio • Digital", icon: "📡", gradient: "from-sky-500 to-cyan-500" },
                                    { title: "OOH & Transit", list: "Metro • Airport • Hoardings", icon: "🚇", gradient: "from-orange-500 to-amber-500" },
                                    { title: "Cinema", list: "PVR • INOX • Cinepolis", icon: "🎬", gradient: "from-purple-500 to-pink-500" }
                                ].map((type, idx) => (
                                    <div 
                                        key={type.title}
                                        className="bg-white rounded-2xl p-5 shadow-md border border-sky-100 hover:shadow-xl hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1"
                                        style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + idx * 0.1}s both` }}
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center text-2xl mb-3 shadow-md`}>
                                            {type.icon}
                                        </div>
                                        <div className="text-xs text-gray-500 mb-1">{type.title}</div>
                                        <div className="font-bold text-sky-800 text-sm leading-tight">{type.list}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop-only sections */}
            {!isMobile && (
                <>
                    {/* Why Choose Media Barter */}
                    <div className="py-20 bg-white">
                        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                    Why Choose Media Barter?
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Transform your excess inventory into strategic media advantage
                                </p>
                                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[
                                    { icon: "💰", title: "Preserve Cash Flow", desc: "No upfront cash required for media buying", color: "sky" },
                                    { icon: "📈", title: "Maximize ROI", desc: "Get better value than traditional discounting", color: "cyan" },
                                    { icon: "🎯", title: "Strategic Reach", desc: "Access premium media placements nationwide", color: "orange" },
                                    { icon: "⚡", title: "Quick Execution", desc: "Fast turnaround with transparent process", color: "purple" }
                                ].map((benefit, idx) => (
                                    <div 
                                        key={benefit.title}
                                        className={`group bg-gradient-to-br from-${benefit.color}-50 to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-${benefit.color}-100`}
                                        style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}
                                    >
                                        <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                            {benefit.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Media Partners */}
                    <div className="py-16 bg-white">
                        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Media Partners</h3>
                                <p className="text-gray-600">Working with India's leading media outlets</p>
                            </div>
                            <div className="flex flex-wrap justify-center items-center gap-8">
                                {mediaPartners.map((partner, idx) => (
                                    <div 
                                        key={partner}
                                        className="px-6 py-3 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border border-sky-200 font-semibold text-sky-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                                        style={{ animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both` }}
                                    >
                                        {partner}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Styles */}
            <style>{`
                @keyframes fadeInLeft { from {opacity:0; transform:translateX(-30px);} to {opacity:1; transform:translateX(0);} }
                @keyframes fadeInRight { from {opacity:0; transform:translateX(30px);} to {opacity:1; transform:translateX(0);} }
                @keyframes fadeInUp { from {opacity:0; transform:translateY(30px);} to {opacity:1; transform:translateY(0);} }
                @keyframes fadeIn { from {opacity:0;} to {opacity:1;} }

                .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
            `}</style>
        </div>
    );
}
