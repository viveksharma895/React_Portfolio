import React from "react";
import { FaDownload } from "react-icons/fa";
import usePageMeta from "../lib/usePageMeta";

const experiences = [
  {
    year: "July, 2022 - Present",
    position: "Engineer Delivery (Frontend Lead)",
    company: "AGL - Hakuhodo",
    location: "Gurgaon, Haryana, India",
    description: [
      "Led frontend development for enterprise and automotive platforms using React.js, Angular, TypeScript, Tailwind CSS, and Material UI.",
      "Built scalable, responsive, and high-performance web applications while improving SEO, accessibility, and Core Web Vitals.",
      "Integrated GTM, Google Analytics, and event tracking to support data-driven marketing and business insights.",
      "Mentored frontend developers and collaborated with cross-functional teams to deliver user-centric digital solutions in Agile environments.",
    ],
  },
  {
    year: "July, 2018 - July, 2022",
    position: "Frontend Developer (Frontend Lead)",
    company: "AGL - Hakuhodo",
    location: "Gurgaon, Haryana, India",
    description: [
      "Built responsive and optimized websites using JavaScript, jQuery, HTML5, CSS3, Bootstrap, and Sitecore CMS.",
      "Developed and maintained e-commerce and campaign websites for leading automotive brands.",
      "Implemented GTM, Google Ads, and user behavior tracking to improve marketing performance and analytics.",
      "Enhanced website speed, usability, and SEO through performance optimization initiatives.",
      "Collaborated with designers, marketers, and backend teams to deliver business-focused digital solutions.",
    ],
  },
  {
    year: "July, 2016 - July, 2018",
    position: "Web designer",
    company: "AGL - Hakuhodo",
    location: "Gurgaon, Haryana, India",
    description: [
      "Designed and developed responsive websites using HTML5, CSS3, JavaScript, jQuery, and Bootstrap.",
      "Converted PSD and Figma designs into pixel-perfect, cross-browser compatible web pages.",
      "Customized and maintained WordPress, Magento, and OpenCart websites.",
      "Focused on UI/UX improvements, website optimization, and mobile-first design principles.",
      "Delivered clean, maintainable code while ensuring performance and accessibility standards.",
    ],
  },
];

const education = [
  {
    year: "2013 - 2016",
    degree: "Master of Computer Applications (MCA)",
    specialization: "Computer Engineering",
    university: "Sunrise University",
  },
  {
    year: "2009 - 2012",
    degree: "Bachelor of Computer Applications (BCA)",
    specialization: "Computer Engineering",
    university: "Maharshi Dayanand University (MDU)",
  },
  {
    year: "2009",
    degree: "High School Diploma",
    specialization: "",
    university: "HBSE, Haryana",
  },
];

const Resume = () => {
  usePageMeta(
    "Resume - Vivek Sharma | Frontend Engineer Delivery",
    "Experience, education and skills of Vivek Sharma, a Frontend Engineer Delivery with 8+ years building enterprise web applications."
  );

  return (
    <section className="bg-[#F6EBDD] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-14 md:mb-20">
          <div className="w-4 h-4 bg-blue-600"></div>
          <h1 className="text-4xl md:text-5xl font-bold">Resume</h1>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">Experience</h2>

          <a
            href="/Vivek_Sharma_Engineer_Delivery.docx"
            download
            className="mt-5 md:mt-0 bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experiences.map((item, index) => (
            <div key={index} className="bg-white shadow-xl p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-6 md:gap-10">
                {/* Left Side */}
                <div>
                  <h3 className="text-2xl font-bold textbasecolor mb-4">
                    {item.year}
                  </h3>

                  <h4 className="text-sm font-semibold uppercase mb-2">
                    {item.position}
                  </h4>

                  <p className="text-gray-700 mb-2">{item.company}</p>

                  <p className="text-gray-600">{item.location}</p>
                </div>

                {/* Right Side */}
                <div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {item.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="mt-20 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-12">Education</h2>

          <div className="space-y-10">
            {education.map((item, index) => (
              <div key={index} className="bg-white shadow-xl p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 md:gap-10">
                  <div>
                    <h3 className="text-3xl font-bold text-blue-600 mb-4">
                      {item.year}
                    </h3>

                    <h4 className="text-xl font-semibold uppercase">
                      {item.degree}
                    </h4>

                    {item.specialization && (
                      <p className="mt-2">{item.specialization}</p>
                    )}

                    <p className="text-gray-600 mt-2">{item.university}</p>
                  </div>

                  <div>
                    <p className="text-gray-700 leading-8">
                      Successfully completed {item.degree}
                      {item.specialization && ` in ${item.specialization}`},
                      gaining strong knowledge in software development,
                      programming concepts, databases, and web technologies.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
