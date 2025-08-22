import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 w-full">
          <p className="text-gray-400 text-base mb-2">About us</p>
          <h2 className="text-4xl font-extrabold mb-4">
            Our Architectural Journey
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Founded with a belief in the transformative power of architecture,
            VerdeVista Design Group traces its roots back to a small team with
            big dreams.
          </p>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="border-t-4 border-yellow-400 pt-4">
              <h3 className="text-2xl font-bold mb-1">
                50+ years
              </h3>
              <p className="text-gray-500 text-base">
                of shaping architectural landscapes
              </p>
            </div>
            <div className="border-t-4 border-yellow-400 pt-4">
              <h3 className="text-2xl font-bold mb-1">
                100+ Projects
              </h3>
              <p className="text-gray-500 text-base">
                successfully delivered with excellence
              </p>
            </div>
            <div className="border-t-4 border-yellow-400 pt-4">
              <h3 className="text-2xl font-bold mb-1">
                20+ Awards
              </h3>
              <p className="text-gray-500 text-base">
                won, underscoring our dedication to innovative
              </p>
            </div>
            <div className="border-t-4 border-yellow-400 pt-4">
              <h3 className="text-2xl font-bold mb-1">
                99% Success
              </h3>
              <p className="text-gray-500 text-base">
                reflects our client-centric approach.
              </p>
            </div>
          </div>
        </div>
        {/* Right Side: Image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <Image
            src="/services/web.jpg"
            alt="Team discussing architecture"
            className="w-full max-w-lg rounded-xl object-cover shadow"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
