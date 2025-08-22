import React from "react";
import { GlowCard } from "./spotlight-card";

// Sample data for up to 3 boxes with heading and paragraph
const cardsData = [
  {
    heading: "Maximum Leads Conversions",
    paragraph:
      "From smart CTAs to optimised landing pages. Every element is crafted to turn your visitors into qualified leads.",
  },
  {
    heading: "Performance & User Experience",
    paragraph:
      "A slow or confusing website costs you business. Our websites are fast-loading, mobile-friendly, and ensure visitors stay longer and engage more with your brand.",
  },
  {
    heading: "Growth & ROI-Driven Strategy",
    paragraph:
      "We integrate analytics, automation, and scalable solutions that deliver measurable results and maximise your return on investment.",
  },
];

const GlowCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
      {cardsData.map(({ heading, paragraph }, index) => (
        <GlowCard
          key={index}
          size="md"
          className="flex flex-col justify-center items-center text-center p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
          <p className="text-base text-muted-foreground">{paragraph}</p>
        </GlowCard>
      ))}
    </div>
  );
};

export default GlowCardGrid;
