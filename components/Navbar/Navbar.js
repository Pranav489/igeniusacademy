"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FEF9F0]/95 backdrop-blur-md shadow-sm"
          : "bg-[#FEF9F0]"
      }`}
    >
      <div className="section-container-sm py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0">
            <div className="relative h-12 w-auto md:h-14 lg:h-16">
              <Image
                src="/images/igenius-logo.png"
                alt="I-Genius Abacus Academy"
                width={180}
                height={64}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1 xl:gap-2">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="dropdown-container relative"
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`group flex items-center gap-1 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full hover:bg-[#E6B17E]/10 ${
                        activeDropdown === item.name
                          ? "text-[#E6B17E]"
                          : isActive(item.href)
                          ? "text-[#2F9B8C]"
                          : "text-[#1E2A32] hover:text-[#E6B17E]"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-[#FEF9F0] rounded-2xl shadow-lg py-2 animate-fadeInUp origin-top">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2.5 text-sm transition-all duration-200 ${
                              isActive(subItem.href)
                                ? "text-[#2F9B8C] bg-[#2F9B8C]/5"
                                : "text-[#1E2A32] hover:text-[#E6B17E] hover:bg-[#E6B17E]/5"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive(item.href)
                        ? "text-[#2F9B8C] bg-[#2F9B8C]/5"
                        : "text-[#1E2A32] hover:text-[#E6B17E] hover:bg-[#E6B17E]/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#E6B17E] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[#D49C6C] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#E6B17E]/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-5">
              <span
                className={`absolute left-0 w-full h-0.5 bg-[#1E2A32] rounded-full transition-all duration-300 ${
                  isOpen ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-0.5 bg-[#1E2A32] rounded-full transition-all duration-300 top-1/2 -translate-y-1/2 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-0.5 bg-[#1E2A32] rounded-full transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full bg-[#FEF9F0] shadow-lg transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[calc(100vh-72px)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="section-container-sm py-4 overflow-y-auto max-h-[calc(100vh-72px)]">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-[#E8E2D9] last:border-0">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full py-3 text-[#1E2A32] font-medium"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name ? "max-h-96 pb-2" : "max-h-0"
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block py-2 pl-4 text-sm transition-all duration-200 ${
                            isActive(subItem.href)
                              ? "text-[#2F9B8C]"
                              : "text-[#1E2A32]/70 hover:text-[#E6B17E]"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-3 text-[#1E2A32] font-medium transition-all duration-200 ${
                      isActive(item.href) ? "text-[#2F9B8C]" : "hover:text-[#E6B17E]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-[#E6B17E] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#D49C6C]"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation keyframes inline */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;