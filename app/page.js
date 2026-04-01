import StatsSection from "@/components/home/StatsSection";
import AboutSection from "@/components/home/AboutSection";
import CoursesSection from "@/components/home/CoursesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import ClassModeSection from "@/components/home/ClassModeSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import { buildMetadata } from "@/utils/seoConfig";
import HeroSection from "@/components/home/HeroSection";
import { heroSlides, testimonials } from "@/lib/data";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return (
    <>
      <HeroSection
        slides={heroSlides} 
        autoPlayInterval={5000} 
      />
      <StatsSection />
      <AboutSection />
      <CoursesSection />
      <WhyChooseUs />
      <ClassModeSection />
      <TestimonialsSection testimonials={testimonials}/>
      <CTASection />
    </>
  );
}
