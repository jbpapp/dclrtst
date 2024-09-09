import '../css/styles.css';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#0A0A0D] h-[80px] py-[13px] px-8 lg:px-28">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white">
          <span className="font-bold text-[32px] lg:text-[40px] uppercase">Logo</span>
        </a>

        <button
          className="text-white lg:hidden block focus:outline-none relative z-50"
          onClick={toggleMenu}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        <nav
          className={`${
            isOpen ? "fixed top-0 left-0 w-screen h-screen z-40 bg-[#0A0A0D]" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 lg:block`}
        >
          <ul className={`${
            isOpen ? "py-24" : ""} flex flex-col lg:flex-row lg:items-center`}>
            <li className={`${isOpen ? "text-center" : ""} lg:mr-8 my-2 lg:my-0`}>
              <a href="#faq" className="text-white hover:text-gray-300">FAQ</a>
            </li>
           <li className={`${isOpen ? "text-center" : ""} lg:mr-8 my-2 lg:my-0`}>
              <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
            </li>
            <li className={`${isOpen ? "text-center mt-4" : ""}`}>
              <a
                href="#apply"
                className="py-2 px-8 rounded bg-gradient-360 from-[#950000] from-[0.2%] to-[#FF2626] to-[99.8%] text-white"
              >
                Apply Now!
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const App = () => {
  return <Navbar />;
};

ReactDOM.render(<App />, document.getElementById('navbar'));
