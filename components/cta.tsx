export default function Cta() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(20,184,166,0.1),transparent_60%)]"></div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-teal-500/15 backdrop-blur-sm px-6 py-2.5 shadow-xl shadow-cyan-500/10" data-aos="zoom-y-out">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold">Get Started</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" data-aos="zoom-y-out" data-aos-delay={100}>
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-100 via-blue-50 to-cyan-50 bg-clip-text text-transparent">Your Business?</span>
            </h2>
            <p className="mb-4 text-xl font-medium text-gray-100" data-aos="zoom-y-out" data-aos-delay={200}>
              Connect with us and let's embark on this journey together
            </p>
            <p className="mb-8 text-lg font-semibold text-cyan-400 italic" data-aos="zoom-y-out" data-aos-delay={300}>
              "Your Efforts Are Always Appreciated"
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center" data-aos="zoom-y-out" data-aos-delay={400}>
              <a className="group btn mb-4 w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 sm:mb-0 sm:w-auto px-8 py-3.5 rounded-xl font-semibold hover-shine" href="/contact">
                <span className="relative inline-flex items-center gap-2">
                  Get Started Now
                  <span className="ml-1 tracking-normal text-cyan-200 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}