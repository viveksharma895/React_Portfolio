import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-200 pt-6 pb-6 text-gray-600">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-6 md:flex-row">
        {/* Left Section */}
        <div className="text-sm text-gray-800">
          <p>© 2026 by Vivek Sharma</p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-start gap-12">
          {/* Call */}
          <div>
            <h4 className="mb-2 font-semibold">Call</h4>
            <a
              href="tel:+911234567890"
              className="text-sm text-gray-700 hover:text-black"
            >
              +91 9717679664
            </a>
          </div>

          {/* Email */}
          <div>
            <h4 className="mb-2 font-semibold">Write</h4>
            <a
              href="mailto:hello@viveksharmacoder.in"
              className="text-sm text-gray-700 hover:text-black"
            >
              hello@viveksharmacoder.in
            </a>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-2 font-semibold">Follow</h4>

            <div className="flex gap-2">
              <a
                href="https://www.facebook.com/sham.vivek/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
              >
                <FaFacebookF className="text-sm sm:text-base" />
              </a>
              <a
                href="https://x.com/vivek_sham"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
              >
                <FaTwitter className="text-sm sm:text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/viveksharmadeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
              >
                <FaLinkedinIn className="text-sm sm:text-base" />
              </a>
              <a
                href="https://www.instagram.com/sham.vivek/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-gray-100 text-black transition-all duration-300 hover:bg-black hover:text-white sm:h-10 sm:w-10"
              >
                <FaInstagram className="text-sm sm:text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-700"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
