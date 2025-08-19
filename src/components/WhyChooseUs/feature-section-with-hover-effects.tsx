import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "At CodeQuint, we prioritize quality over quantity",
      description:
        "We’re not just about completing tasks or accumulating clients. Instead, we focus on delivering top-notch work and fostering long-term partnerships with a select group of clients. Our commitment to excellence means that we never take on more projects than we can handle, ensuring that each client receives our undivided attention.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "We're results-driven, just like you",
      description:
        "Your brand and website are more than just assets—they’re critical business decisions. Unlike other agencies that chase fleeting trends, we prioritize user-centric design that delivers real, measurable results. Our creations are not only visually stunning but also strategically crafted to drive engagement and conversions.",
      icon: <IconTerminal2 />,
    },
    {
      title: "All-in-One Convenience",
      description:
        "Managing branding, website development, content creation, and ongoing maintenance can be overwhelming. That’s why we offer comprehensive services under one roof, saving you time and hassle while ensuring seamless integration across all aspects of your online presence.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Tailored Solutions",
      description:
        "Your business is unique, and your brand and website should reflect that. At CodeQuint, we specialize in creating bespoke solutions that are tailor-made to fit your specific goals, brand identity, and target audience.",
      icon: <IconCloud />,
    },
  ];
  return (
    <div>
      <div>
        <h2 className="head-h2">
          Why <span className="text-purple-600">CodeQuint?</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
      <div className="bg-purple-400/20 text-primary p-6 rounded-lg mx-auto shadow-lg">
        <h2 className="head-h2 mb-2">Unleash the Fire 🔥</h2>
        <p>
          I’m here to ensure your project stands out—bold, blazing, and
          undeniably cool. Let’s ignite your success together.
        </p>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
