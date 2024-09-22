import React from "react";
import airbnb from "../Components/assets/airbnb.png";
import indiaTours from "../Components/assets/indiatours.png";
import shopper from "../Components/assets/shopper.png";
const Projects = () => {
  return (
    <div>
      <div
        id="projects"
        className="relative md:w-screen h-full bg-white flex flex-col justify-center md:items-center p-4 md:ml-10 mt-10 "
      >
        <div className="w-full h-full bg-white">
          <div className="relative text-left  ">
            <h1 className="md:text-6xl text-4xl font-extrabold text-gray-900 ">
              Projects
            </h1>
            <div className="w-1/4 h-1 bg-gray-900 mt-4 text-left"></div>
          </div>

          <div>
            <p className="font-normal text-left italic text-xl">
              SOME OF MY PERSONAL PROJECTS..
            </p>
          </div>
        </div>

        {/* Project Cards Container */}
       <div className="">
       <div className="flex md:flex-row flex-col justify-center md:gap-20 gap-10 mt-10 mb-10 m-auto">
          <div className="md:w-[400px] w-96  md:h-[450px] rounded md:overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 flex flex-col">
            <img
              className="w-full h-[50%] object-cover"
              src={indiaTours}
              alt="India Tours"
            />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <a
                href="https://india-tours.vercel.app" target="_blank"
                className="font-bold text-xl mb-2 text-black"
              >
                IndiaTours!
              </a>
              <p className="text-gray-700 text-base flex-grow">
                React-driven animations designed to create a dynamic and engaging travel experience across whole India.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #diversity
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #culture
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #adventure
              </span>
            </div>
          </div>

          <div className="md:w-[400px] w-96 md:h-[450px] rounded md:overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 flex flex-col">
            <img
              className="w-full h-[50%] object-cover"
              src={airbnb}
              alt="Airbnb Clone"
            />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <a
                href="https://airbnb-5e78.onrender.com/listings" target="_blank"
                className="font-bold text-xl mb-2 text-black"
              >
                Airbnb Clone
              </a>
              <p className="text-gray-700 text-base flex-grow">
                A website where users can explore their next destination, rent accommodations, and list their homes on Airbnb, built using React.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #destination
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #rent
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #airbnb
              </span>
            </div>
          </div>

          <div className="md:w-[400px] w-96 md:h-[450px] rounded md:overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl p-6 flex flex-col">
            <img
              className="w-full h-[50%] object-cover"
              src={shopper}
              alt="Shopper"
            />
            <div className="px-6 py-4 flex flex-col flex-grow">
              <a href="https://shopper-frontend-beta.vercel.app/" target="_blank" className="font-bold text-xl mb-2 text-black">
                Shopper
              </a>
              <p className="text-gray-700 text-base flex-grow">
                E-commerce website where buyers can purchase items, add them to the cart, and sellers can list their products for sale
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #shopping
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #tech
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-900 hover:text-white transition duration-300">
                #grocery
              </span>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
    
};

export default Projects;
