import { Link } from "react-router-dom";
import Typed from "typed.js";
import { useEffect } from "react";
import { Parallax } from "react-parallax";

const Banner = () => {

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to Our Employee Management Platform",
        "Efficiently Manage Your Company's Workforce",
        "Streamline HR Operations and Improve Productivity!",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    };

    const typed = new Typed(".typing-element", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Parallax strength={500} bgImage="https://i.ibb.co/j8Z8gSX/computer-2982270-1920.jpg" >
      <div className="relative bg-cover bg-center h-[80vh] md:h-screen">

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 dark:opacity-30"></div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 dark:text-gray-400 mb-20 h-24">
              <span className="typing-element"></span>
            </h1>
            <Link to="/employee-list">
              <button className="mt-40 mx-auto btn bg-green-400 border-none px-8 py-3 rounded-full hover:bg-gray-800 hover:text-gray-200 hover:scale-105 transform transition duration-300">
                Manage Employees
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Banner;
