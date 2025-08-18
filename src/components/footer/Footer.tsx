import React from "react";
import { FaFacebookSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <section className="h-auto bg-gray-100 py-10 relative overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none py-5">
          <span
            className="text-gray-300 text-[10rem] font-extrabold select-none"
            style={{ lineHeight: 1, userSelect: "none" }}
            aria-hidden="true"
          >
            CODEQUINT
          </span>
        </div>

        {/* Foreground Content */}
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="mb-4 font-semibold text-gray-900">Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://www.codequint.com/seo-service/"
                    className="hover:text-blue-600"
                  >
                    SEO Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/web-development-2/"
                    className="hover:text-blue-600"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/website-maintenance/"
                    className="hover:text-blue-600"
                  >
                    Website Maintenance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-gray-900">About</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://www.codequint.com/work/"
                    className="hover:text-blue-600"
                  >
                    Work
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/about/"
                    className="hover:text-blue-600"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/reviews/"
                    className="hover:text-blue-600"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-gray-900">
                Policies & Support
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://www.codequint.com/disclaimer/"
                    className="hover:text-blue-600"
                  >
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/terms-of-service/"
                    className="hover:text-blue-600"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/privacy-policy/"
                    className="hover:text-blue-600"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/customer-support/"
                    className="hover:text-blue-600"
                  >
                    Customer Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.codequint.com/cancellation-refund-policy/"
                    className="hover:text-blue-600"
                  >
                    Cancellation & Refund Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-gray-900">Get in touch</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a
                    href="https://www.codequint.com/contact/"
                    className="hover:text-blue-600"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@codequint.com"
                    className="hover:text-blue-600"
                  >
                    info@codequint.com
                  </a>
                </li>
              </ul>

              <div className="flex space-x-4 mt-4 text-gray-700 text-2xl">
                <a
                  href="https://www.codequint.com/#"
                  aria-label="Facebook"
                  className="hover:text-blue-600"
                >
                  <FaFacebookSquare />
                </a>
                <a
                  href="https://www.codequint.com/#"
                  aria-label="Linkedin"
                  className="hover:text-blue-600"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.codequint.com/#"
                  aria-label="YouTube"
                  className="hover:text-blue-600"
                >
                  <FaYoutubeSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="text-center space-y-2 py-6 text-sm">
          <p className="text-[14px]">
            Copyright © 2024 CodeQuint. All rights reserved.
          </p>
          <p className="text-[10px]">
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 hover:text-red-600"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 hover:text-red-600"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
