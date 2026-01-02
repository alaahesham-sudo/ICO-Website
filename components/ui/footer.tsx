"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950/40 via-indigo-950/30 to-slate-950 border-t border-slate-800">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_50%)]"></div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`grid gap-10 py-12 sm:grid-cols-12 md:py-16 ${border ? "border-t border-slate-800" : ""}`}>
          <div className="space-y-4 sm:col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 flex items-center justify-center">
                {/* White background for logo */}
                <div className="absolute inset-0 bg-white rounded-xl shadow-lg"></div>
                <Image
                  src="https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/blob-ff056cd.png/:/rs=w:198,h:198,cg:true,m/cr=w:198,h:198/qt=q:95"
                  alt="In-Call Outsourcing LLC Logo"
                  width={48}
                  height={48}
                  className="relative z-10 object-contain drop-shadow-lg p-1"
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">In-Call Outsourcing LLC</h3>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
              <svg width="20" height="14" viewBox="0 0 20 14" className="flex-shrink-0">
                <rect width="20" height="14" fill="#B22234"/>
                <g fill="#fff">
                  <rect width="20" height="1.08"/>
                  <rect y="2.16" width="20" height="1.08"/>
                  <rect y="4.32" width="20" height="1.08"/>
                  <rect y="6.48" width="20" height="1.08"/>
                  <rect y="8.64" width="20" height="1.08"/>
                  <rect y="10.8" width="20" height="1.08"/>
                  <rect y="12.96" width="20" height="1.08"/>
                </g>
                <rect width="8" height="7.56" fill="#3C3B6E"/>
                <g fill="#fff" fontSize="0.5" fontFamily="serif">
                  {[...Array(50)].map((_, i) => {
                    const row = Math.floor(i / 6);
                    const col = i % 6;
                    return <circle key={i} cx={0.6 + col * 1.17} cy={0.6 + row * 0.97} r="0.15"/>;
                  })}
                </g>
              </svg>
              <p>30 N Gould St Ste 32964, Sheridan, Wyoming 82801</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400 font-medium">
              <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:12092514546" className="text-cyan-400 hover:text-teal-400 transition-colors font-semibold">
                1(209)-251-4546
              </a>
            </div>
          </div>
          <div className="space-y-4 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-300">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-medium" href="/about-1">About</Link></li>
              <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-medium" href="/services">Services</Link></li>
              <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-medium" href="/careers">Careers</Link></li>
              <li><Link className="text-gray-400 hover:text-cyan-400 transition-colors font-medium" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="space-y-4 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold text-gray-300">Connect With Us</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/incalloutsourcing" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 text-gray-400 transition-all hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 hover:scale-110" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12.061C22 6.505 17.523 2 12 2S2 6.505 2 12.061c0 5.022 3.657 9.184 8.438 9.939v-7.03h-2.54v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.908h-2.33V22c4.78-.755 8.437-4.917 8.437-9.939z"></path></svg>
              </a>
              <a href="https://www.linkedin.com/company/incall-outsource/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 text-gray-400 transition-all hover:border-[#0077B5] hover:text-[#0077B5] hover:bg-[#0077B5]/10 hover:scale-110" aria-label="LinkedIn Company">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 pb-8 text-center text-sm text-gray-500 font-medium">
          <p>Copyright © 2026 In-Call Outsourcing LLC - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}