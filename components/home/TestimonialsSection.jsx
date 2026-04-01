"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const TestimonialsSection = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleItems + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleItems : prev - 1
    );
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-[#E6B17E]" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleItems
  );

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Decorative Doodles */}
      <div className="absolute top-20 right-10 w-80 h-80 doodle-brain opacity-5 animate-float pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 doodle-abacus-beads opacity-5 animate-float pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-56 h-56 doodle-geometric opacity-5 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 doodle-lightbulb opacity-5 animate-pulse-soft pointer-events-none" />

      {/* Background Quote Marks */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none transform rotate-180">
        <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#E6B17E] bg-[#E6B17E]/10 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2A32] mb-4">
            What Parents Say
            <span className="block text-gradient-primary">About I-Genius Academy</span>
          </h2>
          <p className="text-[#1E2A32]/70 text-base md:text-lg">
            Join 1.5 lakh+ happy parents who have witnessed their children's transformation
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {testimonials.length > visibleItems && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl text-[#1E2A32] hover:text-[#E6B17E] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl text-[#1E2A32] hover:text-[#E6B17E] flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Testimonials Grid */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-[#FEF9F0] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className="w-8 h-8 text-[#E6B17E]/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-[#1E2A32]/70 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                      "{testimonial.text}"
                    </p>

                    {/* Parent Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[#E6B17E]/20">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1E2A32]">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-[#1E2A32]/60">
                          {testimonial.role} • {testimonial.child}
                        </p>
                        <p className="text-xs text-[#E6B17E] mt-0.5">
                          {testimonial.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          {testimonials.length > visibleItems && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: testimonials.length - visibleItems + 1 }).map(
                (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentIndex === index
                        ? "w-6 h-2 bg-[#E6B17E]"
                        : "w-2 h-2 bg-[#E6B17E]/30 hover:bg-[#E6B17E]/50"
                    }`}
                    aria-label={`Go to testimonial group ${index + 1}`}
                  />
                )
              )}
            </div>
          )}

          {/* Auto-play Toggle */}
          {testimonials.length > visibleItems && (
            <div className="flex justify-center mt-4">
              <button
                onClick={toggleAutoPlay}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FEF9F0] text-xs text-[#1E2A32]/60 hover:text-[#E6B17E] transition-colors"
                aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
              >
                {isAutoPlaying ? (
                  <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Play</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* Overall Rating Summary */}
        <div className="mt-12 pt-8 border-t border-[#E6B17E]/20">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="stat-number-large text-4xl font-bold text-[#1E2A32]">
                  4.9
                </div>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#E6B17E]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#1E2A32]/60 mt-1">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1E2A32]">150,000+</p>
                <p className="text-sm text-[#1E2A32]/60">Happy Students</p>
              </div>
            </div>
            <Link
              href="/media/testimonials"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-[#E6B17E] text-[#E6B17E] font-semibold rounded-full transition-all duration-300 hover:bg-[#E6B17E] hover:text-white"
            >
              Read More Testimonials
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-svg w-full mt-12" />
      </div>
    </section>
  );
};

export default TestimonialsSection;