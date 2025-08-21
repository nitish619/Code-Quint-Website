"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { styles } from "@/utils/style";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Astro",
      image: "/tech/docker.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-2",
      description: "Figma",
      image: "/tech/figma.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-3",
      description: "Next.js",
      image: "/tech/nextjs.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-4",
      description: "React",
      image: "/tech/reactjs.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-5",
      description: "git",
      image: "/tech/git.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-6",
      description: "typescript",
      image: "/tech/typescript.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-7",
      description: "Tailwind CSS",
      image: "/tech/tailwind.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-8",
      description: "JavaScript",
      image: "/tech/javascript.png",
      className: "h-20 w-auto",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="py-0">
      <div className="container flex flex-col items-center text-center">
        <h1 className={`${styles.sectionHeadText} text-left md:text-center`}>
          {heading}
        </h1>
      </div>
      <div className="pt-10 overflow-hidden">
        <div className="relative mx-auto flex items-center justify-center max-w-full">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        src={logo.image}
                        width={150}
                        height={150}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
