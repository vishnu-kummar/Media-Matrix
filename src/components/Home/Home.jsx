import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact.jsx"; // Proper import

export default function Home() {
    // State for counters
    const [counter, setCounter] = useState({ clients: 0, years: 0, media: 0 });

    const mediaPartners = [
        "Times of India", "Hindustan Times", "Zee TV", "Radio City", "PVR Cinemas", "Delhi Metro"
    ];

    const productClients = [
        { name: "Hindustan Unilever", path: "/images/HUL-Logo.png" },
        { name: "United Colors of Benetton", path: "/images/UCB-Logo.png" },
        { name: "ITC Limited", path: "/images/ITC-logo.png" },
        { name: "Dabur", path: "/images/Dabur-logo.png" },
        { name: "Marico", path: "/images/Marico-Logo.png" },
        { name: "Cadbury", path: "/images/Cadbury-Logo.jpg" },
        { name: "Godrej", path: "/images/Godrej-Logo.jpg" },
        { name: "Hindware", path: "/images/Hindware-Logo.png" },
        { name: "Sunflame", path: "/images/Sunflame-logo.png" },
        { name: "Somany", path: "/images/somany-logo.png" },
        { name: "Borges", path: "/images/borges-logo.png" },
        { name: "Cera", path: "/images/cera-logo.jpg" },
        { name: "Zebronics", path: "/images/Zebronics-Logo.png" },
        { name: "Evok", path: "/images/Evok-logo.jpg" },
        { name: "Kaff", path: "/images/kaff-logo.png" },
        { name: "Zebronics", path: "/images/electrolux-logo.jpg" },
    ];

    const serviceClients = [
        { name: "McDonald's", path: "/images/McDonald's-Logo.png" },
        { name: "Radisson", path: "/images/Radisson-Logo.jpg" },
        { name: "KFC", path: "/images/KFC-logo.png" },
        { name: "Barbeque Nation", path: "/images/Barbeque-Nation-Logo.png" },
        { name: "PVR 4700 BC", path: "/images/PVR-Logo.png" },
        { name: "Kingdom of Dreams", path: "/images/KOD-Logo.jpg" },
        { name: "affinity", path: "/images/affinity-logo.png" },
        { name: "chaayos", path: "/images/chaayos-logo.png" },
        { name: "country", path: "/images/Country-logo.png" },
        { name: "cutStyle", path: "/images/cut-style-logo.jpg" },
        { name: "service", path: "/images/service-logo.png" },
        { name: "Worlds of wonder", path: "/images/worlds-of-wonder-logo.jpg" },
        { name: "tattva", path: "/images/tattva-logo.jpg" },
        { name: "Building", path: "/images/building-logo.png" },
    ];

    // Placeholder data for combinedCategories (to fix mobile service section error)
    const combinedCategories = [
        { t: "Print Media", items: "Newspaper, Magazines, Journals", imagePath: "/images/print.jpg", alt: "Print Media", gradient: "from-gray-500 to-slate-600" },
        { t: "Broadcast", items: "TV, Radio, Digital", imagePath: "/images/broadcast.jpg", alt: "Broadcast Media", gradient: "from-sky-500 to-cyan-500" },
        { t: "OOH & Transit", items: "Metro, Airport, Hoardings", imagePath: "/images/ooh.jpg", alt: "Out of Home Media", gradient: "from-orange-500 to-amber-500" },
        { t: "Cinema", items: "PVR, INOX, Cinepolis", imagePath: "/images/cinema.jpg", alt: "Cinema Advertising", gradient: "from-purple-500 to-pink-500" },
    ];
    // Animated counter effect
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

    // Custom hook to detect mobile vs desktop
    const useWindowSize = () => {
        const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

        useEffect(() => {
            const handleResize = () => setIsMobile(window.innerWidth < 1024);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return isMobile;
    };

    const isMobile = useWindowSize();

    // Define the full Hero section content as a function/component to avoid duplication
    const HeroContent = (
        <div className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left/Company Overview */}
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
                        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                            An Advertising company which helps Brands in optimizing their existing products/services and use it to buy Media solutions (ATL/BTL) on Barter. We specialize in providing Media solutions across India in the form of cash/barter. Our goal is to provide an innovative tool to companies where they use their existing excess inventory/services rather than selling at a discounted rates in market to optimally using it to increase the reach of the product through Advertisement on Barter basis.
                        </p>
                        <div className="flex flex-wrap gap-4 mb-10">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                                Get Free Consultation
                            </Link>
                            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-sky-300 text-sky-800 font-bold hover:bg-sky-50 transition-all duration-300">
                                View Services
                            </Link>
                        </div>
                        
                        {/* Key Stats (Keep for Mobile Reorder) */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[{ label: "Experience", value: `${counter.years}+ yrs`, icon: "⭐" },
                                { label: "Pan-India", value: "Presence", icon: "🗺️" },
                                { label: "Happy Clients", value: `${counter.clients}+`, icon: "🤝" },
                                { label: "Facilitation", value: "10% fee", icon: "💰" }]
                                .map((s, idx) => (
                                    <div key={s.label} className="bg-white p-4 rounded-xl shadow-md border border-sky-100 hover:shadow-lg hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1" style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                                        <div className="text-2xl mb-1">{s.icon}</div>
                                        <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                                        <div className="font-black text-sky-800 text-lg">{s.value}</div>
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Right content grid (Media Channels) (Keep for Mobile Reorder) */}
                    <div className="animate-fadeInRight flex items-center justify-center py-10 lg:py-0">
                        <div className="grid grid-cols-2 gap-4">
                            {[{ title: "Print Media", list: "Newspaper • Magazines • Journals", icon: "📰", gradient: "from-gray-500 to-slate-600" },
                                { title: "Broadcast", list: "TV • Radio • Digital", icon: "📡", gradient: "from-sky-500 to-cyan-500" },
                                { title: "OOH & Transit", list: "Metro • Airport • Hoardings", icon: "🚇", gradient: "from-orange-500 to-amber-500" },
                                { title: "Cinema", list: "PVR • INOX • Cinepolis", icon: "🎬", gradient: "from-purple-500 to-pink-500" }]
                                .map((type, idx) => (
                                    <div key={type.title} className="bg-white rounded-2xl p-5 shadow-md border border-sky-100 hover:shadow-xl hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1" style={{ animation: `fadeInUp 0.6s ease-out ${0.8 + idx * 0.1}s both` }}>
                                        <div className={`w-12 h-12 bg-gradient-to-br ${type.gradient} rounded-xl flex items-center justify-center text-2xl mb-3 shadow-md`}>{type.icon}</div>
                                        <div className="text-xs text-gray-500 mb-1">{type.title}</div>
                                        <div className="font-bold text-sky-800 text-sm leading-tight">{type.list}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


    return (
        <div className="bg-white min-h-screen">

            {/* Desktop Hero Section: Renders the full HeroContent as defined above */}
            {!isMobile && (
                <>
                    {HeroContent}
                    {/* Why Choose Media Barter - desktop only */}
                    <div className="py-20 bg-white">
                        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Why Choose Media Barter?</h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transform your excess inventory into strategic media advantage</p>
                                <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-500 mx-auto mt-6 rounded-full"></div>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {[{ icon: "💰", title: "Preserve Cash Flow", desc: "No upfront cash required for media buying", color: "sky" },
                                    { icon: "📈", title: "Maximize ROI", desc: "Get better value than traditional discounting", color: "cyan" },
                                    { icon: "🎯", title: "Strategic Reach", desc: "Access premium media placements nationwide", color: "orange" },
                                    { icon: "⚡", title: "Quick Execution", desc: "Fast turnaround with transparent process", color: "purple" }]
                                    .map((benefit, idx) => (
                                        <div key={benefit.title} className={`group bg-gradient-to-br from-${benefit.color}-50 to-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-${benefit.color}-100`} style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                                            <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{benefit.icon}</div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Mobile-only Sections */}
            {isMobile && (
                <>
                    {/* 1. Mobile Hero Content: (Company Overview, Key Stats, Media Channels - Reordered from HeroContent) */}
                    <div className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 overflow-hidden pt-12 pb-10">
                        <div className="max-w-screen-xl mx-auto px-4 relative z-10">
                            
                            {/* Company Overview (Top part of Hero) */}
                            <div className="animate-fadeInLeft">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 mb-6 text-sm font-bold shadow-sm">
                                    <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></span>
                                    Trusted Media Barter Partner 
                                </div>
                                <h1 className="text-4xl font-black text-sky-900 leading-tight mb-4">
                                    Convert Unsold Inventory into 
                                    <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                        Media Advantage
                                    </span>
                                </h1>
                                <p className="text-base text-gray-700 mb-6 leading-relaxed">
                                    An Advertising company which helps Brands in optimizing their existing products/services and use it to buy Media solutions (ATL/BTL) on Barter. We specialize in providing Media solutions across India in the form of cash/barter. Our goal is to provide an innovative tool to companies where they use their existing excess inventory/services rather than selling at a discounted rates in market to optimally using it to increase the reach of the product through Advertisement on Barter basis.
                                </p>
                                <div className="flex flex-wrap gap-3 mb-8 justify-center">
                                    <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold shadow-lg">
                                        Get Free Consultation
                                    </Link>
                                    <Link to="/services" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-sky-300 text-sky-800 text-sm font-bold">
                                        View Services
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Key Stats Section */}
                    <div className="py-8 bg-white border-t border-b border-gray-100">
                        <div className="max-w-screen-xl mx-auto px-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Our Impact</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[{ label: "Experience", value: `${counter.years}+ yrs`, icon: "⭐" },
                                    { label: "Pan-India", value: "Presence", icon: "🗺️" },
                                    { label: "Happy Clients", value: `${counter.clients}+`, icon: "🤝" },
                                    { label: "Facilitation", value: "10% fee", icon: "💰" }]
                                    .map((s, idx) => (
                                        <div key={s.label} className="bg-white p-4 rounded-xl shadow-md border border-sky-100" style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                                            <div className="text-2xl mb-1">{s.icon}</div>
                                            <div className="text-xs text-gray-500 mb-1">{s.label}</div>
                                            <div className="font-black text-sky-800 text-lg">{s.value}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* 3. Media Channels (from Hero Right Grid) */}
                    <div className="py-8 bg-gray-50 border-b border-gray-100">
                        <div className="max-w-screen-xl mx-auto px-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Media Coverage</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {[{ title: "Print Media", list: "Newspaper • Magazines • Journals", icon: "📰", gradient: "from-gray-500 to-slate-600" },
                                    { title: "Broadcast", list: "TV • Radio • Digital", icon: "📡", gradient: "from-sky-500 to-cyan-500" },
                                    { title: "OOH & Transit", list: "Metro • Airport • Hoardings", icon: "🚇", gradient: "from-orange-500 to-amber-500" },
                                    { title: "Cinema", list: "PVR • INOX • Cinepolis", icon: "🎬", gradient: "from-purple-500 to-pink-500" }]
                                    .map((type, idx) => (
                                        <div key={type.title} className="bg-white rounded-xl p-4 shadow-sm border border-sky-100" style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                                            <div className={`w-10 h-10 bg-gradient-to-br ${type.gradient} rounded-lg flex items-center justify-center text-xl mb-2 shadow-sm`}>{type.icon}</div>
                                            <div className="text-xs text-gray-500 mb-1">{type.title}</div>
                                            <div className="font-bold text-sky-800 text-sm leading-tight">{type.list}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>

                    {/* 4. Our Valued Clients (Logos) */}
                    <div className="py-12 bg-white border-b border-gray-100">
                        <div className="max-w-screen-xl mx-auto px-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Valued Clients</h3>
                            <div className="grid grid-cols-3 gap-4 justify-items-center">
                                {productClients.concat(serviceClients).map((c, idx) => (
                                    <img key={idx} src={c.path} alt={c.name} className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 5. Services Section (Detailed Content) */}
                    <div className="py-12 bg-white">
                        <div className="max-w-screen-xl mx-auto px-4">
                            {/* Banner / Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Services 🛠️</h3>
                            <p className="text-gray-700 text-base text-center mb-8">
                                <strong>What We Do:</strong> Your Partner for Cash and Barter Media Solutions. Media Matrix helps brands optimize their excess products/services and use them to buy media solutions (ATL/BTL) on a barter basis. We specialize in providing solutions across India in the form of cash/barter.
                            </p>

                            {/* Benefits */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {[
                                    { icon: "💵", title: "Save Cash Flow", desc: "Preserve working capital" },
                                    { icon: "📈", title: "Increase ROI", desc: "Better value exchange" },
                                    { icon: "🎯", title: "Targeted Reach", desc: "Precise audience targeting" },
                                    { icon: "⚡", title: "Quick Execution", desc: "Fast turnaround times" }
                                ].map((b, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-4 shadow-sm text-center border border-gray-100">
                                        <div className="text-2xl mb-1">{b.icon}</div>
                                        <h4 className="font-bold text-gray-900 text-base mb-1">{b.title}</h4>
                                        <p className="text-gray-600 text-xs">{b.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Media Channels Detail */}
                            <div className="text-center mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Media Channels We Cover 📡</h3>
                                <p className="text-gray-600 max-w-3xl mx-auto text-sm">
                                    We offer a full spectrum of media options (ATL/BTL) across India to ensure maximum reach for our clients' products and services.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                {/* Now using the defined combinedCategories */}
                                {combinedCategories.map((c, index) => (
                                    <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={c.imagePath}
                                                alt={c.alt}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-50`}></div>
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-lg font-black text-gray-900 mb-1 text-center">
                                                {c.t}
                                            </h4>
                                            <p className="text-gray-600 text-sm text-center">{c.items}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 6. Full Contact section */}
                    <div className="py-12 bg-sky-50">
                        <div className="max-w-screen-xl mx-auto px-4">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get In Touch 📞</h3>
                            <Contact /> 
                        </div>
                    </div>
                </>
            )}

            {/* Media Partners Section (Stays outside conditional rendering, applies to both) */}
            <div className="py-16 bg-white">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Media Partners</h3>
                        <p className="text-gray-600">Working with India's leading media outlets</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {mediaPartners.map((partner, idx) => (
                            <div key={partner} className="px-6 py-3 bg-gradient-to-r from-sky-50 to-cyan-50 rounded-xl border border-sky-200 font-semibold text-sky-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105" style={{ animation: `fadeIn 0.6s ease-out ${idx * 0.1}s both` }}>
                                {partner}
                            </div>
                        ))}
                    </div>
                </div>
            </div>


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