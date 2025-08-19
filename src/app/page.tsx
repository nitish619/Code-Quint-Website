import OurApporach from "@/components/Apporach/OurApporach";
import { BorderGradientButton } from "@/components/button/BorderGradientButton";
import { HeroSection } from "@/components/heroSection/hero-section-dark";
import { GlowingEffectDemo } from "@/components/keyPoints/KeyPoint";

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
        <BorderGradientButton
          ctaText="Book Your Free Consultation"
          ctaHref="#"
        />
      </section>
    </main>
  );
}
