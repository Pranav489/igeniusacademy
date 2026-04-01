"use client";

import Link from "next/link";
import Image from "next/image";
import { companyInfo, footerLinks } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const SocialIcon = ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-[#E6B17E]/10 hover:bg-[#E6B17E] text-[#1E2A32] hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      aria-label="Social media link"
    >
      {children}
    </a>
  );

  return (
    <footer className="bg-[#1E2A32] text-[#FEF9F0] relative overflow-hidden">
      {/* Decorative doodle elements */}
      <div className="absolute top-0 left-0 w-64 h-64 doodle-brain opacity-5 animate-float pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 doodle-abacus-beads opacity-5 animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 doodle-geometric opacity-5 animate-spin-slow pointer-events-none" />

      {/* Main Footer Content */}
      <div className="section-container-sm relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info Column */}
          <div className="space-y-4">
            <div className="relative h-14 w-48">
              <Image
                src="/images/igenius-logo.png"
                alt={companyInfo.fullName}
                width={192}
                height={56}
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-[#FEF9F0]/70 text-sm leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="space-y-2 text-sm text-[#FEF9F0]/70">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{companyInfo.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-[#E6B17E] transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#E6B17E] transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#E6B17E] rounded-full mt-1" />
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#FEF9F0]/70 hover:text-[#E6B17E] text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#E6B17E] transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Our Courses
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#E6B17E] rounded-full mt-1" />
            </h3>
            <ul className="space-y-2">
              {footerLinks.courses.map((course) => (
                <li key={course.name}>
                  <Link
                    href={course.href}
                    className="text-[#FEF9F0]/70 hover:text-[#E6B17E] text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#E6B17E] transition-all duration-200" />
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media & Social Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Media
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#E6B17E] rounded-full mt-1" />
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.media.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#FEF9F0]/70 hover:text-[#E6B17E] text-sm transition-colors duration-200 inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#E6B17E] transition-all duration-200" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <SocialIcon href={companyInfo.social.facebook}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </SocialIcon>
                <SocialIcon href={companyInfo.social.instagram}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </SocialIcon>
                <SocialIcon href={companyInfo.social.youtube}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                </SocialIcon>
                <SocialIcon href={companyInfo.social.whatsapp}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.5 12a9.5 9.5 0 01-9.5 9.5 9.44 9.44 0 01-4.67-1.24L3 21.5l1.23-4.29A9.5 9.5 0 1112 21.5zm0-9.5a7.5 7.5 0 10-7.5 7.5 7.5 7.5 0 007.5-7.5z" />
                    <path d="M12 7.5v3.5h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Row */}
        <div className="mt-12 pt-8 border-t border-[#FEF9F0]/10">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-xs text-[#FEF9F0]/60">{companyInfo.iso}</span>
            </div>
            <div className="w-px h-4 bg-[#FEF9F0]/20" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              <span className="text-xs text-[#FEF9F0]/60">{companyInfo.authorization}</span>
            </div>
            <div className="w-px h-4 bg-[#FEF9F0]/20" />
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#E6B17E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-xs text-[#FEF9F0]/60">{companyInfo.worldRecord}</span>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="mt-8 pt-6 border-t border-[#FEF9F0]/10 text-center">
          <p className="text-xs text-[#FEF9F0]/50">
            © {currentYear} {companyInfo.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-[#FEF9F0]/40 mt-1">
            Established in {companyInfo.founded} | ISO Certified | Govt. Authorized
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;