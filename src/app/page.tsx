import OurApporach from "@/components/Apporach/OurApporach";
import { BorderGradientButton } from "@/components/button/BorderGradientButton";
import { Experience } from "@/components/ExpericenceWork/Experience";
import FAQDemo from "@/components/FAQs/faq";
import { Trust } from "@/components/TrustedBy/Trust";
import { Contact2 } from "@/components/Contact/contact-2";
import OurGoal from "@/components/Goals/OurGoal";
import { TestimonialDemo } from "@/components/Testimonials/TestimonialDemo";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { Pricing } from "@/components/Price/pricing-section-with-comparison";
import GlowCardGrid from "@/components/keyPoints/GlowCardGrid";
import { HeroSection1 } from "@/components/heroSection/hero-section";
import { Icons } from "@/components/ui/icons";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <HeroSection1
          badge={{
            text: "Introducing our new components",
            action: {
              text: "Learn more",
              href: "/docs",
            },
          }}
          title="Build faster with beautiful components"
          description="Premium UI components built with React and Tailwind CSS. Save time and ship your next project faster with our ready-to-use components."
          actions={[
            {
              text: "Get Started",
              href: "/docs/getting-started",
              variant: "default",
            },
            {
              text: "GitHub",
              href: "https://github.com/your-repo",
              variant: "glow",
              icon: <Icons.gitHub className="h-5 w-5" />,
            },
          ]}
        />
      </section>

      <section className="container-prose section">
        {/* <GlowingEffectDemo /> */}
        <GlowCardGrid />
      </section>

      <section className="container-prose section" id="approach">
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

      <section className="section">
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

      <section className="w-full" id="price">
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
