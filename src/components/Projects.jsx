import React from "react";
import Zzfutebolstore from "../img/zzfutebolstore.png";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    // Main container with background gradient and flex layout
    <div className="relative px-10 sm:px-16 flex flex-col items-center justify-center sm:justify-evenly min-h-screen sm:h-screen w-full sm:w-screen bg-gradient-to-b from-cyan-500 to-black">
      {/* Container for project content, centered and spaced */}
      <div className="space-y-8 sm:space-y-0 container pt-8 flex items-center justify-center sm:w-full">
        {/* Main project card with animation */}
        <motion.div
          className="bg-black/70 p-6 rounded-3xl flex flex-col sm:mt-10 md:mt-3 items-start sm:h-auto"
          initial={{ y: 100, opacity: 0 }} // Animates position and opacity from bottom to visible
          whileInView={{ y: 0, opacity: 1 }} // Trigger animation on scroll into view
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          {/* Image container with scaling animation */}
          <motion.div
            className="flex items-center justify-center -mt-12 sm:w-full sm:h-auto h-full"
            initial={{ scale: 0, opacity: 0 }} // Start hidden with zero scale
            whileInView={{ scale: 1, opacity: 1 }} // Animate to full size and opacity
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            {/* Image displaying the ZZFutebolStore project */}
            <img
              src={Zzfutebolstore}
              alt="ZzFutebolStore"
              className="rounded-3xl mb-4 w-full lg:w-4/6 sm:max-w-2xl sm:h-full max-h-80 object-fill"
            />
          </motion.div>

          {/* Project information and links */}
          <div className="lg:px-9">
            {/* Project title */}
            <h2 className="text-cyan-400 text-center text-xl font-bold">
              ZZFutebolStore
            </h2>

            {/* Project description */}
            <p className="text-white mt-2 mb-2">
              ZZFutebolStore is a football-focused ecommerce offering a variety
              of jerseys, shorts, and accessories. Built from scratch with
              modern technologies, the store is fully responsive. Users can sign
              up, log in, browse a filterable product catalog, and easily add
              items to their cart.
            </p>

            {/* Technology stack used in the project */}
            <p className="text-gray-500 mb-2 xl:mb-5">
              HTML, CSS, React, Javascript, Bootstrap, Node.js, PostgreSQL,
              Express.js
            </p>

            {/* Links to the project website and GitHub */}
            <div className="flex justify-center space-x-4">
              {/* "Show me" button linking to the live website */}
              <a
                className="bg-cyan-600 text-white py-2 px-3 rounded-lg hover:bg-cyan-500"
                href="https://www.zzfutebolstore.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-arrow-up-right-from-square pe-2"></i>
                Show me
              </a>

              {/* GitHub link for project repository */}
              <a
                className="bg-gray-700 text-white py-2 px-3 rounded-lg hover:bg-gray-600"
                href="https://github.com/ErickCassio/online-football-store"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-brands fa-github pe-2"></i>
                Github
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
