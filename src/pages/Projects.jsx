import React from "react";
import usePageMeta from "../lib/usePageMeta";

const projects = [
  {
    name: "Pulse Shift",
    role: "Lead / Sole Frontend Developer",
    description:
      "A real-time brand measurement platform delivering survey-based insights, brand lift studies, and audience analytics for marketers.",
    image:
      "https://pulseshift-dev.aglprojects.co.in/images/Pulse_shift_logo_orange.svg",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "REST APIs",
      "Zod",
      "Meta API",
    ],
    responsibilities: [
      "Led end-to-end frontend development, converting Figma designs into responsive and reusable UI components.",
      "Implemented authentication, social logins, REST API integrations, and seamless data flow with backend services.",
      "Applied Zod validation and optimized performance, accessibility, and cross-browser compatibility.",
      "Owned the complete frontend lifecycle while collaborating with design and backend teams.",
    ],
  },
  {
    name: "Maruti Suzuki India Pvt. Ltd.",
    role: "Frontend Team Lead",
    description:
      "Multi-channel digital ecosystem supporting product launches, e-commerce modules, and customer engagement platforms for Maruti Suzuki India.",
    image:
      "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:791b5601-4cfa-4b0f-a77b-ec588eba84ad/as/Maruti-suzuki_logo_v1.svg",
    techStack: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap", "GTM"],
    responsibilities: [
      "Led frontend development for product launches, e-commerce modules, registration forms, and campaign pages.",
      "Developed responsive and scalable features using JavaScript, jQuery, Bootstrap, and validation frameworks.",
      "Integrated analytics, tracking, and third-party tools to support marketing campaigns.",
      "Mentored a team of 4–5 frontend developers and ensured timely project delivery.",
    ],
  },
  {
    name: "TVS Motor Company Ltd.",
    role: "Frontend Team",
    description:
      "Multi-channel digital ecosystem supporting vehicle launches, customer engagement, dealer networks, and digital marketing initiatives for TVS Motor Company.",
    image:
      "https://www.tvsmotor.com/tvs-jupiter/-/media/Feature/Header/TVSLogo-hr.svg",
    techStack: ["JavaScript", "HTML5", "CSS3", "jQuery", "Bootstrap", "GTM"],
    responsibilities: [
      "Led frontend development for product launches, e-commerce modules, registration forms, and campaign pages.",
      "Developed responsive and scalable features using JavaScript, jQuery, Bootstrap, and validation frameworks.",
      "Integrated analytics, tracking, and third-party tools to support marketing campaigns.",
    ],
  },
];

const Projects = () => {
  usePageMeta(
    "Projects - Vivek Sharma | Frontend Engineer Delivery",
    "Enterprise-grade projects by Vivek Sharma including Pulse Shift, Maruti Suzuki India and TVS Motor Company built with React, Next.js and TypeScript."
  );

  return (
    <section className="bg-[#F6EBDD] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-4 h-4 bg-blue-600"></div>
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
        </div>

        {/* Intro */}
        <p className="max-w-3xl mx-auto text-center text-lg leading-8 mb-20">
          Showcasing enterprise-grade, automotive, and digital transformation
          projects built to deliver scalable architectures, seamless user
          experiences, and high-performance web solutions.
        </p>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
                {/* Left Content */}
                <div className="p-6 md:p-16 flex flex-col justify-center relative">
                  <div className="absolute left-0 top-16 w-3 h-12 bg-blue-600"></div>

                  <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {project.name}
                  </h3>

                  <h4 className="text-lg md:text-xl font-medium mb-8">{project.role}</h4>

                  <div>
                    <p className="text-gray-700 leading-8 mb-6">
                      {project.description}
                    </p>

                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-8">
                      {project.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="max-w-full flex items-center justify-center h-[300px] md:h-[500px]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="max-w-[80%] h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
