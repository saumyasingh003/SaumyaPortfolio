import  { useEffect, useRef } from "react";
import pic3 from "../Components/assets/pic3.png";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Navbar from "./Navbar/Navbar";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import ParticlesComponent from './ParticlesBackground'

import About from "./About";


const Home = () => {
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

  const [text] = useTypewriter({
    words: [
      "Web Development",
      "Front-end Development",
      "Web Designing",
      "Back-end Development",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div>
      <div
        id="main-container"
        ref={scrollRef}
        data-scroll-container
        className="z-30"
      >
        <Navbar />
  
        {/* home */}
        <div className="relative flex w-full h-[100vh]  justify-center items-center overflow-x-hidden">
          <div className="h-screen">

        <ParticlesComponent id="particles"/>
          </div>
          <div className="absolute inset-x-0 bottom-0 ">
            <div className="w-full h-24 rounded-t-full"></div>
          </div>

          <div className="w-1/2 flex flex-col justify-center items-center text-gray-900  relative mt-30 ml-40 ">
            <p className="mb-1 font-sansita-bold text-7xl">Hi!, I am</p>
            <p className=" mb-2 font-sansita-bold text-7xl">Saumya Singh</p>
            <div className="text-center">
              <h1 className="text-4xl font-bold">
                I am into {"<"}{" "}
                <span className="text-teal-600 font-bold">{text}</span>
                <Cursor cursorStyle="/>" />
              </h1>

              <div className="flex justify-center space-x-4 mt-16">
                <a
                  href="#contact"
                  className="bg-yellow-400 hover:text-black text-gray-900 font-bold py-5 px-10 rounded-full"
                >
                  Contact Me
                </a>
                <a
                  href="https://drive.google.com/file/d/1fdfV4C2lnUYA6-dH8t60YnVk1Xw7d6Ld/view?usp=drive_link"
                  target="_blank"
                  className="bg-yellow-400 hover:text-black text-gray-900 py-5 font-bold px-10 rounded-full"
                >
                  Download CV
                </a>
              </div>
            </div>
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

          <div className="w-1/2 flex justify-center">
            <div
              className="ml-auto mr-48"
              data-scroll
              data-scroll-speed="4"
              data-scroll-direction="horizontal"
            >
              <div className="relative overflow-hidden bg-gray-900 border border-blue-500 rounded-t-full max-w-sm h-[30rem]">
                <img
                  src={pic3}
                  alt="Image"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <About />


        {/* skills */}
        <div
          id="skills"
          className="relative w-[100vw] h-[100vh] bg-[#F7F7F7] flex justify-center items-center mt-10"
        >
          <div
            data-scroll-container
            ref={scrollRef}
            className="w-full h-full bg-white"
          >
            {/* Section Header */}
            <div className="relative text-left ml-4  ">
              <h1 className="text-7xl font-extrabold text-gray-900 uppercase">
                Skills
              </h1>
              <div className="w-1/4 h-1 bg-gray-900 mt-4 text-left"></div>
            </div>

            {/* Scrollable Text Section */}
            <div
              className="relative mt-16  ml-4 text-left"
              data-scroll
              data-scroll-speed="1"
            >
              <p className="font-semibold italic  text-3xl">
                CRAZY SOFTWARE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
