import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import perfilImage from "../img/homeImg.jpg";
import DoubleArrowDown from "../icons/DoubleArrowDown";
import { motion } from "framer-motion";

const Home = (props) => {
  const [init, setInit] = useState(false);

  // Initializing particles engine on component mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the lightweight version of particles
    }).then(() => {
      setInit(true); // Set initialized flag to true once loaded
    });
  }, []);

  // Logging particles container on load
  const particlesLoaded = (container) => {
    console.log(container);
  };

  // Particle configuration with useMemo for optimization
  const options = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#0c0c0c", // Dark background color
        },
      },
      fullScreen: {
        enable: false, // Disables full-screen mode
      },
      detectRetina: true, // Adjust particles for Retina displays
      particles: {
        number: {
          value: 30, // Particle count
          density: {
            enable: true,
            area: 800, // Density area for particle dispersion
          },
        },
        color: {
          value: "#67eafe", // Particle color
        },
        opacity: {
          value: 0.2, // Particle opacity level
        },
        size: {
          value: 6, // Particle size
        },
        move: {
          enable: true,
          speed: 2, // Particle movement speed
          outModes: {
            default: "out", // Particles move out of the screen boundaries
          },
        },
        shape: {
          type: "circle", // Circular particle shape
        },
      },
    }),
    []
  );

  return (
    <div>
      {/* Particles as background */}
      <div className="absolute top-0 left-0 z-0 h-full w-full sm:h-screen min-h-screen">
        {init && (
          <Particles id={props.id} init={particlesLoaded} options={options} />
        )}
      </div>

      {/* Downward arrow icon for scroll indication */}
      <DoubleArrowDown className="invisible sm:visible size-8 absolute bottom-2 inset-x-1/2 text-white" />

      {/* Main content section */}
      <div className="relative z-10 text-white grid grid-rows-2 sm:grid-cols-2 min-h-screen h-full sm:h-screen sm:w-screen cursor-default">
        <div className="flex flex-col justify-center text-center sm:text-left sm:h-screen">
          <div className="flex flex-col justify-center text-center sm:text-left sm:h-screen">
            <div className="flex flex-col justify-center text-center sm:text-left sm:h-screen">
              {/* Animated title */}
              <motion.h5
                className="sm:ps-8 sm:pb-1 lg:pb-3 font-bold sm:text-xl lg:text-3xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
                viewport={{ once: false }}
              >
                Full-Stack Web Developer
              </motion.h5>

              {/* Animated name */}
              <motion.h1
                className="sm:ps-8 montserrat-font primary-color font-extrabold text-4xl lg:text-5xl xl:text-7xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: false }}
              >
                &lt;Erick Ribeiro/&gt;
              </motion.h1>

              {/* Animated horizontal rule */}
              <motion.hr
                className="border-2"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false }}
              />

              {/* Animated description text */}
              <motion.p
                className="sm:ps-8 pt-3 text-gray-400 text-lg md:text-xl"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                viewport={{ once: false }}
              >
                Turning ideas into reality
              </motion.p>
            </div>
          </div>
        </div>

        {/* Animated profile image */}
        <motion.div
          className="mb-20 pb-4 sm:mb-0 sm:pb-0 flex sm:items-center justify-center sm:h-screen"
          initial={{ scale: 0, opacity: 0 }} // Starts hidden with zero scale and opacity
          whileInView={{ scale: 1, opacity: 1 }} // Animates to full scale and opacity
          transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
          viewport={{ once: false, amount: 0.1 }} // Triggers animation when 10% visible
        >
          <img
            src={perfilImage}
            alt="Profile"
            className="rounded-full shadow-[0px_0px_40px_10px_rgba(103,234,254,0.9)] backdrop-blur-mg w-9/12 h-full sm:w-80 sm:h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
