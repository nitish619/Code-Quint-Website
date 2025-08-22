import React from "react";

const timelineData = [
  {
    title: "Project study",
    description:
      "We analyze your objectives, the target to which we address, and we study your competition. Based on the study, we present you a winning web project and digital marketing strategy.",
  },
  {
    title: "Web design",
    description:
      "Our web designers will want to know your preferences and industry references. They will propose you a custom web design of the main pages of your future website, which we will discuss, amend, and approve.",
  },
  {
    title: "Web programming",
    description:
      "Our web programmers create the web code so that it responds to the proposed design, and incorporates all the necessary functionalities. We perform quality and security tests of the page.",
  },
  {
    title: "SEO",
    description:
      "From a keyword research and a strategy that we will have agreed upon, we prepare the basics of the website to be crawled by search engines.",
  },
  // Add more items if needed
];

const OurApproach = () => (
  <div>
    <div className="m-4">
      {/* <p className={`${styles.sectionSubText} text-left md:text-center`}>
            What I have done so far
          </p> */}
      <h2 className="head-h2 text-center">Our Apporach</h2>
    </div>
    {/* Standing (vertical) line: center on md+, left on mobile */}
    <div className="relative w-full max-w-6xl mx-auto py-20">
      <div className="absolute top-0 left-6 md:left-1/2 w-1 h-full bg-gray-300 -translate-x-1/2 md:translate-x-0 z-0" />
      <div className="flex flex-col gap-10 relative z-10">
        {timelineData.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className="flex w-full relative md:min-h-[120px]">
              {/* Desktop left half */}
              <div
                className={`flex-1 hidden md:flex ${
                  isLeft ? "justify-end" : "justify-start"
                }`}
              >
                {isLeft && (
                  <div className="flex">
                    {/* Heading */}
                    <div className="text-right max-w-sm">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-4 text-gray-600">{item.description}</p>
                    </div>
                    {/* Horizontal (sleeping) line */}
                    <div className="w-12 h-0.5 bg-gray-300 mx-4 mt-4" />
                    {/* Number */}
                    <span className="text-2xl font-bold text-primary px-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}
              </div>
              {/* Center: timeline and dot */}
              <div className="flex flex-col z-10 ml-4 md:ml-0 lg:ml-1 mt-2">
                <span className="block w-4 h-4 bg-gray-700 rounded-full border-4 border-white z-20"></span>
              </div>
              {/* Desktop right half */}
              <div
                className={`flex-1 hidden md:flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {!isLeft && (
                  <div className="flex">
                    {/* Number */}
                    <span className="text-2xl font-bold text-primary px-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {/* Horizontal (sleeping) line */}
                    <div className="w-12 h-0.5 bg-gray-300 mx-4 mt-4" />
                    {/* Heading */}
                    <div className="text-left max-w-sm">
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-4 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Mobile View: always right of vertical line */}
              <div className="md:hidden flex-1 flex pl-4">
                {/* Number */}
                <span className="text-xl font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Horizontal (sleeping) line */}
                <div className="w-20 h-0.5 bg-gray-300 mx-2 mt-3" />
                {/* Heading and description */}
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-gray-600 text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default OurApproach;
