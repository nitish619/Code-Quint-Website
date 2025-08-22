import React from "react";
import { FaShieldAlt, FaUsers, FaBullseye, FaClock } from "react-icons/fa";
import { Badge } from "../ui/badge";

const data = [
  {
    icon: <FaShieldAlt size={40} className="text-primary" />,
    title: "Business approach to development",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaUsers size={40} className="text-primary" />,
    title: "Advanced 16 years Expertise",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaBullseye size={40} className="text-primary" />,
    title: "Lifetime Code Warranty",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
  {
    icon: <FaClock size={40} className="text-primary" />,
    title: "Enhanced business value of products",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus dignissimos dicta sed unde?",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <div className="flex text-center justify-center items-center gap-4 flex-col mb-4">
        <Badge>Why Us?</Badge>
        <div className="flex gap-2 flex-col justify-center items-center">
          <h2 className="text-center head-h2">
            Why Choose <span className="text-purple-600">Our Team</span>
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Discover the unique strengths that set our team apart.
          </p>
        </div>
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
