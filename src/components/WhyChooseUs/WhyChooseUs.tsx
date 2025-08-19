import React from "react";
import { FaShieldAlt, FaUsers, FaBullseye, FaClock } from "react-icons/fa";

const data = [
  {
    icon: <FaShieldAlt size={40} className="text-white" />,
    title: "Warranty",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaUsers size={40} className="text-white" />,
    title: "People",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaBullseye size={40} className="text-white" />,
    title: "Aim",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaClock size={40} className="text-white" />,
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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          aliquam impedit non vel vero dolorem.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="border border-transparent p-6 rounded-lg text-white transform transition duration-300 ease-in-out hover:border-white hover:scale-105 flex flex-col"
            style={{
              background:
                "linear-gradient(to bottom, #3a1573 10%, #000000 65%)",
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
