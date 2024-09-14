import React from 'react'

const Navbar = () => {
  return (
    <div>
       {/* navbar */}
       <div className="fixed top-0 w-full  flex justify-between items-center px-16 py-5 z-50">
        <a
          href="/"
          className="text-2xl text-gray-900 hover:text-gray-600  font-bold"
        >
          It's Sammy
        </a>
        <div className="flex space-x-8 text-lg">
          <a
            href="#about"
            className="relative text-gray-900 font-bold text-xl hover:text-black hover:bg-[#F7F7F7] hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            className="relative text-gray-900 font-bold text-xl hover:text-black hover:bg-[#F7F7F7] hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="relative text-gray-900 font-bold text-xl hover:text-black hover:bg-[#F7F7F7] hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="relative text-gray-900 font-bold text-xl hover:text-black hover:bg-[#F7F7F7] hover:scale-105 mb-4 after:content-[''] after:absolute after:bg-gray-900 after:rounded-full after:w-2 after:h-2 after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-[-8px] after:opacity-0 hover:after:opacity-100 hover:after:bg-gray-900 hover:after:w-3 hover:after:h-3 hover:after:bottom-[-12px] transition-all duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar