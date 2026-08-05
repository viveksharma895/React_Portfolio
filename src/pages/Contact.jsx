import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useForm, ValidationError } from "@formspree/react";
import { contactSchema } from "../lib/schemas";
import usePageMeta from "../lib/usePageMeta";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [state, handleSubmit] = useForm("xgaweadq");

  usePageMeta(
    "Contact - Vivek Sharma | Frontend Engineer Delivery",
    "Get in touch with Vivek Sharma, Frontend Engineer Delivery in Gurgaon, India for web development projects and opportunities."
  );

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    handleSubmit(e);
  };

  return (
    <section className="bg-[#F6EBDD] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 mb-14 md:mb-20">
          <div className="w-4 h-4 bg-blue-600"></div>
          <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[40%_60%]">
          {/* Left: Contact Info */}
          <div className="bg-white shadow-xl p-6 md:p-10 flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center shrink-0">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Call Me</h4>
                <a
                  href="tel:+919717679664"
                  className="text-gray-600 hover:text-black transition"
                >
                  +91 9717679664
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center shrink-0">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email Me</h4>
                <a
                  href="mailto:hello@viveksharmacoder.in"
                  className="text-gray-600 hover:text-black transition"
                >
                  hello@viveksharmacoder.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-600">Gurgaon, Haryana, India</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-xl p-6 md:p-10">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full border px-4 py-3 outline-none focus:border-blue-600 transition ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full border px-4 py-3 outline-none focus:border-blue-600 transition ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Your Message"
                  className={`w-full border px-4 py-3 outline-none focus:border-blue-600 transition resize-none ${
                    errors.message ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700 transition disabled:opacity-50"
              >
                <FaPaperPlane />
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
