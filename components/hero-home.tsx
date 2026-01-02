import Image from "next/image";
import PageIllustration from "@/components/page-illustration";

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Darker elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950"></div>
      
      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-teal-500/15"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(14,165,233,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_60%)]"></div>
      
      <PageIllustration />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 z-10">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-teal-500/15 backdrop-blur-sm px-6 py-2.5 shadow-xl shadow-cyan-500/10" data-aos="zoom-y-out">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Healthcare BPO Excellence Since 2012</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl" data-aos="zoom-y-out" data-aos-delay={150}>
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Accelerate Your
              </span>
              <br className="max-lg:hidden" />
              <span className="bg-gradient-to-r from-gray-100 via-blue-50 to-cyan-50 bg-clip-text text-transparent">Business Growth</span>
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-lg text-gray-200 leading-relaxed" data-aos="zoom-y-out" data-aos-delay={300}>
                Our proven methods and experienced team will take your business to the next level with healthcare-focused BPO solutions.
              </p>
              <div className="relative" data-aos="zoom-y-out" data-aos-delay={450}>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                  <a className="group btn mb-4 w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 sm:mb-0 sm:w-auto px-8 py-3.5 rounded-xl font-semibold" href="tel:12092514546">
                    <span className="relative inline-flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      1(209)-251-4546
                      <span className="ml-1 tracking-normal text-cyan-200 transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                  <a className="btn w-full bg-gradient-to-r from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-sm text-gray-100 border border-slate-600/50 shadow-xl hover:from-slate-700/90 hover:via-slate-600/90 hover:to-slate-700/90 hover:scale-105 transition-all duration-300 sm:w-auto px-8 py-3.5 rounded-xl font-semibold" href="/contact">
                    Get Started Today
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