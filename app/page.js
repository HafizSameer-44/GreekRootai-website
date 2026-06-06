"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const faqs = [
    {
      question: "What services does GreekRoot Ai provide?",
      answer:
        "We build AI websites, AI agents, automation systems and futuristic digital experiences.",
    },
    {
      question: "Do you create custom AI solutions?",
      answer:
        "Yes, we create fully custom AI-powered solutions for startups and businesses.",
    },
    {
      question: "Is the website responsive?",
      answer:
        "Yes, every section is fully responsive for desktop, tablet and mobile.",
    },
    {
      question: "How fast can you build a project?",
      answer:
        "Landing pages and AI websites can be completed within days depending on requirements.",
    },
  ];

  return (
    <main
      className={`${
        darkMode
          ? "bg-[#04110A] text-white"
          : "bg-white text-black"
      } duration-500 overflow-hidden`}
    >
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 border-b backdrop-blur-xl ${
          darkMode
            ? "bg-[#04110A]/95 border-green-600/20"
            : "bg-white/95 border-gray-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-7 text-xs md:text-sm">

            <a href="#portfolio" className="hover:text-green-500 duration-300">
              Portfolio
            </a>

            <a href="#about" className="hover:text-green-500 duration-300">
              About
            </a>

            <a href="#services" className="hover:text-green-500 duration-300">
              Services
            </a>

            <a href="#pricing" className="hover:text-green-500 duration-300">
              Pricing
            </a>

            <a href="#faq" className="hover:text-green-500 duration-300">
              FAQ
            </a>

            <a
              href="/contact"
              className="border border-green-600 px-5 py-2 rounded-full hover:bg-green-600 hover:text-white duration-300"
            >
              Contact
            </a>

            {/* THEME BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full border border-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white duration-300"
            >
              {darkMode ? "☼" : "☾"}
            </button>

          </nav>

        </div>
      </header>

      {/* HERO */}
      <section
        className="min-h-screen flex items-center justify-center text-center px-6"
      >

        <div className="max-w-5xl">

          <p className="text-green-500 font-bold uppercase tracking-[8px] text-xs mb-8">
            FUTURE OF AI
          </p>

          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">

            Building Future
            <br />

            <span className="text-green-500 font-bold">
              With AI
            </span>

          </h1>

          <p className="text-sm md:text-base leading-8 opacity-80 max-w-3xl mx-auto mb-12">

            GreekRoot Ai creates futuristic AI websites,
            automation systems, AI agents and modern digital
            experiences for startups and businesses.

          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">

            <a
              href="/contact"
              className="bg-green-600 text-white px-10 py-4 rounded-full font-semibold hover:scale-105 duration-300"
            >
              Get Started
            </a>

            <a
              href="#services"
              className="border border-green-600 px-10 py-4 rounded-full hover:bg-green-600 hover:text-white duration-300"
            >
              Learn More
            </a>

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >

        <div className="max-w-7xl w-full">

          <div className="text-center mb-20">

            <p className="text-green-500 font-bold uppercase tracking-[6px] text-xs mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Featured Projects
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "Jarvis AI Assistant",
              "AI Automation System",
              "Modern SaaS Website",
            ].map((project, index) => (

              <div
                key={index}
                className={`rounded-3xl p-10 border hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-[#081510] border-green-600/20"
                    : "bg-[#f8f8f8] border-gray-300"
                }`}
              >

                <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center text-green-500 text-2xl mb-6">
                  ✦
                </div>

                <h3 className="text-2xl font-bold mb-5 text-green-500">
                  {project}
                </h3>

                <p className="text-sm leading-8 opacity-80 mb-8">

                  Premium futuristic AI solution built with
                  modern technologies and responsive design.

                </p>

                <button className="border border-green-600 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white duration-300 text-sm">
                  View Project
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 py-32"
      >
        <div className="max-w-6xl text-center">

          <p className="text-green-500 font-bold uppercase tracking-[7px] text-xs mb-6">
            About GreekRoot Ai
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-12 leading-tight">

            We Build Powerful
            <br />

            <span className="text-green-500 font-bold">
              AI Experiences
            </span>

          </h2>

          <p className="text-base md:text-xl leading-10 opacity-90 max-w-4xl mx-auto mb-16">

            GreekRoot Ai is a futuristic AI company focused on building
            premium websites, intelligent AI agents, automation systems,
            modern SaaS platforms and next-generation digital experiences.

            <br />
            <br />

            Our mission is to help startups, creators and businesses
            transform ideas into smart AI-powered solutions with
            clean design, fast performance and modern technology.

          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >

        <div className="max-w-7xl w-full">

          <div className="text-center mb-20">

            <p className="text-green-500 font-bold uppercase tracking-[6px] text-xs mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              What We Create
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              "AI Websites",
              "AI Agents",
              "Automation",
              "SaaS Platforms",
              "Modern UI/UX",
              "Business Solutions",
            ].map((service, index) => (

              <div
                key={index}
                className={`rounded-3xl p-10 border hover:-translate-y-2 duration-300 ${
                  darkMode
                    ? "bg-[#081510] border-green-600/20"
                    : "bg-[#f8f8f8] border-gray-300"
                }`}
              >

                <div className="w-14 h-14 rounded-2xl bg-green-600/10 flex items-center justify-center text-green-500 text-2xl mb-6">
                  ✦
                </div>

                <h3 className="text-2xl font-bold mb-5 text-green-500">
                  {service}
                </h3>

                <p className="text-sm leading-8 opacity-80">

                  Premium futuristic digital solutions built
                  with modern AI technologies.

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >

        <div className="max-w-7xl w-full">

          <div className="text-center mb-20">

            <p className="text-green-500 font-bold uppercase tracking-[6px] text-xs mb-4">
              Pricing
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Simple Pricing
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Starter",
                price: "$99",
                features: ["Landing Page", "Responsive Design", "Fast Delivery"],
              },
              {
                title: "Professional",
                price: "$299",
                features: ["AI Website", "Animations", "Premium UI"],
              },
              {
                title: "Enterprise",
                price: "$999",
                features: ["AI Agent", "Automation", "Custom Solution"],
              },
            ].map((plan, index) => (

              <div
                key={index}
                className={`rounded-3xl p-10 border hover:scale-105 duration-300 ${
                  darkMode
                    ? "bg-[#081510] border-green-600/20"
                    : "bg-[#f8f8f8] border-gray-300"
                }`}
              >

                <h3 className="text-3xl font-black mb-4 text-green-500">
                  {plan.title}
                </h3>

                <h2 className="text-5xl font-black mb-8">
                  {plan.price}
                </h2>

                <div className="space-y-4 mb-10">

                  {plan.features.map((feature, i) => (

                    <p key={i} className="text-sm opacity-80">
                      ✔ {feature}
                    </p>

                  ))}

                </div>

                <button className="w-full bg-green-600 text-white py-4 rounded-full hover:scale-105 duration-300">
                  Choose Plan
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="min-h-screen flex items-center justify-center px-6 py-24"
      >

        <div className="max-w-4xl w-full">

          <div className="text-center mb-16">

            <p className="text-green-500 font-bold uppercase tracking-[6px] text-xs mb-4">
              FAQ
            </p>

            <h2 className="text-4xl md:text-6xl font-black">
              Frequently Asked Questions
            </h2>

          </div>

          <div className="space-y-5">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className={`rounded-2xl overflow-hidden border ${
                  darkMode
                    ? "bg-[#081510] border-green-600/20"
                    : "bg-[#f8f8f8] border-gray-300"
                }`}
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-6 text-left"
                >

                  <h3 className="text-sm md:text-lg font-semibold">
                    {faq.question}
                  </h3>

                  <span
                    className={`text-3xl text-green-500 transition duration-300 ${
                      openFaq === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    openFaq === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 text-sm leading-8 opacity-80">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}