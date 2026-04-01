"use client";

import Image from "next/image";
import Link from "next/link";

const CourseSection = () => {
  const courses = [
    {
      id: "abacus",
      title: "Abacus Mental Arithmetic",
      subtitle: "Whole Brain Development Program",
      ageGroup: "4-14 Years",
      levels: "8 Levels",
      duration: "3-4 months per level",
      description: "Complete brain development program that enhances concentration, memory, and calculation speed through visual arithmetic techniques. The course is divided into Basic, Advance, and Master courses with 8 progressive levels.",
      features: [
        "Whole brain development",
        "Improved concentration & memory",
        "Faster calculation speed",
        "Boosts confidence",
        "Enhances problem-solving skills",
      ],
      curriculum: [
        { name: "Basic Course", details: "Jr. Kg to 2nd Std - Beginner, Elementary, Intermediate" },
        { name: "Advance Course", details: "1st to 4th Std - Level 1, 2, 3" },
        { name: "Master Course", details: "5th to 6th Std - Level 4, 5, 6" },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-[#E6B17E] to-[#D49C6C]",
      bgColor: "bg-[#E6B17E]/5",
      image: "/images/274799.png",
    },
    {
      id: "vedic",
      title: "Vedic Mathematics",
      subtitle: "Ancient Indian Calculation System",
      ageGroup: "1st Std & Above",
      duration: "1 Month (Weekly 2 Hours)",
      description: "Discover the power of 16 sutras and 13 sub-sutras that make complex calculations simple, fast, and accurate. Master addition, subtraction, multiplication, division, square roots, and cube roots with ancient techniques.",
      features: [
        "10x faster calculations",
        "Mental math mastery",
        "Simplifies complex problems",
        "Builds speed & accuracy",
        "Competitive exam preparation",
      ],
      curriculum: [
        { name: "Addition & Subtraction", details: "Fast calculation techniques" },
        { name: "Multiplication & Division", details: "Advanced sutras" },
        { name: "Square & Cube Roots", details: "Quick mental calculations" },
        { name: "Higher Mathematics", details: "Algebra, Geometry applications" },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-[#2F9B8C] to-[#24796D]",
      bgColor: "bg-[#2F9B8C]/5",
      image: "/images/792345.png",
    },
    {
      id: "rubik",
      title: "Rubik's Cube",
      subtitle: "3-D Combination Puzzle Mastery",
      ageGroup: "1st Std & Above",
      duration: "1 Month (Weekly 2 Hours)",
      description: "Learn to solve the world's most popular puzzle while developing critical thinking, patience, and problem-solving skills. Master the cube and unlock cognitive benefits that extend beyond the puzzle.",
      features: [
        "Enhances problem-solving",
        "Increases logical thinking",
        "Boosts patience & perseverance",
        "Improves eye-hand coordination",
        "Reduces screen time",
      ],
      curriculum: [
        { name: "Basic Cube Solving", details: "Layer by layer method" },
        { name: "Advanced Algorithms", details: "Speed cubing techniques" },
        { name: "Pattern Recognition", details: "Complex cube patterns" },
        { name: "Competition Training", details: "Time optimization" },
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16M7 4v16M12 4v16M17 4v16" />
        </svg>
      ),
      color: "from-[#C7B9A2] to-[#B5A58B]",
      bgColor: "bg-[#C7B9A2]/5",
      image: "/images/881984.png",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#FEF9F0]">
      {/* Decorative Doodles */}
      <div className="absolute top-10 left-10 w-64 h-64 doodle-brain opacity-5 animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 doodle-abacus-beads opacity-5 animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-56 h-56 doodle-geometric opacity-5 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 doodle-lightbulb opacity-5 animate-pulse-soft pointer-events-none" />
      
      {/* Background Wave */}
      <div className="absolute top-0 left-0 w-full h-32 doodle-wave opacity-20" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-[#E6B17E] bg-[#E6B17E]/10 rounded-full">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E2A32] mb-4">
            Discover Our Courses
            <span className="block text-gradient-primary">Choose the Right Path</span>
          </h2>
          <p className="text-[#1E2A32]/70 text-base md:text-lg">
            From abacus to Vedic maths, we offer comprehensive programs designed for holistic brain development
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Course Image */}
              <div className="relative h-56 overflow-hidden">
                <div className="video-thumbnail h-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                      {course.icon}
                    </div>
                    <span className="text-white text-sm font-medium bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full">
                      {course.ageGroup}
                    </span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1E2A32] mb-1">
                  {course.title}
                </h3>
                <p className="text-[#E6B17E] text-sm font-medium mb-3">
                  {course.subtitle}
                </p>
                <p className="text-[#1E2A32]/60 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Duration/Levels */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[#E6B17E]/20">
                  <div className="flex items-center gap-1 text-xs text-[#1E2A32]/60">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  {course.levels && (
                    <>
                      <div className="w-1 h-1 rounded-full bg-[#E6B17E]" />
                      <div className="flex items-center gap-1 text-xs text-[#1E2A32]/60">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <span>{course.levels}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  {course.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-[#1E2A32]/70">
                      <svg className="w-4 h-4 text-[#E6B17E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full bg-[#E6B17E]/10 text-[#E6B17E] font-medium transition-all duration-300 group-hover:bg-[#E6B17E] group-hover:text-white"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-[#E6B17E] text-[#E6B17E] font-semibold rounded-full transition-all duration-300 hover:bg-[#E6B17E] hover:text-white hover:-translate-y-0.5 active:translate-y-0"
          >
            View All Courses
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Divider */}
        <div className="divider-svg w-full mt-16" />
      </div>
    </section>
  );
};

export default CourseSection;