import React from "react";
import { GlowCard } from "./spotlight-card";
import { FaBullseye, FaRocket, FaChartLine } from "react-icons/fa";

const cardsData = [
  {
    heading: "Maximum Leads Conversions",
    paragraph:
      "From smart CTAs to optimised landing pages. Every element is crafted to turn your visitors into qualified leads.",
    icon: FaBullseye,
  },
  {
    heading: "Performance & User Experience",
    paragraph:
      "A slow or confusing website costs you business. Our websites are fast-loading, mobile-friendly, and ensure visitors stay longer and engage more with your brand.",
    icon: FaRocket,
  },
  {
    heading: "Growth & ROI-Driven Strategy",
    paragraph:
      "We integrate analytics, automation, and scalable solutions that deliver measurable results and maximise your return on investment.",
    icon: FaChartLine,
  },
];

const GlowCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardsData.map(({ heading, paragraph, icon: Icon }, index) => (
        <GlowCard key={index} size="md">
          <Icon className="text-4xl text-primary mb-4" />
          <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
          <p className="text-base text-muted-foreground mb-6">{paragraph}</p>
        </GlowCard>
      ))}
    </div>
  );
};

export default GlowCardGrid;
