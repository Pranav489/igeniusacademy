"use client";

import { useState } from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: "certified",
      title: "Govt. Authorized & ISO Certified",
      description: "I-Genius is ISO 9001:2015 Certified and authorized by the Educational Board of Vocational Training & Research, Govt. of India, ensuring quality education you can trust.",
      longDescription: "Our certifications validate our commitment to excellence. Being government-authorized means we follow stringent quality standards, and our ISO certification reflects our dedication to continuous improvement in educational delivery.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-[#E6B17E] to-[#D49C6C]",
      stats: "ISO 9001:2015 | EBVTR Authorized",
    },
    {
      id: "expertise",
      title: "15+ Years of Excellence",
      description: "With over 15 years of experience in abacus education, we have developed proven methodologies that have successfully trained over 1.5 lakh students.",
      longDescription: "Since 2007, we've been pioneering abacus education across India. Our experience has allowed us to refine our teaching methods, develop comprehensive curriculum, and understand exactly what works best for different age groups.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-[#2F9B8C] to-[#24796D]",
      stats: "Est. 2007 | 1.5L+ Students",
    },
    {
      id: "trainers",
      title: "50+ Qualified Trainers",
      description: "Our strong team of highly motivated and well-trained teachers are math experts dedicated to nurturing young minds.",
      longDescription: "Each trainer undergoes rigorous training and certification before teaching. They are not just instructors but mentors who understand child psychology and adapt teaching methods to suit individual learning styles.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      color: "from-[#C7B9A2] to-[#B5A58B]",
      stats: "50+ Expert Trainers",
    },
    {
      id: "network",
      title: "Pan-India Network",
      description: "550+ franchisees across India and abroad, with 165+ school project associations reaching thousands of students.",
      longDescription: "Our extensive network ensures quality abacus education is accessible to students everywhere. From metropolitan cities to rural areas, we're making a difference in communities across the country.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-[#1E3A5F] to-[#2C5282]",
      stats: "550+ Franchisees | 165+ Schools",
    },
    {
      id: "study-material",
      title: "Child-Friendly Study Material",
      description: "Well-researched books developed for different age groups, child-friendly abacus tools, and engaging board games.",
      longDescription: "Our materials are designed by child development experts to make learning fun and effective. Age-appropriate content ensures that students stay engaged while building strong foundations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-[#E6B17E] to-[#D49C6C]",
      stats: "Age-Group Based Books",
    },
    {
      id: "competitions",
      title: "National & International Competitions",
      description: "We organize District, State, National, and International level competitions to eliminate exam fear and create masters in maths.",
      longDescription: "Our students gain invaluable experience competing with peers from across the country and abroad. These competitions build confidence, reduce exam anxiety, and prepare students for academic excellence.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-[#2F9B8C] to-[#24796D]",
      stats: "District to International Levels",
    },
  ];

  const benefits = [
    {
      title: "Whole Brain Development",
      description: "Stimulates both sides of the brain for balanced cognitive growth",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Flexible Learning Options",
      description: "Choose between online and offline classes as per your convenience",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Proven Track Record",
      description: "1.5 lakh+ successful students trust our methodology",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Affordable Excellence",
      description: "Quality education at competitive prices with scholarship options",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Decorative Doodles */}
      <div className="absolute top-20 right-10 w-80 h-80 doodle-brain opacity-5 animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 doodle-abacus-beads opacity-5 animate-float pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-56 h-56 doodle-geometric opacity-5 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 doodle-lightbulb opacity-5 animate-pulse-soft pointer-events-none" />
      
      {/* Background Wave */}
      <div className="absolute bottom-0 left-0 w-full h-32 doodle-wave opacity-20 transform rotate-180" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#E6B17E] bg-[#E6B17E]/10 rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2A32] mb-4">
            What Makes I-Genius
            <span className="block text-gradient-primary">The Best Choice</span>
          </h2>
          <p className="text-[#1E2A32]/70 text-base md:text-lg">
            Discover the unique advantages that set us apart as India's most trusted abacus education provider
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-[#FEF9F0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              onMouseEnter={() => setActiveFeature(index)}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-[#1E2A32] mb-2">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#1E2A32]/70 text-sm mb-4">
                {feature.description}
              </p>
              
              {/* Stats Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#E6B17E]/10 text-[#E6B17E] text-xs font-medium">
                {feature.stats}
              </div>
              
              {/* Decorative Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-[#E6B17E]/30 rounded-full group-hover:w-20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Featured Highlight Section */}
        <div className="bg-[#FEF9F0] rounded-2xl p-8 md:p-10 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${features[activeFeature]?.color} flex items-center justify-center mx-auto mb-6 text-white`}>
              {features[activeFeature]?.icon}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E2A32] mb-4">
              {features[activeFeature]?.title}
            </h3>
            <p className="text-[#1E2A32]/70 text-base md:text-lg leading-relaxed mb-6">
              {features[activeFeature]?.longDescription}
            </p>
            <div className="inline-flex items-center gap-2 text-sm text-[#E6B17E] font-medium">
              <span>{features[activeFeature]?.stats}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1E2A32] mb-8">
            Additional Benefits
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E6B17E]/20 to-[#E6B17E]/5 flex items-center justify-center mx-auto mb-4 text-[#E6B17E] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-[#1E2A32] mb-2">
                  {benefit.title}
                </h4>
                <p className="text-[#1E2A32]/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#E6B17E]/10 to-[#2F9B8C]/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#1E2A32] mb-3">
              Ready to Unlock Your Child's Potential?
            </h3>
            <p className="text-[#1E2A32]/70 mb-6 max-w-2xl mx-auto">
              Join thousands of parents who have witnessed their children's transformation through our proven abacus training methodology
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#E6B17E] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#D49C6C] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center gap-2"
              >
                Enroll Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-transparent border-2 border-[#E6B17E] text-[#E6B17E] font-semibold rounded-full transition-all duration-300 hover:bg-[#E6B17E] hover:text-white hover:-translate-y-0.5 active:translate-y-0"
              >
                Free Demo Class
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-svg w-full mt-16" />
      </div>
    </section>
  );
};

export default WhyChooseUs;