import OurApporach from "@/components/Apporach/OurApporach";
import { BorderGradientButton } from "@/components/button/BorderGradientButton";
import { Experience } from "@/components/ExpericenceWork/Experience";
import FAQDemo from "@/components/FAQs/faq";
import { HeroSection } from "@/components/heroSection/hero-section-dark";
import { GlowingEffectDemo } from "@/components/keyPoints/KeyPoint";
import { Trust } from "@/components/TrustedBy/Trust";
import { Contact2 } from "@/components/Contact/contact-2";
import OurGoal from "@/components/Goals/OurGoal";
import { TestimonialDemo } from "@/components/Testimonials/TestimonialDemo";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { Pricing } from "@/components/Price/pricing-section-with-comparison";
import { HeroSection1 } from "@/components/heroSection/hero-section-1";
import GlowCardGrid from "@/components/keyPoints/GlowCardGrid";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <HeroSection1 />
      </section>

      <section className="container-prose section">
        {/* <GlowingEffectDemo /> */}
        <GlowCardGrid />
      </section>

      <section className="container-prose section">
        <OurApporach />
      </section>

      <section className="container-prose section">
        <div>Our Methodology Unveiled</div>
        <BorderGradientButton
          ctaText="Book Your Free Consultation"
          ctaHref="#"
        />
      </section>

      <section className="" id="services">
        <Experience />
      </section>

      <section className="container-prose section">
        <WhyChooseUs />
      </section>

      <section className="container-prose section">
        <TestimonialDemo />
      </section>

      <section className="container-prose section">
        <Trust />
      </section>

      <section className="container-prose section" id="about">
        About CodeQuint
      </section>

      <section>
        <OurGoal />
      </section>

      <section className="">
        <FAQDemo />
      </section>

      <section className="w-full">
        <Pricing />
      </section>

      <section className="container-prose section" id="contact">
        <Contact2
          title="Contact Us"
          description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
          phone="(123) 34567890"
          email="email@example.com"
          web={{
            label: "codequint.com",
            url: "https://www.codequint.com/",
          }}
        />
      </section>
    </main>
  );
}
