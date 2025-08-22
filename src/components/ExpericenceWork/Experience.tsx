"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Web Development",
    description:
      "Build scalable, responsive, and high-performance websites and web applications tailored to your business needs. Our expert developers use the latest technologies to deliver robust solutions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white">
        Web Development
      </div>
    ),
  },
  {
    title: "Mobile Development",
    description:
      "Create intuitive and engaging mobile applications for both iOS and Android platforms. We focus on delivering seamless user experiences along with high performance and reliability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] flex items-center justify-center text-white">
        Mobile Development
      </div>
    ),
  },
  {
    title: "SEO",
    description:
      "Optimize your website to rank higher in search engine results and attract more organic traffic. We implement proven SEO strategies tailored to your industry and goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        SEO
      </div>
    ),
  },
  {
    title: "Web Maintenance",
    description:
      "Ensure your website stays up-to-date, secure, and running smoothly with our reliable maintenance services. We handle updates, backups, security monitoring, and performance optimization.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Web Maintenance
      </div>
    ),
  },
  {
    title: "WordPress Development",
    description:
      "Custom WordPress website design and development tailored to your unique requirements. We build SEO-friendly, easy-to-manage, and visually appealing WordPress sites.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white">
        WordPress Development
      </div>
    ),
  },
];

export function Experience() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
