"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const StatsSection = () => {
  const [counters, setCounters] = useState({
    franchisees: 0,
    students: 0,
    schools: 0,
    trainers: 0,
    countries: 0,
    schoolProjects: 0,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const hasAnimated = useRef(false);

  const stats = [
    {
      id: "franchisees",
      label: "Authorized Franchisees",
      value: 550,
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v2M7 8H5a2 2 0 00-2 2v2" />
        </svg>
      ),
    },
    {
      id: "students",
      label: "Students Trained",
      value: 150000,
      suffix: "+",
      prefix: "1.5",
      isLakh: true,
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      id: "schools",
      label: "School Project Associations",
      value: 165,
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      id: "trainers",
      label: "Qualified Trainers",
      value: 50,
      suffix: "+",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      id: "countries",
      label: "Countries Presence",
      value: 5,
      suffix: "",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "schoolProjects",
      label: "Active School Projects",
      value: 50,
      suffix: "",
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-4H7v4M7 3v4h10" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      
      const duration = 2000; // 2 seconds
      const stepTime = 20; // Update every 20ms
      const steps = duration / stepTime;
      
      const incrementValues = {};
      stats.forEach((stat) => {
        incrementValues[stat.id] = stat.value / steps;
      });

      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        
        setCounters((prev) => {
          const newCounters = { ...prev };
          stats.forEach((stat) => {
            const increment = incrementValues[stat.id];
            let newValue = Math.min(increment * currentStep, stat.value);
            
            if (stat.isLakh && stat.id === "students") {
              // Handle lakh display specially
              newValue = Math.min(newValue, stat.value);
            }
            
            newCounters[stat.id] = Math.floor(newValue);
          });
          
          if (currentStep >= steps) {
            // Final values
            stats.forEach((stat) => {
              newCounters[stat.id] = stat.value;
            });
            clearInterval(interval);
          }
          
          return newCounters;
        });
      }, stepTime);
      
      return () => clearInterval(interval);
    }
  }, [inView]);

  const formatValue = (statId, value) => {
    const stat = stats.find(s => s.id === statId);
    if (!stat) return value;
    
    if (stat.id === "students") {
      if (value >= 100000) {
        const lakhValue = (value / 100000).toFixed(1);
        return `${lakhValue} Lakh${lakhValue !== "1.0" ? "" : ""}`;
      }
      return value;
    }
    
    return value;
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#FEF9F0]">
      {/* Decorative Doodles */}
      <div className="absolute top-0 left-0 w-64 h-64 doodle-brain opacity-5 animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 doodle-abacus-beads opacity-5 animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 doodle-geometric opacity-5 animate-spin-slow pointer-events-none" />
      
      {/* Background Wave */}
      <div className="absolute top-0 left-0 w-full h-32 doodle-wave opacity-30" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#E6B17E] bg-[#E6B17E]/10 rounded-full">
            Our Achievements
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2A32] mb-4">
            Numbers That Speak
            <span className="block text-[#E6B17E]">Our Success Story</span>
          </h2>
          <p className="text-[#1E2A32]/70 text-base md:text-lg">
            With over 15 years of excellence in abacus education, these numbers reflect our commitment to nurturing young minds
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E6B17E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="mb-4 md:mb-6 text-[#E6B17E] transform transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="mb-2">
                <span className="stat-number-large text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E2A32]">
                  {inView ? formatValue(stat.id, counters[stat.id]) : "0"}
                </span>
                {stat.suffix && (
                  <span className="stat-number-large text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E2A32]">
                    {stat.suffix}
                  </span>
                )}
              </div>
              
              {/* Label */}
              <p className="text-[#1E2A32]/60 text-sm md:text-base font-medium">
                {stat.label}
              </p>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#E6B17E]/30 rounded-full group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#E6B17E]/20">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E6B17E]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#1E2A32]/60">ISO 9001:2015 Certified</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E6B17E]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#1E2A32]/60">Authorised by EBVTR Govt. of India</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-[#E6B17E]/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-[#1E2A32]/60">Listed in Wonder Book of International London</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;