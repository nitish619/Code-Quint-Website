import OurApporach from "@/components/Apporach/OurApporach";
import { BorderGradientButton } from "@/components/button/BorderGradientButton";
import { Experience } from "@/components/ExpericenceWork/Experience";
import FAQDemo from "@/components/FAQs/faq";
import { FeaturesSectionWithHoverEffects } from "@/components/WhyChooseUs/feature-section-with-hover-effects";
import { HeroSection } from "@/components/heroSection/hero-section-dark";
import { GlowingEffectDemo } from "@/components/keyPoints/KeyPoint";
import { Trust } from "@/components/TrustedBy/Trust";
import { Contact2 } from "@/components/Contact/contact-2";

export default function Home() {
  return (
    <main>
      <section>
        <HeroSection
          title="Welcome to Our Platform"
          subtitle={{
            regular: "Unlock your business's full potential ",
            gradient: "with our tailored digital marketing solutions",
          }}
          description="From SEO optimization to social media management, we have the tools to boost your online presence and drive growth."
          ctaText="Get Started"
          ctaHref="/signup"
          bottomImage={{
            light: "https://www.launchuicomponents.com/app-light.png",
            dark: "https://www.launchuicomponents.com/app-dark.png",
          }}
          gridOptions={{
            angle: 65,
            opacity: 0.4,
            cellSize: 50,
            lightLineColor: "#4a4a4a",
            darkLineColor: "#2a2a2a",
          }}
        />
      </section>
      <section className="container my-10">
        <GlowingEffectDemo />
      </section>
      <section className="container my-10">
        <OurApporach />
      </section>
      <section className="container my-10">
        <div>Our Methodology Unveiled</div>
        <BorderGradientButton
          ctaText="Book Your Free Consultation"
          ctaHref="#"
        />
      </section>
      <section className="">
        <Experience />
      </section>
      <section className="container my-10">
        <FeaturesSectionWithHoverEffects />
      </section>
      <section className="container my-10">testimonial</section>
      <section className="container my-10">
        <Trust />
      </section>
      <section className="container my-10">About CodeQuint</section>
      <section className="container my-10">
        goals
        <BorderGradientButton
          ctaText="Book Your Free Consultation"
          ctaHref="#"
        />
      </section>
      <section className="container my-10">
        <FAQDemo />
      </section>
      <section className="container my-10">
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
