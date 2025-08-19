import React from "react";
import { styles } from "@/utils/style";
import { FaCode, FaPencilRuler } from "react-icons/fa";

const experiences = [
  {
    logo: <FaCode size={30} className="text-white" />,
    title: "Web Developer",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias fugit eligendi voluptas? Similique, cum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias fugit eligendi voluptas? Similique, cum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias fugit eligendi voluptas? Similique, cum?",
    ],
  },
  {
    logo: <FaPencilRuler size={30} className="text-white" />,
    title: "UI/UX Designer",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias fugit eligendi voluptas? Similique, cum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias fugit eligendi voluptas? Similique, cum?",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum molestias fugit eligendi voluptas? Similique, cum?",
    ],
  },
];

const OurServices = () => {
  return (
    <section id="experience" className="mx-auto">
      <div className="container">
        <div className="m-4">
          <p className={`${styles.sectionSubText} text-left md:text-center`}>
            What I have done so far
          </p>
          <h2 className={`${styles.sectionHeadText} text-left md:text-center`}>
            Our Services
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute w-1 h-full bg-primary md:left-1/2 left-4 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center flex-col ml-6 pl-6 md:ml-0 md:items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="absolute md:left-1/2 -left-10 flex items-center justify-center w-16 h-16 rounded-full bg-gray-700 border-4 border-white shadow-lg z-10 transform md:-translate-x-1/2">
                  <div className="rounded-full">{exp.logo}</div>
                </div>
                <div className="w-full md:w-5/12 lg:w-5/12 bg-gray-200 dark:bg-gray-800 p-6 mt-6 md:mt-0 ml-10 md:ml-0 md:mr-6 rounded-lg shadow-lg border-b-4 text-primary">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {exp.title}
                  </h3>
                  <ul className="mt-1 md:mt-5 list-disc ml-5 space-y-2">
                    {(Array.isArray(exp.description)
                      ? exp.description
                      : [exp.description]
                    ).map((points, index) => (
                      <li
                        key={index}
                        className="text-white-100 text-[12px] md:text-[14px] pl-1 tracking-wider"
                      >
                        {points}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
