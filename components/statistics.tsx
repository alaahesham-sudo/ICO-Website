"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { 
    label: "Years of Experience", 
    value: 12, 
    suffix: "+", 
    percentage: 100, 
    color: "from-blue-500 to-cyan-500",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    description: "Decades of expertise in healthcare BPO"
  },
  { 
    label: "Doctors' Offices Served", 
    value: 10000, 
    suffix: "+", 
    percentage: 95, 
    color: "from-cyan-500 to-teal-500",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    description: "Trusted by medical professionals nationwide"
  },
  { 
    label: "Happy Clients", 
    value: 500, 
    suffix: "+", 
    percentage: 90, 
    color: "from-teal-500 to-emerald-500",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Satisfied partners across industries"
  },
  { 
    label: "Support Available", 
    value: 24, 
    suffix: "/7", 
    percentage: 100, 
    color: "from-blue-600 to-indigo-600",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: "Round-the-clock dedicated support"
  },
];

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Darker elegant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 via-indigo-950 to-slate-950"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(14,165,233,0.12),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.08),transparent_70%)]"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="zoom-y-out">
          <div className="mb-4 inline-block rounded-full border border-cyan-500/30 bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-teal-500/15 px-6 py-2.5 text-sm font-semibold backdrop-blur-sm shadow-xl">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">Our Track Record</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Proven Excellence
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-100 via-blue-50 to-cyan-50 bg-clip-text text-transparent">In Healthcare BPO</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
            Numbers that reflect our commitment to delivering exceptional results for healthcare professionals
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              data-aos="zoom-y-out"
              data-aos-delay={index * 100}
            >
              <div className="relative h-full rounded-3xl bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 backdrop-blur-xl p-8 border border-slate-700/50 shadow-2xl shadow-black/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                {/* Enhanced glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-12 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} p-4 shadow-lg flex items-center justify-center text-white transform group-hover:rotate-6 transition-transform duration-500`}>
                      {stat.icon}
                    </div>
                  </div>

                  {/* Circular Progress */}
                  <div className="mb-6 flex justify-center">
                    <CircularProgress
                      percentage={stat.percentage}
                      color={stat.color}
                      isVisible={isVisible}
                      delay={index * 200}
                    />
                  </div>

                  {/* Number */}
                  <div className="text-center mb-3">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {isVisible ? (
                        <CountUpAnimation targetValue={stat.value} suffix={stat.suffix} />
                      ) : (
                        `0${stat.suffix}`
                      )}
                    </div>
                    <div className="text-xl font-bold text-gray-200 mb-1">{stat.percentage}%</div>
                  </div>

                  {/* Label */}
                  <div className="text-center mb-3">
                    <div className="text-sm font-bold text-gray-100 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p className="text-xs text-gray-400 leading-relaxed font-medium">
                      {stat.description}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-2000 ease-out`}
                        style={{
                          width: isVisible ? `${stat.percentage}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center" data-aos="zoom-y-out" data-aos-delay={400}>
          <p className="text-gray-300 mb-4 font-medium">Join thousands of satisfied healthcare providers</p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent font-semibold">
            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span>Experience the difference</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CircularProgress({ percentage, color, isVisible, delay }: { percentage: number; color: string; isVisible: boolean; delay: number }) {
  const [progress, setProgress] = useState(0);
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const duration = 2500;
        const steps = 60;
        const increment = percentage / steps;
        const stepDuration = duration / steps;
        let current = 0;

        const progressTimer = setInterval(() => {
          current += increment;
          if (current >= percentage) {
            setProgress(percentage);
            clearInterval(progressTimer);
          } else {
            setProgress(current);
          }
        }, stepDuration);

        return () => clearInterval(progressTimer);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  const gradientId = `gradient-${color.replace(/\s/g, '-')}`;
  const colorMap: { [key: string]: { start: string; end: string } } = {
    'from-blue-500-to-cyan-500': { start: '#3b82f6', end: '#06b6d4' },
    'from-cyan-500-to-teal-500': { start: '#06b6d4', end: '#14b8a6' },
    'from-teal-500-to-emerald-500': { start: '#14b8a6', end: '#10b981' },
    'from-blue-600-to-indigo-600': { start: '#2563eb', end: '#4f46e5' },
  };

  const gradientKey = color.replace(/\s/g, '-');
  const colors = colorMap[gradientKey] || { start: '#3b82f6', end: '#06b6d4' };

  return (
    <div className="relative w-32 h-32">
      <svg className="transform -rotate-90 w-32 h-32">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.start} />
            <stop offset="100%" stopColor={colors.end} />
          </linearGradient>
        </defs>
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          className="text-slate-700"
        />
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold text-gray-200">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}

function CountUpAnimation({ targetValue, suffix }: { targetValue: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2500;
    const steps = 60;
    const increment = targetValue / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}