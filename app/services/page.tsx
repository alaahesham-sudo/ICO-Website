"use client";

import { useState, useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import AOS from "aos";
import "aos/dist/aos.css";

const serviceCategories = [
  {
    id: 1,
    title: "Sales & Revenue Generation Services",
    description: "Designed to directly increase top-line revenue through trained, conversion-focused teams.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    services: [
      {
        title: "Outbound Telesales",
        description: "High-performance sales agents trained to qualify, pitch, overcome objections, and close deals across multiple industries."
      },
      {
        title: "Inbound Sales Handling",
        description: "Conversion-optimized inbound call management focused on maximizing close rates and average order value."
      },
      {
        title: "Cold Calling & Prospecting",
        description: "Structured outbound outreach to generate qualified opportunities, appointments, and sales conversations."
      },
      {
        title: "Appointment Setting",
        description: "Pre-qualified, calendar-ready appointments booked directly into your sales pipeline."
      },
      {
        title: "Lead Qualification & Nurturing",
        description: "Filtering raw leads into sales-ready opportunities using predefined qualification frameworks (BANT, MEDDIC, custom)."
      }
    ]
  },
  {
    id: 2,
    title: "Lead Generation & Data Services",
    description: "Focused on predictable pipeline growth and clean, compliant data.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    services: [
      {
        title: "B2B & B2C Lead Generation",
        description: "Scalable lead sourcing aligned with your ideal customer profile and targeting criteria."
      },
      {
        title: "Data Qualification & Verification",
        description: "Phone-based validation to ensure accuracy, intent, and readiness before handoff."
      },
      {
        title: "CRM Data Enrichment & Cleanup",
        description: "Improving data quality, segmentation, and usability inside your CRM systems."
      },
      {
        title: "Industry-Specific Lead Programs",
        description: "Tailored lead generation for sectors such as Healthcare, Real Estate, E-commerce, Legal, Financial Services, and Technology."
      }
    ]
  },
  {
    id: 3,
    title: "Healthcare & DME Specialized Services",
    description: "Built for compliance-critical environments with strict quality controls.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    services: [
      {
        title: "Healthcare Chasing & Follow-Up",
        description: "Systematic follow-ups with medical offices, providers, and clinics to secure documentation and approvals."
      },
      {
        title: "PCP Order Generation",
        description: "End-to-end processes to support compliant Primary Care Physician order workflows."
      },
      {
        title: "Durable Medical Equipment (DME) Support",
        description: "Specialized teams experienced in orthopedic devices, CGM, and healthcare documentation cycles."
      },
      {
        title: "Document Verification & Quality Control",
        description: "Internal back-end verification layers to ensure data authenticity and compliance."
      }
    ]
  },
  {
    id: 4,
    title: "Customer Support & Experience Management",
    description: "Focused on retention, satisfaction, and brand trust.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    services: [
      {
        title: "Inbound Customer Support",
        description: "Professional handling of customer inquiries, complaints, and service requests."
      },
      {
        title: "Outbound Customer Engagement",
        description: "Proactive follow-ups, confirmations, renewals, and customer success outreach."
      },
      {
        title: "Multi-Channel Support",
        description: "Voice, email, chat, and messaging support based on client needs."
      },
      {
        title: "Customer Retention & Loyalty Programs",
        description: "Structured engagement models to reduce churn and increase lifetime value."
      }
    ]
  },
  {
    id: 5,
    title: "Remote Workforce & Outsourcing Solutions",
    description: "Scalable teams without the overhead of in-house hiring.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    services: [
      {
        title: "Dedicated Remote Teams",
        description: "Fully managed agents working exclusively on your account."
      },
      {
        title: "Team Scaling & Seat Expansion",
        description: "Rapid scale-up or scale-down based on campaign performance and seasonality."
      },
      {
        title: "Role-Based Outsourcing",
        description: "Openers, Closers, Chasers, Customer Support Agents, Virtual Assistants."
      },
      {
        title: "Performance-Based Models",
        description: "Flexible pricing structures including hourly, per-lead, per-order, and performance-based compensation."
      }
    ]
  },
  {
    id: 6,
    title: "Business Process Outsourcing (BPO)",
    description: "Operational support beyond calling.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    services: [
      {
        title: "Back-Office Operations",
        description: "Data entry, order processing, documentation handling, and reporting."
      },
      {
        title: "Quality Assurance & Monitoring",
        description: "Call audits, performance scoring, compliance reviews, and corrective feedback loops."
      },
      {
        title: "Reporting & KPI Dashboards",
        description: "Transparent metrics, productivity reports, and outcome-based tracking."
      }
    ]
  }
];

const industries = [
  { name: "Healthcare & Medical Services", icon: "🏥" },
  { name: "Durable Medical Equipment (DME)", icon: "🩺" },
  { name: "Real Estate", icon: "🏠" },
  { name: "E-commerce", icon: "🛒" },
  { name: "Legal & Professional Services", icon: "⚖️" },
  { name: "Financial Services & Insurance", icon: "💼" },
  { name: "Technology & SaaS", icon: "💻" },
  { name: "Recruitment & Staffing", icon: "👥" }
];

export default function Services() {
  const [openCategory, setOpenCategory] = useState<number | null>(1);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  const toggleCategory = (id: number) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <>
      <Header />
      <main className="grow">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 w-full">
            <div className="text-center" data-aos="zoom-y-out">
              <h1 className="mb-6 text-5xl font-bold md:text-6xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Our Services
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-gray-300 font-medium leading-relaxed">
                Comprehensive BPO solutions designed to accelerate your business growth and maximize operational efficiency
              </p>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="space-y-6">
              {serviceCategories.map((category, index) => (
                <div
                  key={category.id}
                  className="group rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-cyan-500/20 hover-lift hover-glow animate-card-lift"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-500/25 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse-glow">
                        {category.icon}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-50 mb-2 group-hover:text-cyan-400 transition-colors">
                          {category.title}
                        </h2>
                        <p className="text-sm text-gray-400 font-medium">{category.description}</p>
                      </div>
                    </div>
                    <div className="ml-4">
                      <svg
                        className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${openCategory === category.id ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Services List - Accordion */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openCategory === category.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {category.services.map((service, serviceIndex) => (
                          <div
                            key={serviceIndex}
                            className="p-5 rounded-xl bg-slate-900/50 border border-slate-700/30 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300 group/item hover-scale"
                            data-aos="fade-up"
                            data-aos-delay={serviceIndex * 50}
                          >
                            <h3 className="text-lg font-bold text-cyan-400 mb-2 group-hover/item:text-cyan-300 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-medium">
                              {service.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 to-blue-950/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-12" data-aos="zoom-y-out">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Industries We Serve
                </span>
              </h2>
              <p className="text-gray-400 font-medium">Expert solutions tailored to your industry</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover-lift hover-glow"
                  data-aos="zoom-y-out"
                  data-aos-delay={index * 50}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 animate-bounce-subtle">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-50 group-hover:text-cyan-400 transition-colors">
                    {industry.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-950/30 via-indigo-950/30 to-slate-950">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <div data-aos="zoom-y-out">
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Ready to Transform Your Business?
                </span>
              </h2>
              <p className="mb-8 text-lg text-gray-300 font-medium leading-relaxed">
                Connect with us and let's embark on this journey together
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 hover-shine"
              >
                Get Started Today
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}