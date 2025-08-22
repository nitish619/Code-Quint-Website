import React from "react";
import { BorderGradientButton } from "../button/BorderGradientButton";

function OurGoal() {
  return (
    <div className="bg-gray-600/20 min-h-9/12">
      <div className="container">
        <div className="flex flex-col justify-center space-y-8 py-12">
          <div className="space-y-6 text-primary">
            <p className="text-xl">Clear Goals, Uncertain Paths.</p>
            <h2 className="head-h2">
              Captivate. <span className="text-purple-600">Impress.</span>{" "}
              Convert.
            </h2>
            <p className="text-xl">
              Navigating the digital landscape can be uncertain. Let me guide
              you seamlessly.
            </p>
          </div>
          <BorderGradientButton
            ctaText="Let's do it."
            ctaHref="#"
            className="flex justify-start"
          />
        </div>
      </div>
    </div>
  );
}

export default OurGoal;
