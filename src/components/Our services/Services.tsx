import Image from "next/image";
import React from "react";

const customServices = [
  {
    title: "Mobile",
    subtitle: "Development",
    img: "/services/AppDev.jpg",
  },
  {
    title: "Web",
    subtitle: "Development",
    img: "/services/web.jpg",
  },
  {
    title: "Wordpress",
    subtitle: "Development",
    img: "/services/wordpress.jpg",
  },
  {
    title: "SEO",
    subtitle: "Consultant",
    img: "/services/seo.jpg",
  },
  {
    title: "Software",
    subtitle: "Development",
    img: "/services/software.jpg",
  },
];

const Services = () => (
  <div className="px-4 py-12">
    {/* Header */}
    <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">
      OUR SERVICES
    </h2>
    <p className="max-w-2xl mx-auto text-center text-primary mb-12 text-base md:text-lg">
      Mercury seamlessly integrates into your business workflow whether you are
      looking to create a new application, or need help with development and/or
      QA of your existing solution. We provide teams capable of increasing the
      velocity of your development and extending your technical capabilities.
    </p>
    {/* Services Icons Row */}
    <div className="flex flex-wrap justify-center gap-y-10 gap-x-8 md:gap-x-16">
      {customServices.map((service) => (
        <div key={service.title} className="flex flex-col items-center w-32">
          {/* Service Icon */}
          <div className="mb-4">
            <Image
              src={service.img}
              alt={service.title}
              className="w-24 h-24 rounded-full object-cover bg-primary shadow-md"
              width={100}
              height={100}
            />
          </div>
          {/* Service Title + Subtitle */}
          <div className="text-center">
            <span className="block text-sm md:text-base text-primary font-semibold">
              {service.title}
            </span>
            <span className="block text-lg md:text-base font-bold text-primary">
              {service.subtitle}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Services;
