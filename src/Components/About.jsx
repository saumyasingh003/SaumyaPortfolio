import React, { useEffect, useRef } from "react";
import aiimage from "../Components/assets/aiimage.png";
import { MdWavingHand } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Timeline from "./Timeline/Timeline";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiCplusplus,
  SiMongodb,
} from "react-icons/si";

const About = () => {
  const scrollRef = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scroll.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => scroll.current.destroy();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = scrollRef.current.querySelector("h1");
      if (element) {
        element.style.transform = "translateY(0px)";
      }
    };

    // Add scroll event listener
    document.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        id="about"
        className=" w-[100vw] h-full p-10  bg-[#F7F7F7]   flex justify-center items-center"
      >
        <div
          // data-scroll-container
          // ref={scrollRef}
          className="w-full bg-[#F7F7F7]"
        >
          <div className="relative ">
            <h1 className="md:text-6xl text-4xl font-extrabold  text-gray-900">ABOUT</h1>
            <div className="w-1/4 h-1 bg-gray-900 mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2  grid-cols-1 mt-4">
            <div
              className="relative md:w-[350px] md:h-[350px] w-64 h-64 mx-auto rounded-full overflow-hidden md:ml-40 mt-8"
              // data-scroll
              // data-scroll-speed="3"
              // data-scroll-direction="vertical"
              // data-scroll-delay="0.05"
            >
              <img
                src={aiimage}
                alt="circle-img"
                className="w-fit h-fit object-cover rounded-full"
              />
            </div>

            <div
            // className="mr-40 mt-8"
            // data-scroll
            // data-scroll-speed="3"
            // data-scroll-direction="vertical"
            // data-scroll-delay="0.05"
            >
              <p className="inline-flex items-center text-sansita-bold text-left text-2xl  pt-20">
                I'm Saumya <MdWavingHand className="ml-2 text-yellow-400" />
              </p>
              <p className="text-sansita-bold text-left text-2xl">
                I am a web developer based in Bihar, India, pursuing a
                Bachelor's in Computer Science and Engineering from Amity
                University, Patna. I am passionate about honing my coding skills
                and developing dynamic web applications and websites using the
                MERN stack. Continuously working on projects to improve my
                expertise, I am driven by a love for learning new technologies
                that elevate my craft.
              </p>
              <div className="flex space-x-4 mt-4 text-center">
                <a
                  href="https://www.linkedin.com/in/saumyasingh003/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="text-gray-900 text-3xl" />
                </a>
                <a
                  href="https://github.com/saumyasingh003"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-900 text-3xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Timeline />
          </div>
          <div className="relative text-center ml-4  mt-20 mb-20 ">
            <h1 className="text-5xl font-bold text-gray-900 ">What I Know</h1>
            <p className="font-normal text-center italic  text-xl">
              CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 justify-center items-center">
              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaHtml5 className="text-6xl text-orange-500 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">HTML5</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Used for structuring web pages
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaCss3Alt className="text-6xl text-blue-500 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">CSS3</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Used for styling web pages
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaJsSquare className="text-6xl text-yellow-500 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">JavaScript</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Enables dynamic functionality
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaNodeJs className="text-6xl text-green-500 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">Node.js</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Server-side JavaScript runtime
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <SiExpress className="text-6xl text-gray-700 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">Express.js</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Web framework for Node.js
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaReact className="text-6xl text-blue-400 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">React.js</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Front-end library for UI
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaGitAlt className="text-6xl text-orange-600 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">Git</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Version control system
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaGithub className="text-6xl text-gray-800 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">GitHub</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Hosting for Git repositories
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <SiCplusplus className="text-6xl text-blue-700 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">C++</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  General-purpose programming language
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <FaBootstrap className="text-6xl text-purple-600 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">Bootstrap</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CSS framework for responsive design
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <SiTailwindcss className="text-6xl text-teal-500 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">Tailwind</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Utility-first CSS framework
                </div>
              </div>

              <div className="group relative flex flex-col items-center hover:text-gray-600">
                <div className="absolute left-[-10px] top-0 bottom-0 h-full w-[2px] bg-transparent group-hover:bg-gray-500 transition-all duration-300"></div>
                <SiMongodb className="text-6xl text-green-600 group-hover:text-gray-500 transition-colors duration-300" />
                <p className="mt-2 text-sm">MongoDB</p>
                <div className="absolute bottom-10 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  NoSQL database for modern apps
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
