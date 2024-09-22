import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import iit from "../Components/assets/iit.png";
import salesqueen from "../Components/assets/salesqueen.png";

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

const Experience = () => {
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
        id="experience"
        className=" w-[100vw] h-full p-10  bg-[#F7F7F7]   flex flex-col justify-center items-center"
      >
        <div className="w-full bg-[#F7F7F7]">
          <div className="relative ">
            <h1 className="md:text-6xl text-4xl font-extrabold  text-gray-900">
              Experience
            </h1>
            <div className="w-1/4 h-1 bg-gray-900 mt-2"></div>
          </div>
        </div>

        <div class="w-full mt-16 mb-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="bg-teal-800 h-40 relative flex justify-center items-center">
            <div class="absolute inset-0 bg-gradient-to-b from-gray-800 to-teal-600"></div>
            <h5 class="text-white text-xl font-semibold z-10 text-center">
              Indian Institute of Technology , Patna
            </h5>
            <img
              src={iit}
              alt="D.E. Shaw & Co."
              class="absolute bottom-0 transform translate-y-1/2 rounded-full w-24 h-24 border-4 border-white object-cover"
            />
          </div>
          <div class="p-6 text-center mt-6">
            <h6 class="text-xl text-gray-500 mb-4">March 2024 - June 2024</h6>
            <ul class="text-gray-600 space-y-2  text-left ml-6 text-xl">
              <li>
                ● Implemented diverse ML algorithms (e.g., linear regression,
                logistic regression, K-fold cross-validation) on varied datasets
                for predictive modelling.
              </li>
              <li>
                ● Collaborated on interdisciplinary teams to analyse results and
                propose data-driven solutions.
              </li>
              <li>
                ● Provided concise summaries of research findings during IT
                research internship.
              </li>
            </ul>
          </div>
        </div>

        <div class="w-full mt-16 mb-10 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="bg-orange-800 h-40 relative flex justify-center items-center">
            <div class="absolute inset-0 bg-gradient-to-b from-yellow-700 to-yellow-500"></div>
            <h5 class="text-white text-xl font-semibold z-10 text-center">
              SalesQueen Software Solutions , Chennai
            </h5>
            <img
              src={salesqueen}
              alt="D.E. Shaw & Co."
              class="absolute bottom-0 transform translate-y-1/2 rounded-full w-24 h-24 border-4 border-white object-contain "
            />
          </div>
          <div class="p-6 text-center mt-6">
            <h6 class="text-xl text-gray-500 mb-4">May 2024 - Aug 2024</h6>
            <ul class="text-gray-600 space-y-2 text-left ml-5  text-xl">
              <li>
                ● Developed and implemented various front-end pages, ensuring
                responsive design and user-friendly interfaces.
              </li>
              <li>
                ● Actively participated in team discussions, contributing ideas
                and solutions to improve project outcomes.
              </li>
              <li>
                ● Attended daily meetings, collaborating with team members to
                align on project goals and deliverables.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
