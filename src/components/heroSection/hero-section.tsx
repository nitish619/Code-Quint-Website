"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "glow";
}

interface HeroProps {
  badge?: {
    text: string;
    action: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
}

export function HeroSection1({
  badge,
  title,
  description,
  actions,
}: HeroProps) {
  const gradientHeightPercent = 50;

  const { resolvedTheme } = useTheme();

  const isLightTheme = resolvedTheme === "light";

  const gradientBackground = isLightTheme
    ? `radial-gradient(
        ellipse at center bottom,
        rgba(162, 40, 227, 1) 0%,
        rgba(255, 255, 255, 1) 55%
      )`
    : `radial-gradient(
        ellipse at center bottom,
        rgba(162, 40, 227, 1) 0%,
        rgba(30, 22, 9, 0.5) 55%,
        rgba(0,0,0,0.96) 100%
      )`;

  return (
    <section
      className={cn(
        "relative bg-background text-foreground",
        "py-12 sm:py-24 md:py-32 px-4",
        "fade-bottom overflow-hidden pb-0"
      )}
    >
      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: `${gradientHeightPercent}%`,
          pointerEvents: "none",
          background: `${gradientBackground}`,
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
          transform: "translateY(30%)", // optionally lift it up a bit to shape the curve nicely
          zIndex: 0,
        }}
      />

      <div className="mx-auto flex max-w-container flex-col gap-12 pt-16 sm:gap-24 relative z-10">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              {actions.map((action, index) => (
                <Button
                  key={index}
                  variant={
                    action.variant === "glow" ? "default" : action.variant
                  }
                  size="lg"
                  asChild
                >
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
