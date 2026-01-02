import "./css/style.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "In-Call Outsourcing LLC - Healthcare BPO Services",
  description: "Leading healthcare BPO and telemarketing services with 12+ years of experience serving 10,000+ doctors' offices.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950 font-inter tracking-tight text-gray-100 antialiased`}
        style={{ backgroundColor: '#0f172a' }}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        
        {/* Floating LinkedIn Contact Icon - Extra Large Size */}
        <a
          href="https://www.linkedin.com/in/mohamed-kamal-alvin-freeman-47193a14b/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#0077B5] to-[#005885] shadow-2xl shadow-[#0077B5]/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#0077B5]/60 group"
          aria-label="Connect on LinkedIn"
          title="Connect with us on LinkedIn"
        >
          <svg 
            className="h-14 w-14 text-white transition-transform group-hover:scale-110" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
          </svg>
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-900 animate-pulse">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
          </span>
        </a>
      </body>
    </html>
  );
}