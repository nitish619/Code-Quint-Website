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

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <HeroSection
          title="Welcome to Our Platform"
          subtitle={{
            regular: "Unlock your business's full potential ",
            gradient: "with our tailored digital marketing solutions",
          }}
          description="From SEO optimization to social media management, we have the tools to boost your online presence and drive growth."
          ctaText="Get Started"
          ctaHref="#contact"
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
      </section>

      <section className="container-prose section">
        <GlowingEffectDemo />
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
