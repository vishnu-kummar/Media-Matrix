import React, { useState } from "react";

export default function About() {
    const [activeTab, setActiveTab] = useState(0);

    const missionData = [
        {
            title: "Vision",
            desc: "To be the global leader in product development for media and data intelligence platforms.",
            icon: "🎯",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Innovation",
            desc: "Driving continuous innovation through research and rapid prototyping, always prioritizing quality and user trust.",
            icon: "💡",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Excellence",
            desc: "Committed to delivering exceptional quality in every product, ensuring customer satisfaction and long-term success.",
            icon: "⭐",
            gradient: "from-orange-500 to-red-500"
        }
    ];

    const productData = [
        {
            title: "Product X: Data Dashboard",
            desc: "A real-time data visualization platform giving clients instant, actionable insights into their market performance.",
            img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600",
            features: ["Real-time Analytics", "Custom Reports", "AI Insights"]
        },
        {
            title: "Product Y: AI Marketing Suite",
            desc: "An AI-powered tool that automates content generation and campaign optimization across all major media channels.",
            img: "https://images.pexels.com/photos/3184436/pexels-photo-3184436.jpeg?auto=compress&cs=tinysrgb&w=1600",
            features: ["Auto-Content", "Campaign Optimization", "Multi-Channel"]
        }
    ];

    const teamValues = [
        { icon: "🚀", title: "Innovation First", desc: "We push boundaries" },
        { icon: "🤝", title: "Customer Focused", desc: "Your success is ours" },
        { icon: "💎", title: "Quality Driven", desc: "Excellence in every detail" },
        { icon: "🌟", title: "Passion & Purpose", desc: "Driven by impact" }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                            </span>
                            <span className="text-sm font-semibold text-purple-700">Innovation Driven by Passion</span>
                        </div>
                        
                        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                            About Media Matrixx
                        </h1>
                        
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                            Building cutting-edge solutions that redefine digital engagement. We're passionate developers driving innovation in marketing and data analysis.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center gap-8 mt-12">
                            {[
                                { value: "50+", label: "Products Launched" },
                                { value: "10K+", label: "Happy Clients" },
                                { value: "15+", label: "Countries" },
                                { value: "99%", label: "Satisfaction" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-300"></div>
                        <img
                            src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=1600"
                            alt="Team working together"
                            className="relative rounded-3xl shadow-2xl w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full">
                            <span className="text-sm font-semibold text-purple-700">Our Story</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                            Innovation Driven by Passion
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed">
                            <strong className="text-gray-900">Media Matrixx is a product-based company</strong> committed to building
                            cutting-edge solutions that redefine digital engagement. Our passionate developers
                            drive innovation in marketing and data analysis.
                        </p>
                        
                        <p className="text-gray-600 leading-relaxed">
                            We believe in the power of technology to simplify complexity. Every product we launch
                            is designed with user experience and scalability at its core, ensuring our clients
                            always stay ahead of the curve.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                                <span className="text-green-600">✓</span>
                                <span className="text-sm font-semibold text-green-700">User-Centric Design</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                                <span className="text-blue-600">✓</span>
                                <span className="text-sm font-semibold text-blue-700">Scalable Solutions</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                                <span className="text-purple-600">✓</span>
                                <span className="text-sm font-semibold text-purple-700">Continuous Innovation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Our Core Mission
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Guiding principles that drive everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {missionData.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Our Key Products
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Innovative solutions designed to transform your business
                    </p>
                </div>

                <div className="space-y-8">
                    {productData.map((product, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                            }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Image */}
                                <div className="relative h-64 lg:h-auto overflow-hidden">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                        {product.desc}
                                    </p>

                                    {/* Features */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {product.features.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 text-sm font-semibold rounded-full"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => alert("This feature will be available soon.")}
                                        className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-bold group-hover:gap-3 transition-all duration-300"
                                    >
                                        <span>Learn More</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Values */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            What makes us different
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {teamValues.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
                            >
                                <div className="text-5xl mb-4">{value.icon}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                                <p className="text-gray-600 text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Ready to Build With Us?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Connect with our team to discuss your next big product idea.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-purple-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            Get in Touch
                        </a>
                        <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            View Our Work
                        </button>
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