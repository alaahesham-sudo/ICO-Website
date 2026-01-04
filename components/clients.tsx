"use client";

import { useState, useEffect, useRef } from "react";

const partnershipHighlights = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "HIPAA Compliant",
    description: "Full compliance with healthcare data protection regulations",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "ISO Certified",
    description: "Quality management systems and processes",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "99.8% Uptime",
    description: "Reliable service delivery guaranteed",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Award-Winning Service",
    description: "Recognized for excellence in BPO industry",
    color: "from-blue-500 to-indigo-500"
  }
];

const serviceCapabilities = [
  {
    title: "Multi-Channel Support",
    items: ["Voice", "Email", "Chat", "Messaging"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30"
  },
  {
    title: "Scalable Solutions",
    items: ["10 to 1000+ Agents", "Flexible Pricing", "Rapid Deployment"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30"
  },
  {
    title: "Advanced Technology",
    items: ["CRM Integration", "AI-Powered Tools", "Real-Time Analytics"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30"
  },
  {
    title: "Quality Assurance",
    items: ["Call Monitoring", "Performance Metrics", "Continuous Training"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30"
  }
];

const industryCategories = [
  {
    name: "Healthcare Providers",
    count: "8,500+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30"
  },
  {
    name: "DME Suppliers",
    count: "1,200+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    color: "from-teal-500/20 to-cyan-500/20",
    borderColor: "border-teal-500/30"
  },
  {
    name: "Pharmacies",
    count: "800+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30"
  },
  {
    name: "Real Estate",
    count: "450+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    name: "Solar Companies",
    count: "300+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: "from-indigo-500/20 to-purple-500/20",
    borderColor: "border-indigo-500/30"
  },
  {
    name: "Other Industries",
    count: "750+",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30"
  }
];

const achievements = [
  {
    title: "100% Compliance Rate",
    description: "Maintained across all healthcare regulations",
    icon: "✓"
  },
  {
    title: "ISO Certified Processes",
    description: "Quality management systems in place",
    icon: "✓"
  },
  {
    title: "HIPAA Compliant",
    description: "Full patient data protection",
    icon: "✓"
  },
  {
    title: "Award-Winning Service",
    description: "Recognized for excellence in BPO",
    icon: "✓"
  }
];

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 via-indigo-950/30 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="zoom-y-out">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-cyan-500/15 backdrop-blur-sm px-6 py-2.5 shadow-xl shadow-emerald-500/10">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent font-semibold">Trusted By</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              WE HAVE DEALT WITH OVER
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-100 via-blue-50 to-cyan-50 bg-clip-text text-transparent">
              10,000+ DOCTORS' OFFICES
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Trusted by healthcare professionals, businesses, and organizations across the United States
          </p>
        </div>

        {/* Partnership Highlights - Certifications & Trust Badges */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {partnershipHighlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl p-6 border border-slate-700/50 shadow-xl hover:border-emerald-500/50 hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover-lift hover-glow animate-card-lift"
              data-aos="zoom-y-out"
              data-aos-delay={index * 100}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${highlight.color} p-4 mb-4 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 animate-pulse-glow`}>
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-50 mb-2 group-hover:text-emerald-400 transition-colors">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-400 font-medium leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Service Capabilities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-50">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Our Service Capabilities
            </span>
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCapabilities.map((capability, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl p-6 border border-slate-700/50 hover:border-emerald-500/50 hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover-lift hover-glow"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${capability.color} border ${capability.borderColor} flex items-center justify-center text-emerald-400 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                    {capability.icon}
                  </div>
                  <h4 className="font-bold text-gray-50 mb-3 group-hover:text-emerald-400 transition-colors">
                    {capability.title}
                  </h4>
                  <ul className="space-y-2">
                    {capability.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-50">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryCategories.map((industry, index) => (
              <div
                key={index}
                className="group relative rounded-xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl p-5 border border-slate-700/50 hover:border-emerald-500/50 hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover-lift hover-glow"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300`}></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${industry.color} border ${industry.borderColor} flex items-center justify-center text-emerald-400 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                      {industry.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-50 group-hover:text-emerald-400 transition-colors">
                        {industry.name}
                      </h4>
                      <p className="text-sm text-gray-400 font-medium">
                        {industry.count} clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl p-8 border border-slate-700/50 shadow-xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-50">
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group text-center p-4 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300 hover-scale"
                data-aos="zoom-y-out"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-xl font-bold mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-gray-50 mb-2 group-hover:text-emerald-400 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-sm text-gray-400 font-medium">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}