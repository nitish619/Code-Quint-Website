import React from "react";
import { GlowCard } from "./spotlight-card";

// Sample data for up to 3 boxes with heading and paragraph
const cardsData = [
  {
    heading: "Tailored solutions for your business",
    paragraph:
      "Our services are customized to fit the specific needs and goals of your business.",
  },
  {
    heading: "Maximize online visibility",
    paragraph:
      "Our SEO strategies will help your website rank higher in search engines, driving more traffic and leads to your business.",
  },
  {
    heading: "Customized marketing strategies",
    paragraph:
      "Our team will create a personalized plan to help your business thrive in the digital world.",
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
