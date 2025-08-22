import { Badge } from "../ui/badge";
import { TestimonialCarousel } from "./TestimonialCarousel";

function TestimonialDemo() {
  return (
    <div className="">
      <div className="flex text-center justify-center items-center gap-4 flex-col mb-4">
        <Badge>Testimonial</Badge>
        <div className="flex gap-2 flex-col justify-center items-center">
          <h2 className="text-center head-h2">
            We come <span className="text-purple-600">highly</span> recommended.
          </h2>
          <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
            Hear directly from our happy customers and partners.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <TestimonialCarousel />
      </div>
    </div>
  );
}

export { TestimonialDemo };
