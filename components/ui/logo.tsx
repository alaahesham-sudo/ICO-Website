"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Logo() {
  const [useLocal, setUseLocal] = useState(false);

  return (
    <Link href="/" className="inline-flex items-center gap-3 group" aria-label="In-Call Outsourcing LLC">
      <div className="relative w-12 h-12 flex items-center justify-center">
        {/* White background for logo */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <Image
          src={useLocal ? "/images/logo.png" : "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/blob-ff056cd.png/:/rs=w:198,h:198,cg:true,m/cr=w:198,h:198/qt=q:95"}
          alt="In-Call Outsourcing LLC Logo"
          width={48}
          height={48}
          className="relative z-10 group-hover:scale-110 transition-transform duration-300 object-contain drop-shadow-lg p-1"
          unoptimized
          onError={() => {
            if (!useLocal) {
              setUseLocal(true);
            }
          }}
        />
      </div>
      <div className="hidden sm:block">
        <div className="text-lg font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-cyan-200 group-hover:to-teal-200 transition-all duration-300">
          In-Call Outsourcing LLC
        </div>
        <div className="text-xs font-semibold text-gray-400 -mt-0.5">
          Your Trusted BPO Partner
        </div>
      </div>
    </Link>
  );
}