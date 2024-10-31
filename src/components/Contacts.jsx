import React, { useState, useEffect } from "react";
import ArrowRight from "../icons/ArrowRight";
import { motion } from "framer-motion";

const Contacts = () => {
  // Stores the current year for the footer display
  const [currentYear, setCurrentYear] = useState("");
  // Stores user input for name, contact, and message in the form
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  // Gets the current year from the Date object and updates the state
  const getCurrentYear = () => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  };

  // Sets the current year on component load
  useEffect(() => {
    getCurrentYear();
  }, []);

  // Creates a "mailto:" URL and opens the user's email client with form data pre-filled
  const handleMailTo = () => {
    const mailtoUrl = `mailto:ephillyswebdev@gmail.com?subject=Contact from ${name}&body=Contact: ${contact}%0D%0A%0D%0A${message}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="flex flex-col items-center min-h-screen sm:h-screen w-full sm:w-screen bg-gray-950 default-background">
      <div className="flex-grow container items-center justify-center flex flex-col sm:flex-row ">
        {/* Section with title and introductory message */}
        <div className="flex flex-col items-center justify-center sm:min-h-72 sm:w-full sm:pt-8">
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h1 className="primary-color montserrat-font text-3xl font-extrabold pt-20 sm:pt-0 py-8 ">
              Get in touch
            </h1>
            <p className="text-white px-8 text-center text-lg">
              Got a question or proposal, or just want to say hello? Go ahead.
            </p>
          </motion.div>

          {/* Links to GitHub and LinkedIn */}
          <div className="pt-8 w-full flex justify-center space-x-20 items-center">
            <motion.a
              href="https://github.com/ErickCassio"
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
            >
              <i class="fa-brands fa-github primary-color text-4xl"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/erick-cassio/"
              target="_blank"
              rel="noreferrer"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false }}
            >
              <i class="fa-brands fa-linkedin primary-color text-4xl"></i>
            </motion.a>
          </div>
        </div>

        {/* Form section with fields for name, contact, and message */}
        <div className="flex flex-col space-y-4 w-full px-8 pt-16 sm:pt-20">
          <div>
            <label
              for="name"
              className="block mb-2 text-sm text-gray-100 montserrat-font"
            >
              Name
            </label>
            <motion.input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-cyan-400 text-white glassmorphism"
              initial={{ width: "1%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm text-gray-100 montserrat-font"
            >
              Contact
            </label>
            <motion.input
              id="contact"
              type="contact"
              placeholder="Enter your e-mail or phone number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-cyan-400 text-white glassmorphism"
              initial={{ width: "1%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            />
          </div>
          <div>
            <label
              for="message"
              className="block mb-2 text-sm text-gray-100 montserrat-font"
            >
              Message
            </label>
            <motion.textarea
              id="message"
              maxlength="1500" // Character limit for message field
              placeholder="Hi, We need a web developer for our Company Z, how soon can we schedule a meeting?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-20 max-h-52 px-4 py-2 bg-transparent border-b border-gray-500 focus:outline-none focus:border-cyan-400 text-white glassmorphism"
              initial={{ width: "1%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false }}
            />
          </div>

          {/* Submit button triggers the mailto action */}
          <div className="flex justify-start items-center w-full sm:w-auto">
            <button
              className="flex justify-center items-center bg-white text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition duration-200"
              type="submit"
              onClick={handleMailTo}
            >
              Send
              <ArrowRight className="size-6 ms-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer displays current year and author name */}
      <div className="flex items-start w-full pt-9 py-3 ps-8 sm:ps-14 text-white montserrat-font">
        <p>© Erick Ribeiro {currentYear}</p>
      </div>
    </div>
  );
};

export default Contacts;
