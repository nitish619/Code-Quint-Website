import React from "react";
import { FaShieldAlt, FaUsers, FaBullseye, FaClock } from "react-icons/fa";

const data = [
  {
    icon: <FaShieldAlt size={40} className="text-primary" />,
    title: "Warranty",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaUsers size={40} className="text-primary" />,
    title: "People",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaBullseye size={40} className="text-primary" />,
    title: "Aim",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaClock size={40} className="text-primary" />,
    title: "Clock",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="head-h2">
          Why Choose <span className="text-purple-600">Our Team</span>
        </h2>
        <p className="text-left md:text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aliquam impedit non vel vero dolorem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="rounded-lg text-primary transform duration-300 ease-in-out hover:scale-105 flex flex-col border border-primary/10 bg-background p-6 transition-all hover:shadow-lg dark:hover:shadow-primary/5"
            style={{
              background: "transparent",
              // "linear-gradient(to bottom, #31283d 10%, #000000 65%)",
            }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm">{item.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
