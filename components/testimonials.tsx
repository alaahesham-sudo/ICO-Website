"use client";

import { useState } from "react";

const testimonialCategories = [
  {
    id: "all",
    name: "All Reviews",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    )
  },
  {
    id: "dme",
    name: "DME Suppliers",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    id: "pharmacy",
    name: "Pharmacies",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    id: "healthcare",
    name: "Healthcare Providers",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: "real-estate",
    name: "Real Estate",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    id: "solar",
    name: "Solar Companies",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

const testimonials = [
  {
    id: 1,
    category: "dme",
    name: "Michael Chen",
    role: "Operations Director",
    company: "MedEquip Solutions",
    rating: 5,
    text: "In-Call Outsourcing has been instrumental in streamlining our DME order processing. Their team's attention to detail and compliance knowledge is exceptional. We've seen a 40% increase in order accuracy since partnering with them.",
    highlight: "40% increase in order accuracy"
  },
  {
    id: 2,
    category: "pharmacy",
    name: "Sarah Martinez",
    role: "Pharmacy Manager",
    company: "HealthCare Pharmacy Network",
    rating: 5,
    text: "The appointment setting services from ICO have transformed how we manage patient consultations. Their professional approach and understanding of pharmacy operations have significantly improved our patient engagement rates.",
    highlight: "Transformed patient consultations"
  },
  {
    id: 3,
    category: "healthcare",
    name: "Dr. James Thompson",
    role: "Primary Care Physician",
    company: "Thompson Medical Group",
    rating: 5,
    text: "As a physician with over 15 years of practice, I've worked with many BPO companies. ICO stands out for their healthcare-specific expertise. Their PCP order generation process is seamless and compliant, saving us hours each week.",
    highlight: "Saving hours each week"
  },
  {
    id: 4,
    category: "dme",
    name: "Jennifer Walsh",
    role: "Customer Success Manager",
    company: "OrthoCare Medical Supplies",
    rating: 5,
    text: "ICO's specialized DME support team understands the complexities of orthopedic device documentation. Their systematic follow-up process ensures we never miss a deadline. Highly professional and reliable.",
    highlight: "Never miss a deadline"
  },
  {
    id: 5,
    category: "real-estate",
    name: "Robert Kim",
    role: "Real Estate Broker",
    company: "Premier Realty Partners",
    rating: 5,
    text: "The lead generation services from ICO have been a game-changer for our real estate business. They've consistently delivered qualified prospects that convert. Our sales pipeline has never been stronger.",
    highlight: "Game-changer for our business"
  },
  {
    id: 6,
    category: "healthcare",
    name: "Dr. Patricia Williams",
    role: "Medical Director",
    company: "Community Health Clinic",
    rating: 5,
    text: "ICO's healthcare chasing and follow-up services have dramatically improved our documentation completion rates. Their team is professional, persistent, and always maintains the highest standards of patient privacy.",
    highlight: "Dramatically improved completion rates"
  },
  {
    id: 7,
    category: "solar",
    name: "David Rodriguez",
    role: "Sales Director",
    company: "Solar Energy Corp",
    rating: 5,
    text: "Working with ICO for our solar panel appointment setting has exceeded all expectations. Their conversion-optimized approach has increased our close rate by 35%. The ROI has been outstanding.",
    highlight: "35% increase in close rate"
  },
  {
    id: 8,
    category: "pharmacy",
    name: "Lisa Anderson",
    role: "Regional Manager",
    company: "National Pharmacy Chain",
    rating: 5,
    text: "ICO's customer support services have helped us maintain excellent patient satisfaction scores. Their multi-channel support approach ensures we never miss a patient inquiry. Truly professional service.",
    highlight: "Excellent patient satisfaction"
  },
  {
    id: 9,
    category: "dme",
    name: "Thomas Brown",
    role: "VP of Operations",
    company: "Advanced DME Solutions",
    rating: 5,
    text: "The document verification and quality control processes from ICO are second to none. They've helped us maintain 100% compliance across all our DME orders. Their expertise in CGM and orthopedic devices is impressive.",
    highlight: "100% compliance maintained"
  },
  {
    id: 10,
    category: "healthcare",
    name: "Dr. Amanda Foster",
    role: "Family Medicine Physician",
    company: "Foster Family Practice",
    rating: 5,
    text: "ICO's appointment setting and patient follow-up services have allowed me to focus more on patient care. Their team handles administrative tasks with precision and professionalism. Highly recommended.",
    highlight: "Focus more on patient care"
  },
  {
    id: 11,
    category: "real-estate",
    name: "Maria Garcia",
    role: "Real Estate Agent",
    company: "Elite Properties Group",
    rating: 5,
    text: "The B2B lead generation from ICO has been invaluable for expanding our commercial real estate portfolio. They understand our target market and deliver quality leads consistently.",
    highlight: "Invaluable for expanding portfolio"
  },
  {
    id: 12,
    category: "solar",
    name: "Kevin Johnson",
    role: "CEO",
    company: "GreenTech Solar Solutions",
    rating: 5,
    text: "ICO's cold calling and prospecting services have been a key driver of our growth. Their structured approach and industry knowledge have helped us reach new markets effectively. Outstanding partnership.",
    highlight: "Key driver of our growth"
  }
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials = activeCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 via-indigo-950/30 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="zoom-y-out">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-teal-500/15 backdrop-blur-sm px-6 py-2.5 shadow-xl shadow-cyan-500/10">
            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold">Client Testimonials</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
            Real feedback from healthcare professionals, DME suppliers, and businesses we've helped grow
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
          {testimonialCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700/50 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-105"
              }`}
            >
              <span className={activeCategory === category.id ? "text-white" : "text-cyan-400"}>{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group relative rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl p-6 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
              data-aos="zoom-y-out"
              data-aos-delay={index * 50}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-200 leading-relaxed mb-4 font-medium">
                  "{testimonial.text}"
                </p>

                {/* Highlight */}
                <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
                  <p className="text-sm font-bold text-cyan-400">
                    {testimonial.highlight}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-500/40 flex items-center justify-center text-cyan-400 font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-50 group-hover:text-cyan-400 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center" data-aos="zoom-y-out" data-aos-delay={400}>
          <p className="text-gray-300 mb-6 font-medium text-lg">
            Join hundreds of satisfied clients who trust ICO
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}