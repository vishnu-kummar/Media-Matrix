import React, { useState,useEffect } from "react";

export default function Services() {
    const [activeWorkflow, setActiveWorkflow] = useState(null);
    const [hoveredService, setHoveredService] = useState(null);

    useEffect(() => {
            document.title = "Service | Media Matrix";
        }, []);

    const services = [
        {
            title: "Media Barter Solutions",
            desc: "Convert existing excess inventory or services into effective media buys across ATL/BTL categories. We match your inventory to media demand and facilitate the exchange on a Barter basis.",
            icon: "🔄",
            color: "sky"
        },
        {
            title: "Media Buying (Cash & Barter)",
            desc: "Full-service media buying across Print, TV, Radio, Digital, OOH, and Cinema on both cash and barter terms.",
            icon: "💰",
            color: "blue"
        },
        {
            title: "Sampling & Gifting",
            desc: "Product sampling programs, corporate and employee voucher solutions to increase trial, loyalty, and engagement.",
            icon: "🎁",
            color: "purple"
        },
        {
            title: "Innovative & Custom Media Options",
            desc: "Creative and unique media solutions, including bespoke activations like Airport Branding, Transit Media (Delhi Metro), and premium newspaper positions.",
            icon: "✨",
            color: "orange"
        }
    ];

    const combinedCategories = [
        { 
            t: "Newspaper Media", 
            items: "Premium Positions: Front Page, 3rd Page, 5th Page, Backpage, Sky Bus, Jackets, and normal RHS Ads. Key Publications: HT, TOI, Dainik Jagran, Dainik Bhaskar, Rajasthan Patrika, Hindustan Hindi, Nav Bharat Times.",
            imagePath: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=1600",
            alt: "Newspaper Media",
            gradient: "from-gray-500 to-slate-600",
            stats: { reach: "100M+", outlets: "50+" }
        },
        { 
            t: "Broadcast & Digital Media", 
            items: "Broadcast (TV & Radio): Television (GEC, News, Music, Movie, and Infotainment); Radio (Spots and Mentions on major stations like Radio City, Red FM, and Big FM etc.). Digital Media: Platforms including Zee5, Jio Hot Star, MX Player, Spotify Etc..",
            imagePath: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=1600",
            alt: "Broadcast and Digital Media",
            gradient: "from-sky-500 to-cyan-500",
            stats: { reach: "500M+", platforms: "20+" }
        },
        { 
            t: "OOH & Cinema Advertising", 
            items: "Out-of-Home (OOH): Airport Branding, Transit Media (Delhi Metro), Hoardings, Mall & Office Media across India. Cinema Advertising: Onscreen and Offscreen options at PVR, INOX, Cinepolis, Carnival, UFO, and single screens.",
            imagePath: "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1600",
            alt: "OOH and Cinema Advertising",
            gradient: "from-orange-500 to-amber-500",
            stats: { screens: "5000+", cities: "100+" }
        }
    ];

    const barterWorkflow = [
        {
            step: 1,
            title: "Understand Barter Basics",
            icon: "💡",
            desc: "Explaining how Media Barter works and how it is beneficial rather than traditional Media buying.",
            details: "We help you understand the value exchange process and potential savings."
        },
        {
            step: 2,
            title: "Finetune Requirements",
            icon: "📝",
            desc: "Specify clients' products/services designated for liquidation, coupled with the identification of appropriate media options for their disposition.",
            details: "Custom analysis of your inventory and media needs."
        },
        {
            step: 3,
            title: "Contract Agreement",
            icon: "✍️",
            desc: "Clients sign a transparent contract with Media Matrix, setting clear terms for the exchange.",
            details: "Legally binding agreements protecting all parties."
        },
        {
            step: 4,
            title: "Network Transactions",
            icon: "🤝",
            desc: "Clients buy and sell media/products/services within our managed network on Barter basis.",
            details: "Seamless exchanges through our trusted network."
        },
        {
            step: 5,
            title: "Accounting & Fees",
            icon: "💰",
            desc: "Media Matrix manages all accounting. A clear 10% facilitation charge applies to all purchases.",
            details: "Transparent fee structure with detailed reporting."
        }
    ];

    const benefits = [
        { icon: "💵", title: "Save Cash Flow", desc: "Preserve working capital" },
        { icon: "📈", title: "Increase ROI", desc: "Better value exchange" },
        { icon: "🎯", title: "Targeted Reach", desc: "Precise audience targeting" },
        { icon: "⚡", title: "Quick Execution", desc: "Fast turnaround times" }
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            {/* Hero Banner with Modern Overlay */}
            <div className="relative w-full h-96 bg-cover bg-center overflow-hidden" 
                style={{ 
                    backgroundImage: "url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1600')",
                    minHeight: '400px' 
                }}>
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>

                <div className="relative h-full flex items-center max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl animate-fadeIn">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 backdrop-blur-md border border-sky-300/30 rounded-full mb-6">
                            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                            <span className="text-sm font-semibold text-white">Media Solutions Provider</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                            Our Specialized Services
                        </h1>
                        <p className="text-xl text-gray-200 mb-6">
                            Transform excess inventory into powerful media campaigns
                        </p>
                       
                    </div>
                </div>
            </div>

            {/* Introduction Section */}
            <div className="bg-gradient-to-b from-sky-50 to-white">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-20">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-200/50 text-sky-800 font-medium tracking-wide mb-6 shadow-md">
                            <span className="text-xl">🛠️</span> What We Do
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            Your Partner for Cash and Barter Media Solutions
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                            Media Matrix helps Brands optimize their excess products/services and use them to buy Media solutions (ATL/BTL) on a Barter basis. We specialize in providing solutions across India in the form of cash/barter.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {benefits.map((benefit, index) => (
                                <div 
                                    key={index}
                                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                                >
                                    <div className="text-4xl mb-3">{benefit.icon}</div>
                                    <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Service Cards */}
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-black text-gray-900 mb-4">Core Service Verticals</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((s, index) => (
                        <div 
                            key={s.title}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                            className="group relative bg-white rounded-2xl p-8 shadow-lg border-2 border-sky-100 hover:border-sky-400 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                            style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
                        >
                            <div className={`w-16 h-16 bg-gradient-to-br from-sky-400 to-${s.color}-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                                {s.icon}
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors duration-300">
                                {s.title}
                            </h4>
                            <p className="text-gray-600 leading-relaxed">{s.desc}</p>

                            {hoveredService === index && (
                                <div className="mt-4 flex items-center text-sky-600 font-semibold animate-slideIn">
                                    <span className="mr-2">Explore</span>
                                    <svg className="w-5 h-5 animate-bounce-right" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

     
            {/* Media Channels */}
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h3 className="text-4xl font-black text-gray-900 mb-4">Media Channels We Cover 📡</h3>
                    <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                        We offer a full spectrum of media options (ATL/BTL) across India to ensure maximum reach for our clients' products and services.
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="grid lg:grid-cols-3 gap-8">
                    {combinedCategories.map((c, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                            style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both` }}
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={c.imagePath}
                                    alt={c.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-50 group-hover:opacity-60 transition-opacity duration-300`}></div>
                                
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg">
                                    <div className="text-xs font-bold text-gray-600">
                                        {Object.entries(c.stats).map(([key, value], i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <span className="text-sky-600">{value}</span>
                                                <span className="text-gray-400">{key}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <h4 className="text-2xl font-black text-gray-900 mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-sky-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                                    {c.t}
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-center">
                                    {c.items}
                                </p>
                            </div>

                            <div className={`h-1 bg-gradient-to-r ${c.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h3 className="text-4xl font-black text-white mb-4">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="text-xl text-sky-100 mb-8">
                        Let's discuss how barter solutions can maximize your ROI
                    </p>
                    <a 
                        href="/contact" 
                        className="inline-block px-10 py-4 bg-white hover:bg-gray-50 text-sky-600 font-bold text-lg rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                    >
                        Request a Barter Consultation →
                    </a>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

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

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes bounce-right {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(5px);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }

                .animate-slideIn {
                    animation: slideIn 0.3s ease-out;
                }

                .animate-bounce-right {
                    animation: bounce-right 1s infinite;
                }
            `}</style>
        </div>
    );
}