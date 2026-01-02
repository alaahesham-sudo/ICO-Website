"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-16 items-center justify-between gap-3 rounded-2xl bg-slate-800/95 backdrop-blur-xl px-4 shadow-2xl shadow-black/50 border border-slate-700/50">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            <Link href="/" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about-1" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/testimonials" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200 relative group">
              Testimonials
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/careers" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200 relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-200 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end gap-4">
            <a href="tel:12092514546" className="hidden sm:flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-teal-400 transition-colors px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 shadow-lg">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              1(209)-251-4546
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-200 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-2xl bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl p-4">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors py-2">Home</Link>
              <Link href="/about-1" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors py-2">About</Link>
              <Link href="/services" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors py-2">Services</Link>
              <Link href="/testimonials" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors py-2">Testimonials</Link>
              <Link href="/careers" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors py-2">Careers</Link>
              <Link href="/contact" className="text-sm font-semibold text-gray-200 hover:text-cyan-400 transition-colors py-2">Contact</Link>
              <a href="tel:12092514546" className="text-sm font-semibold text-cyan-400 py-2">1(209)-251-4546</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}