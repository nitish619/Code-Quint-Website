import { Logos3 } from "@/components/TrustedBy/logos3";

const Data = {
  heading: "Trusted by these companies",
  logos: [
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
};

function Trust() {
  return <Logos3 {...Data} />;
}

export { Trust };
