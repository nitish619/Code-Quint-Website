"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CustomDropdown from "./CustomDropdown";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "shadcnblocks.com", url: "https://shadcnblocks.com" },
}: Contact2Props) => {
  const [service, setService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload

    setIsSubmitting(true);

    // Simulate submission or execute async operation, e.g., API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted!");
    }, 2000);
  };

  return (
    <section className="py-20">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-5 lg:flex-row">
        <div className="flex max-w-full lg:max-w-lg flex-col justify-between gap-10">
          <div className="text-center lg:text-left">
            <h2 className="head-h2">{title}</h2>
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="mx-auto w-fit lg:mx-0">
            <h3 className="mb-6 text-center lg:text-left">Contact Details</h3>
            <ul className="ml-4 list-disc">
              <li>
                <span className="font-bold">Phone: </span>
                {phone}
              </li>
              <li>
                <span className="font-bold">Email: </span>
                <a href={`mailto:${email}`} className="underline">
                  {email}
                </a>
              </li>
              <li>
                <span className="font-bold">Web: </span>
                <a href={web.url} target="_blank" className="underline">
                  {web.label}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6 rounded-lg border p-10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="firstname">First Name</Label>
              <Input type="text" id="firstname" placeholder="First Name" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="lastname">Last Name</Label>
              <Input type="text" id="lastname" placeholder="Last Name" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>

            {/* Phone Number */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                pattern="[0-9]*"
                inputMode="numeric"
                onKeyDown={(e) => {
                  if (
                    !(
                      (e.key >= "0" && e.key <= "9") ||
                      [
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Delete",
                        "Tab",
                      ].includes(e.key)
                    )
                  ) {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>

          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="subject">Subject</Label>
            <Input type="text" id="subject" placeholder="Subject" />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {/* Services */}
            <CustomDropdown
              label="Services"
              id="services"
              options={[
                { value: "web-dev", label: "Web Development" },
                { value: "mobile-dev", label: "Mobile Development" },
                { value: "uiux", label: "UI/UX Design" },
              ]}
              value={service}
              onChange={setService}
            />

            {/* Website URL */}
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="website">Website URL</Label>
              <Input
                type="url"
                id="website"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>

          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">Message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
};
