import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Darker elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950"></div>
      
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.3),transparent_50%)] animate-mesh-1"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.25),transparent_50%)] animate-mesh-2"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.2),transparent_60%)] animate-mesh-3"></div>
      </div>
      
      {/* Professional connection lines animation */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59,130,246,0.4)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(14,165,233,0.6)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(20,184,166,0.4)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,200 Q200,100 400,200 T800,200" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-connection-1" />
          <path d="M0,400 Q300,300 600,400 T1200,400" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-connection-2" />
          <path d="M0,600 Q400,500 800,600 T1600,600" stroke="url(#lineGradient)" strokeWidth="2" fill="none" className="animate-connection-3" />
        </svg>
      </div>
      
      {/* Data flow particles - professional */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 shadow-lg shadow-cyan-400/50 animate-data-flow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <PageIllustration />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-teal-500/15 backdrop-blur-sm px-6 py-2.5 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/30 hover:scale-105 hover:border-cyan-400/50 transition-all duration-500" data-aos="zoom-y-out">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Trusted BPO Partner Since 2012</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl" data-aos="zoom-y-out" data-aos-delay={150}>
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-shift">
                Accelerate Your
              </span>
              <br className="max-lg:hidden" />
              <span className="bg-gradient-to-r from-gray-100 via-blue-50 to-cyan-50 bg-clip-text text-transparent">Business Growth</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-200 leading-relaxed" data-aos="zoom-y-out" data-aos-delay={300}>
                Our proven methods and experienced team will take your business to the next level.
              </p>
              <div className="relative" data-aos="zoom-y-out" data-aos-delay={450}>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                  <a className="group btn mb-4 w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 sm:mb-0 sm:w-auto px-8 py-3.5 rounded-xl font-semibold relative overflow-hidden" href="tel:12092514546">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
                    <span className="relative inline-flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      1(209)-251-4546
                      <span className="ml-1 tracking-normal text-cyan-200 transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                  <a className="btn w-full bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-sm text-gray-100 border border-slate-600/50 shadow-xl hover:from-slate-700/90 hover:via-slate-600/90 hover:to-slate-700/90 hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 sm:w-auto px-8 py-3.5 rounded-xl font-semibold relative overflow-hidden group" href="/contact">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative">Get Started Today</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 via-cyan-500/30 to-transparent"></div>
    </section>
  );
}