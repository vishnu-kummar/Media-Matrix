import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { useEffect } from "react";

export default function About() {

useEffect(() => {
        document.title = "About | Media Matrix";
    }, []);

    // Define the paths for the full list of client logos
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
        { name: "Kaff", path: "/images/kaff-logo.jpg" },
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

    const attractiveFont = "font-sans"; 

    return (
        <div className={`min-h-screen bg-white ${attractiveFont}`}>
            
            {/* START: REPLICATED HERO BANNER */}
            <div className="relative w-full h-96 bg-cover bg-center overflow-hidden" 
                style={{ 
                    backgroundImage: "url('/images/about-banner.png')",
                    minHeight: '400px' 
                }}>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>

                <div className="relative h-full flex items-center max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl animate-fadeIn">
                        {/* Tag/Breadcrumb */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/20 backdrop-blur-md border border-sky-300/30 rounded-full mb-6">
                            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></span>
                            <span className="text-sm font-semibold text-white">Barter Experts </span>
                        </div>
                        {/* H1 */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
                            About Media Matrix
                        </h1>
                        {/* P tag */}
                        <p className="text-xl text-gray-200 mb-6">
                            Your Strategic Partner for Barter Media Solutions
                        </p>
                    </div>
                </div>
            </div>
            {/* END: REPLICATED HERO BANNER */}

            <div className="bg-gradient-to-b from-sky-50 to-white">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-200/50 text-sky-800 font-medium tracking-wide mb-6 shadow-md">
                            <span className="text-xl">🤝</span> About Media Matrix
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">We make **barter** work for brands.</h2>
                        <p className="text-xl text-gray-700 leading-relaxed">
                            Media Matrix is an **Advertising company** that helps brands **optimize their existing products/services** and use them to buy **Media solutions (ATL/BTL) on a Barter basis**.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <h3 className="text-3xl font-bold text-gray-900 border-b pb-2">Our Goal & Expertise 🎯</h3>
                        <p className="text-lg text-gray-700">Our goal is to provide an innovative tool allowing companies to utilize their **existing excess inventory/services** for advertising, rather than selling it at discounted market rates. This optimally increases the reach of the product through advertisement on a **Barter basis**. We have **over 14 years of experience** in the barter industry, ensuring expertise you can trust.</p>

                        <h4 className="text-2xl font-bold text-sky-700 mt-10">Why brands choose barter:</h4>
                        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mt-4">
                            <li>**Monetize unsold inventory** without resorting to deep discounting.</li>
                            <li>Secure premium media placements using the **full value** of your product/service.</li>
                            <li>**Increase the reach** of the product through effective Barter Advertisement campaigns.</li>
                            <li>Specializing in media solutions across India in **cash/barter** arrangements.</li>
                        </ul>
                    </div>

                    <div className="bg-sky-50 rounded-xl p-8 shadow-xl border border-sky-200 h-fit">
                        <h4 className="text-2xl font-bold text-gray-900 mb-5 border-b pb-2 text-center">Core Values ✨</h4>
                        <div className="space-y-4 text-lg text-gray-800">
                            <div className="flex items-start gap-3">
                                <span className="text-sky-600 font-extrabold text-xl">✓</span>
                                <div><strong>Client-Centric</strong> — Committed to serving clients **transparently and efficiently**.</div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-sky-600 font-extrabold text-xl">✓</span>
                                <div><strong>Experienced</strong> — **14+ years** of Barter Expertise in the Indian market.</div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-sky-600 font-extrabold text-xl">✓</span>
                                <div><strong>Innovative</strong> — Creative media solutions and strategic sampling programs.</div>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-sky-600 font-extrabold text-xl">✓</span>
                                <div><strong>Growing Presence</strong> — Main office in **Delhi NCR** with clear future expansion plans.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 bg-gradient-to-tr from-sky-100 to-white rounded-2xl p-10 shadow-2xl border border-sky-300">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Seamless Barter Workflow 🔄</h3>
                    <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 text-center">Media Matrix manages the entire transaction process from initial assessment to final execution, ensuring a smooth and hassle-free experience.</p>
                    <ol className="relative border-l border-sky-400 ml-4 space-y-6">
                        <li className="mb-8 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-600 rounded-full -left-4 ring-8 ring-white shadow-md text-white font-bold">1</span>
                            <h4 className="text-xl font-semibold text-gray-900">Understanding Basics of Media Barter</h4>
                            <p className="text-gray-700">Detailed explanation of the financial and reach benefits over traditional cash-based media buying.</p>
                        </li>
                        <li className="mb-8 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-600 rounded-full -left-4 ring-8 ring-white shadow-md text-white font-bold">2</span>
                            <h4 className="text-xl font-semibold text-gray-900">Finetuning the Requirements</h4>
                            <p className="text-gray-700">We specify the client's products/services for liquidation and identify appropriate, high-value media options for their brand.</p>
                        </li>
                        <li className="mb-8 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-600 rounded-full -left-4 ring-8 ring-white shadow-md text-white font-bold">3</span>
                            <h4 className="text-xl font-semibold text-gray-900">Contract Agreement</h4>
                            <p className="text-gray-700">A clear and transparent contract is signed between the client and Media Matrix, outlining all terms and deliverables.</p>
                        </li>
                        <li className="mb-8 ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-600 rounded-full -left-4 ring-8 ring-white shadow-md text-white font-bold">4</span>
                            <h4 className="text-xl font-semibold text-gray-900">Network Transactions</h4>
                            <p className="text-gray-700">Clients buy and sell media/products/services within our secure, managed network on a Barter basis, maximizing product value.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-600 rounded-full -left-4 ring-8 ring-white shadow-md text-white font-bold">5</span>
                            <h4 className="text-xl font-semibold text-gray-900">Accounting & Fees</h4>
                            <p className="text-gray-700">Media Matrix manages all complex accounting. A simple **10% facilitation charge** applies only to media purchases.</p>
                        </li>
                    </ol>
                </div>

                <div className="mt-20">
                    <h3 className="text-3xl font-black text-gray-900 mb-4 text-center">Our Valued Clients 🏆</h3>
                    <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
                        We proudly partner with leading brands across various industries, showcasing our ability to deliver effective barter solutions for top companies.
                    </p>

                    {/* Attractive Client Logos - Updated styling for Product Clients (Bigger and always colored) */}
                    <h4 className="text-2xl font-bold text-gray-800 mt-6 mb-6 border-b pb-2">Products Category Clients</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
                        {productClients.map((client) => (
                            <div 
                                key={client.name} 
                                className="h-24 flex items-center justify-center bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-sky-300 transition-shadow duration-300 transform hover:scale-105"
                                title={client.name}
                            >
                                <img src={client.path} alt={`${client.name} Logo`} className="max-h-full max-w-full object-contain transition duration-300" />
                            </div>
                        ))}
                    </div>

                    {/* Attractive Client Logos - Updated styling for Services Clients (Bigger and always colored) */}
                    <h4 className="text-2xl font-bold text-gray-800 mt-12 mb-6 border-b pb-2">Services Category Clients</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center items-center">
                        {serviceClients.map((client) => (
                            <div 
                                key={client.name} 
                                className="h-24 flex items-center justify-center bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-sky-300 transition-shadow duration-300 transform hover:scale-105"
                                title={client.name}
                            >
                                <img src={client.path} alt={`${client.name} Logo`} className="max-h-full max-w-full object-contain transition duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

     
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}