import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

function AboutMe() {
  return (
    <section className="min-h-[80vh] bg-[#e6d9ce]">
      <div className="relative min-h-[80vh]">
        {/* Desktop split background (1366px+) */}
        <div className="hidden xl:grid absolute inset-0 grid-cols-[40%_60%]">
          <div className="bg-[#e6d9ce]" />
          <div className="bg-white" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-[80vh] items-center justify-center px-4 py-8 lg:px-6 lg:py-12">
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 lg:flex-row lg:gap-0">
            {/* Profile Card */}
            <div className="w-full max-w-[280px] shrink-0 overflow-hidden bg-[#f3ebe4] shadow-2xl sm:max-w-[320px] md:max-w-[350px]">
              <div className="flex flex-col items-center p-6 sm:p-8 lg:p-10">
                <img
                  src="/Newuser.webp"
                  alt="Vivek Sharma - Frontend Engineer Delivery"
                  loading="lazy"
                  className="h-36 w-36 rounded-full object-cover sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-60 lg:w-60"
                />

                <h2 className="mt-6 text-center text-xl font-bold uppercase text-black sm:mt-8 sm:text-2xl">
                  Vivek Sharma
                </h2>
                <div className="my-6 h-[2px] w-16 bg-blue-600 sm:my-8" />
                <p className="text-center text-xs font-semibold uppercase tracking-[6px] text-gray-700 sm:text-sm">
                  Engineer Delivery
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 bg-white py-4 sm:gap-4 sm:py-5">
                <a
                  href="https://www.linkedin.com/in/viveksharmadeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="https://github.com/viveksharma895"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.instagram.com/sham.vivek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com/sham.vivek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://x.com/vivek_sham"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative w-full max-w-full px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
              <Link
                to="/projects"
                aria-label="Go to Projects"
                className="animate-float absolute right-2 top-2 z-10 w-20 sm:right-4 sm:w-24 md:w-28 lg:w-32"
              >
                <img
                  src="/Projects_text.webp"
                  alt="Projects"
                  fetchPriority="high"
                  width="141"
                  height="148"
                  className="w-full"
                />
              </Link>
              <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Good Day Everyone
              </h1>

              <h3 className="mt-3 text-lg font-medium sm:mt-4 sm:text-xl md:text-2xl">
                Here's who I am & what I do
              </h3>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                <a
                  href="/Vivek_Sharma_Engineer_Delivery.docx"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white sm:px-8 sm:py-3 sm:text-base"
                >
                  RESUME
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>

              <p className="mt-8 leading-7 text-gray-700 sm:mt-10 sm:leading-8">
                Currently working at <b>AdGlobal360 Hakuhodo</b>, Ltd. as a{" "}
                <span className="textbasecolor font-semibold">
                  Engineer Delivery
                </span>{" "}
                with 8+ years of experience building scalable web applications
                for enterprise clients, including Tata Motors and Maruti Suzuki.
                Expertise in React.js, Next.js, TypeScript, and modern frontend
                development, with hands-on experience in Node.js and MongoDB.
                Proven track record of delivering high-performance, SEO-friendly
                applications and collaborating effectively with cross-functional
                teams in Agile environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/919717679664"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </section>
  );
}

export default AboutMe;
