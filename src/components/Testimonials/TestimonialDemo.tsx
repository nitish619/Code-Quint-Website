import { TestimonialCarousel } from "./TestimonialCarousel";

function TestimonialDemo() {
  return (
    <div className="py-10">
      <h2 className="head-h2">
        We come <span className="text-purple-600">highly</span> recommended.
      </h2>
      <div className="mt-4">
        <TestimonialCarousel />
      </div>
    </div>
  );
}

export { TestimonialDemo };
