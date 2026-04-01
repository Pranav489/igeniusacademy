"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRefs = useRef({});
  const intervalRef = useRef(null);
  const sliderRef = useRef(null);

  const totalSlides = slides.length;

  // Function to manage video playback when slide changes
  const manageVideosOnSlideChange = useCallback(() => {
    // Pause all videos
    Object.values(videoRefs.current).forEach(video => {
      if (video && !video.paused) {
        video.pause();
      }
    });

    // Play current video if it's a video slide
    const currentSlide = slides[currentIndex];
    const currentVideo = videoRefs.current[currentIndex];

    if (currentSlide?.type === "video" && currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(e => console.log("Video autoplay prevented:", e));
    }
  }, [currentIndex, slides]);

  // Handle video playback when slide changes
  useEffect(() => {
    manageVideosOnSlideChange();
    setIsVideoLoading(false);
  }, [currentIndex, manageVideosOnSlideChange]);

  // Auto-play logic
  useEffect(() => {
    if (autoPlayInterval && isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, autoPlayInterval, isAutoPlaying]);

  // Clean up videos when component unmounts
  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach(video => {
        if (video && !video.paused) {
          video.pause();
        }
      });
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsVideoLoading(true);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    // Do NOT touch video playback when toggling auto-play
    // Videos continue playing regardless of auto-slide state
  };

  // Register video ref without causing re-renders
  const registerVideoRef = useCallback((index, element) => {
    if (element && videoRefs.current[index] !== element) {
      videoRefs.current[index] = element;
    }
  }, []);

  // YouTube video embed component
  const YouTubeEmbed = ({ videoId, isActive }) => {
    return (
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=${isActive ? 1 : 0}&mute=1&controls=0&loop=1&playlist=${videoId}&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    );
  };

  // Local video component
  const LocalVideo = ({ src, isActive, index, onVideoRef }) => {
    const videoRef = useRef(null);

    useEffect(() => {
      if (videoRef.current) {
        onVideoRef(index, videoRef.current);
      }
    }, [index, onVideoRef]);

    useEffect(() => {
      // Handle video playback based ONLY on whether this slide is active
      // Do NOT depend on auto-play state
      if (videoRef.current) {
        if (isActive) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(e => console.log("Video play prevented:", e));
        } else {
          if (!videoRef.current.paused) {
            videoRef.current.pause();
          }
        }
      }
    }, [isActive]);

    return (
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    );
  };

  // Image background component
  const ImageBackground = ({ src, alt }) => {
    return (
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
    );
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full overflow-hidden"
      style={{ height: "70vh" }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            height: 50vh !important;
          }
        }
      `}</style>

      {/* Slides Container */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="flex w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full h-full"
            >
              {/* Background Media */}
              {slide.type === "youtube" ? (
                <YouTubeEmbed videoId={slide.videoId} isActive={index === currentIndex} />
              ) : slide.type === "video" ? (
                <LocalVideo
                  src={slide.src}
                  isActive={index === currentIndex}
                  index={index}
                  onVideoRef={registerVideoRef}
                />
              ) : (
                <ImageBackground src={slide.src} alt={slide.title || slide.alt || "Hero slide"} />
              )}

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="section-container text-white z-10">
                  <div className="max-w-4xl mx-auto">
                    {/* Animated Content */}
                    <div className="transform transition-all duration-700 ease-out translate-y-0 opacity-100">
                      {slide.badge && (
                        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-[#E6B17E]/20 backdrop-blur-sm rounded-full border border-[#E6B17E]/30">
                          {slide.badge}
                        </span>
                      )}
                      
                      {slide.title && (
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
                          {slide.title}
                        </h1>
                      )}
                      
                      {slide.subtitle && (
                        <p className="text-base md:text-lg lg:text-xl mb-6 text-white/90 max-w-2xl mx-auto">
                          {slide.subtitle}
                        </p>
                      )}
                      
                      {slide.description && (
                        <p className="text-sm md:text-base mb-8 text-white/80 max-w-2xl mx-auto">
                          {slide.description}
                        </p>
                      )}
                      
                      {slide.cta && (
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link
                            href={slide.cta.href}
                            className="px-6 md:px-8 py-2.5 md:py-3 bg-[#E6B17E] text-white font-semibold rounded-full transition-all duration-300 hover:bg-[#D49C6C] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2 text-sm md:text-base"
                          >
                            {slide.cta.text}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                          {slide.secondaryCta && (
                            <Link
                              href={slide.secondaryCta.href}
                              className="px-6 md:px-8 py-2.5 md:py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white hover:text-[#1E2A32] hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center text-sm md:text-base"
                            >
                              {slide.secondaryCta.text}
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center z-20 group"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center z-20 group"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Play/Pause Button (for auto-slide) */}
      {totalSlides > 1 && autoPlayInterval && (
        <button
          onClick={toggleAutoPlay}
          className="absolute bottom-6 left-6 z-20 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      )}

      {/* Dots Navigation */}
      {totalSlides > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-6 h-2 bg-[#E6B17E]"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Video Loading Indicator */}
      {isVideoLoading && slides[currentIndex]?.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-30">
          <div className="w-10 h-10 border-3 border-white/30 border-t-[#E6B17E] rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default HeroSection;