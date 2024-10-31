import React, { useState } from "react";
import HomeIcon from "../icons/HomeIcon";
import UserIcon from "../icons/UserIcon";
import ComputerIcon from "../icons/ComputerIcon";
import ContactIcon from "../icons/ContactIcon";

function Navbar() {
  // Manages the dropdown menu's open/close state
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the menu open/closed on click
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scrolls smoothly to the specified section by its ID
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 max-w-[90%] mx-auto text-white pt-4 md:pb-4 px-4 z-50 flex justify-between items-center rounded-3xl cursor-default">
      {/* Logo on the left side */}
      <div className="flex items-center primary-color">
        <span className="text-3xl font-bold montserrat-font">&lt;ER/&gt;</span>
      </div>

      {/* Menu icon for smaller screens */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-3xl focus:outline-none"
      >
        {/* Toggle between hamburger icon and close "x" icon */}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-center"
          >
            <path
              fill-rule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 text-center"
          >
            <path
              fill-rule="evenodd"
              d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </button>

      {/* Main navigation links (hidden on smaller screens) */}
      <ul className="md:flex md:items-center space-x-2 text-lg hidden">
        <li>
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 px-4 py-2 hover:text-cyan-300 hover:rounded-lg hover:backdrop-blur-lg hover:bg-white/20 transition duration-300"
          >
            <HomeIcon className="size-5" />
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 px-4 py-2 hover:text-cyan-300 hover:rounded-lg hover:backdrop-blur-lg hover:bg-white/20 hover:text-blue-400 transition duration-300"
          >
            <UserIcon className="size-5" />
            About me
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center gap-2 px-4 py-2 hover:text-cyan-300 hover:rounded-lg hover:backdrop-blur-lg hover:bg-white/20 hover:text-blue-400 transition duration-300"
          >
            <ComputerIcon className="size-5" />
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 px-4 py-2 hover:text-cyan-300 hover:rounded-lg hover:backdrop-blur-lg hover:bg-white/20 hover:text-blue-400 transition duration-300"
          >
            <ContactIcon className="size-5" />
            Contact
          </button>
        </li>
      </ul>

      {/* Dropdown menu for small screens */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute right-0 w-[40%] backdrop-blur-lg bg-black bg-opacity-70 text-left md:py-4 rounded-3xl`}
        style={{ top: "110%" }} // Positions the dropdown right below the navbar
      >
        <li>
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center px-4 py-2 hover:text-cyan-300 transition duration-300"
          >
            <HomeIcon className="size-5 me-1" />
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center px-4 py-2 hover:text-cyan-300 transition duration-300"
          >
            <UserIcon className="size-5 me-1" />
            About me
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("projects")}
            className="flex items-center px-4 py-2 hover:text-cyan-300 transition duration-300"
          >
            <ComputerIcon className="size-5 me-1" />
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center px-4 py-2 hover:text-cyan-300 transition duration-300"
          >
            <ContactIcon className="size-5 me-1" />
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
