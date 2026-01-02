"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const doctorImages = [
  "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/BRIAN%20%20GANS%20M.D..PNG/:/rs=w:1300,h:800",
  "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/Antoinette%20Alugbue%2C%20M.D.PNG/:/rs=w:1300,h:800",
  "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/drRichard%20Fruehling%2C%20MD.PNG/:/rs=w:1300,h:800",
  "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/PAUL%20ANDREW%20FABELA%20M.D.PNG/:/rs=w:1300,h:800",
  "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/SHUNTARO%20SHINADA%20M.D.PNG/:/rs=w:1300,h:800"
];

const aboutSections = [
  {
    id: 1,
    title: "IN-CALL OUTSOURCING AT A GLANCE",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-5 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    content: "In-Call Outsourcing (ICO) is an office-based contact center and business process outsourcing (BPO) company, located in Cairo, Egypt. & verified in Wyoming, USA. With wide-ranging and longstanding experience of 12 years in aiding businesses thrive through effective communication and unparalleled customer engagement. We specialize in delivering tailored telemarketing solutions that drive sales, enhance brand reputation, and foster long-lasting customer relationships."
  },
  {
    id: 2,
    title: "In-Call Outsourcing's Approach",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    content: "At ICO, we understand that every interaction counts, each phone call has the potential to make a significant impact on your bottom line and the significance of connecting with your target audience in a meaningful way. Our team of highly skilled and trained telemarketing professionals possess the expertise and passion to deliver extraordinary results. We go beyond simply making calls; we strive to create valuable connections, convert leads into real customers, and maximize your business growth."
  },
  {
    id: 3,
    title: "Discover The Difference",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    content: "What sets us apart is our deep understanding of the customer-centric approach, we take the time to conclude your unique business objectives, target market, and specific requirements. This enables us to design customized telemarketing campaigns that align perfectly with your goals, such as appointment setting, market research, or customer surveys, we have the knowledge and resources to deliver exceptional results."
  },
  {
    id: 4,
    title: "Why ICO?",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: "Choosing ICO over others means choosing a telemarketing partner that prioritizes your success and work hand in hand with you to create customized telemarketing solutions that make a real impact since our motto in life is \"Your Efforts Are Always Appreciated\"."
  }
];

const coreValues = [
  {
    title: "Our Mission",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "We are coming to be the leading telemarketing company specializing in providing customer services for durable medical equipment (DME), solar panels, real estate, and appointments setting. We are dedicated to connecting businesses with high-quality leads that drive development and success."
  },
  {
    title: "Our Vision",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    description: "ICO revolutionizes the telemarketing industry by utilizing innovative strategies and cutting-edge technology. We envisage a future where businesses can rely on our expertise to generate targeted leads, develop customer relationships, and achieve sustainable growth."
  },
  {
    title: "Our Goal",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: "Our goal is to provide customer services that exceed our clients' expectations. We aim to consistently deliver qualified leads that convert into loyal customers, helping businesses thrive in the competitive marketplace. On top of that, we always concentrate on developing the relationships between our projects' managers, leaders and employees, and yes we have been influencing whoever passes through our organization."
  }
];

const principles = [
  {
    title: "Transparency",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    description: "We believe in open and transparent communication with our clients. Throughout the engagement, we provide regular updates, insightful reports, and clear insights into the progress and performance of your products pipeline and appointment setting campaigns."
  },
  {
    title: "Results-driven",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: "Our extreme concentration is on delivering measurable results for our clients. We have a proven track record of helping businesses achieve increased conversions, higher sales volumes, and improved ROI through our customer services strategies and numerous numbers of appointment setting strategies."
  },
  {
    title: "Responsiveness",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "We aim to build long-term partnerships with our clients. We strive to become a trusted extension of your team, working collaboratively to achieve your for customer services, and appointment setting objectives in the DME, solar, real estate sectors, and etc.."
  },
  {
    title: "Solid Alliance",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    description: "We operate with the utmost integrity and strictly adhere to industry regulations and ethical practices. Our processes comply with DNC (Do Not Call) lists and privacy policies, ensuring that our practices are conducted ethically and legally."
  }
];

export default function About() {
  const [openSection, setOpenSection] = useState<number | null>(1);

  const toggleSection = (id: number) => {
    setOpenSection(openSection === id ? null : id);
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
                  About Us
                </span>
              </h1>
              <p className="mx-auto max-w-3xl text-lg text-gray-300 font-medium leading-relaxed">
                12 years of excellence in healthcare BPO and telemarketing services, serving 10,000+ doctors' offices across the USA
              </p>
            </div>
          </div>
        </section>

        {/* About Sections - Accordion Style */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="space-y-6">
              {aboutSections.map((section, index) => (
                <div
                  key={section.id}
                  className="group rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-500/25 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {section.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-50 group-hover:text-cyan-400 transition-colors">
                        {section.title}
                      </h2>
                    </div>
                    <div className="ml-4">
                      <svg
                        className={`w-6 h-6 text-cyan-400 transition-transform duration-300 ${openSection === section.id ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openSection === section.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                      <p className="text-base leading-relaxed text-gray-300 font-medium">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 to-blue-950/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-12" data-aos="zoom-y-out">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Who We Are
                </span>
              </h2>
              <p className="text-gray-400 font-medium">Our mission, vision, and goals</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
                  data-aos="zoom-y-out"
                  data-aos-delay={index * 100}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/25 to-cyan-500/25 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300 font-medium">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles Section */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-12" data-aos="zoom-y-out">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Our Principles
                </span>
              </h2>
              <p className="text-gray-400 font-medium">The values that guide everything we do</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/25 to-cyan-500/25 border border-blue-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {principle.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-300 font-medium">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Doctors Gallery Section */}
        <section className="relative py-20 bg-gradient-to-b from-slate-950 to-blue-950/20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-12" data-aos="zoom-y-out">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                  Trusted by Healthcare Professionals
                </span>
              </h2>
              <p className="text-lg text-gray-400 font-medium">
                WE HAVE DEALT WITH OVER 10,000 DOCTORS' OFFICES IN USA
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {doctorImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-slate-800 border border-slate-700/50 shadow-xl hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
                  data-aos="zoom-y-out"
                  data-aos-delay={index * 100}
                >
                  <Image
                    src={image}
                    alt={`Doctor ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231e293b" width="400" height="400"/%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                  Partner With Us Today
                </span>
              </h2>
              <p className="mb-8 text-lg text-gray-300 font-medium leading-relaxed">
                Experience the difference that 12 years of expertise and dedication can make for your business
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
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