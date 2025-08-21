"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  role: string;
  company?: string;
  testimonial: string;
  rating?: number;
  image?: string;
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  (
    {
      name,
      role,
      company,
      testimonial,
      rating = 5,
      image,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative flex flex-col justify-between h-full min-h-[350px] overflow-hidden rounded-2xl border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5 md:p-8",
          className
        )}
        {...props}
      >
        <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
          &quot;
        </div>

        <div>
          {/* === TOP: Star === */}
          <div className="flex gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={16}
                className={cn(
                  index < rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "fill-muted text-muted"
                )}
              />
            ))}
          </div>

          {/* === MIDDLE: Testimonial text === */}
          <p className="text-pretty text-base text-muted-foreground">
            {testimonial}
          </p>
        </div>

        {/* === BOTTOM: Avatar, Name, Role, Company === */}
        <div className="flex items-center gap-4 mt-6">
          {image && (
            <Avatar>
              <AvatarImage src={image} alt={name} height={48} width={48} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
          )}
          <div className="flex flex-col">
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">
              {role}
              {company && ` @ ${company}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
);
Testimonial.displayName = "Testimonial";

export { Testimonial };
