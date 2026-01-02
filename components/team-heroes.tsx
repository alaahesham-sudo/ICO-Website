"use client";

import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  { name: "Todd Alex", image: "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/photo_2023-11-11_00-57-24.jpg/:/rs=w:1300,h:800", role: "Team Hero" },
  { name: "Team Member", image: "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/photo_2023-11-11_00-57-11-4cf5456.jpg/:/rs=w:1300,h:800", role: "Team Hero" },
  { name: "Team Member", image: "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/photo_2023-11-11_01-00-57.jpg/:/rs=w:1300,h:800", role: "Team Hero" },
  { name: "Team Member", image: "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/photo_2023-11-11_00-56-40.jpg/:/rs=w:1300,h:800", role: "Team Hero" },
  { name: "Team Member", image: "https://img1.wsimg.com/isteam/ip/1d13db98-d41c-4037-8855-9a24abfecdfa/photo_2023-11-11_00-56-36.jpg/:/rs=w:1300,h:800", role: "Team Hero" }
];

export default function TeamHeroes() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 via-indigo-950/30 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-teal-500/15 backdrop-blur-sm px-6 py-2.5 shadow-xl shadow-cyan-500/10" data-aos="zoom-y-out">
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold">Our Team</span>
            </div>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl" data-aos="zoom-y-out" data-aos-delay={100}>
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Meet Some Of Our Heroes
              </span>
            </h2>
            <p className="mb-8 text-lg font-medium text-gray-200" data-aos="zoom-y-out" data-aos-delay={200}>
              The passionate individuals driving our success
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group text-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                data-aos="zoom-y-out"
                data-aos-delay={index * 100}
              >
                <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl bg-slate-800 shadow-2xl shadow-black/50 border border-slate-700/50 group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/20 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className={`object-cover transition-all duration-700 ${hoveredIndex === index ? 'scale-110 brightness-110' : 'scale-100'}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%231e293b" width="400" height="400"/%3E%3Ctext fill="%2364758b" x="50%25" y="50%25" text-anchor="middle" dy=".3em" font-family="Arial" font-size="20"%3EImage%3C/text%3E%3C/svg%3E';
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      <p className="text-white font-bold text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-50 group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                <p className="text-sm font-medium text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}