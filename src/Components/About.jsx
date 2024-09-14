import React, { useEffect, useRef } from "react";
import pic2 from "../Components/assets/pic2.png";
import { MdWavingHand } from "react-icons/md";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Timeline from "./Timeline/Timeline";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

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
        className=" w-[100vw] h-[180vh] p-10  bg-[#F7F7F7]   flex justify-center items-center"
      >
        <div
          // data-scroll-container
          // ref={scrollRef}
          className="w-full bg-[#F7F7F7]"
        >
          <div className="relative ">
            <h1 className="text-7xl font-extrabold  text-gray-900">ABOUT</h1>
            <div className="w-1/4 h-1 bg-gray-900 mt-4"></div>
          </div>
          <div className="grid grid-cols-2 mt-4">
            <div
              className="relative w-[350px] h-[350px] rounded-full overflow-hidden ml-40 mt-8"
              // data-scroll
              // data-scroll-speed="3"
              // data-scroll-direction="vertical"
              // data-scroll-delay="0.05"
            >
              <img
                src={pic2}
                alt="circle-img"
                className="w-full h-full object-cover rounded-full"
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

            <Timeline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
