import React from "react";
import aboutImg from "../img/aboutImg.jpg";
import { motion } from "framer-motion";

// Main About component
const About = () => {
  // URL for the CV file to be downloaded
  const fileUrl = "./Erick Ribeiro CV EN.pdf";

  return (
    // Main container for the About section with gradient background and flex settings
    <div className="relative pt-16 sm:pt-10 sm:px-8 md:px-8 lg:px-12 flex flex-col items-center sm:justify-evenly min-h-screen sm:h-screen w-full sm:w-screen bg-gradient-to-b from-black to-cyan-500">
      {/* Flex container for image and text */}
      <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:space-x-8 md:w-10/12 lg:w-10/12 mb-10 sm:mb-0">
        {/* Motion container for image with animation */}
        <motion.div
          className="sm:h-full sm:w-full md:w-auto md:h-auto flex justify-center items-center"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          {/* 3D image */}
          <img
            src={aboutImg}
            alt="3D guy"
            className="rounded-full w-64 h-64 sm:w-full sm:h-4/6 lg:h-72 object-cover"
          />
        </motion.div>

        {/* Motion container for text content with animation */}
        <motion.div
          className="px-3 sm:px-0 lg:w-8/12"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Section title */}
          <h1 className="cursor-default text-center sm:text-left text-3xl py-3 sm:pb-3 montserrat-font primary-color">
            About me
          </h1>

          {/* Description text */}
          <p className="text-white text-lg px-6 sm:px-0 py-3 sm:py-0 mb-6 sm:mb-3 bg-black/30 sm:bg-transparent backdrop-blur-lg sm:backdrop-blur-none rounded-lg">
            I'm a Computer Engineer and Full-Stack developer, specialized in
            creating custom, performance-optimized websites that make your brand
            stand out. <br />
            Each project is tested and refined to maximize conversions and
            results. <br />
            If you're looking for a developer focused on your product's success,
            let's take action now.
          </p>

          {/* CV download button styled as link */}
          <div className="flex items-center justify-center sm:justify-start">
            <a
              type="button"
              className="rounded-full py-2 sm:py-2 px-5 sm:px-5 bg-white text-black shadow-lg transition ease-in-out duration-200 hover:scale-110"
              href={fileUrl} // link to open the CV PDF
              target="_blank"
              rel="noopener noreferrer" // security feature to prevent other sites from controlling the new tab
            >
              Open CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Motion container for skills section */}
      <motion.div
        className="cursor-default grid grid-flow-row sm:grid-flow-col sm: bg-black/70 text-center border-2 border-cyan-400 rounded-3xl text-white montserrat-font mb-10 sm:mb-0 md:w-11/12 lg:w-10/12"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        {/* Frontend skills column */}
        <div className="px-10 py-3 border-b-2 sm:border-b-0 sm:border-r-2 border-cyan-400">
          <i className="fa-brands fa-html5 text-3xl text-cyan-600"></i>
          <h3 className="text-lg font-bold">Frontend</h3>
          <hr className="border-4 rounded-xl border-cyan-400 my-2 mb-3" />
          <ul className="text-sm font-light">
            <li className="pb-0.5">HTML5</li>
            <li className="pb-0.5">CSS3</li>
            <li className="pb-0.5">Javascript</li>
            <li className="pb-0.5">Bootstrap</li>
            <li className="pb-0.5">Tailwind CSS</li>
          </ul>
        </div>

        {/* Backend skills column */}
        <div className="px-10 py-3 border-b-2 sm:border-b-0 sm:border-r-2 border-cyan-400">
          <i className="fa-brands fa-node-js text-3xl text-cyan-600"></i>
          <h3 className="text-lg font-bold">Backend</h3>
          <hr className="border-4 rounded-xl border-cyan-400 my-2 mb-3" />
          <ul className="text-sm font-light">
            <li className="pb-0.5">Node.js</li>
            <li className="pb-0.5">Express.js</li>
            <li className="pb-0.5">PostgreSQL</li>
            <li className="pb-0.5">MongoDB</li>
            <li className="pb-0.5">REST APIs</li>
          </ul>
        </div>

        {/* Frameworks/Libraries skills column */}
        <div className="px-10 sm:px-6 md:px-10 py-3 border-cyan-400">
          <i className="fa-brands fa-react text-3xl text-cyan-600"></i>
          <h3 className="text-lg font-bold">Frameworks/Libraries</h3>
          <hr className="border-4 rounded-xl border-cyan-400 my-2 mb-3" />
          <ul className="text-sm font-light">
            <li className="pb-0.5">React.js</li>
            <li className="pb-0.5">Next.js</li>
            <li className="pb-0.5">Tailwind CSS</li>
            <li className="pb-0.5">Bootstrap</li>
            <li className="pb-0.5">Cypress</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
