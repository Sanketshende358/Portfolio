import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  {
    id: 0,
    name: "home",
  },
  {
    id: 1,
    name: "skills",
  },
  {
    id: 2,
    name: "works",
  },
  {
    id: 3,
    name: "resume",
  },
  {
    id: 4,
    name: "contact",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle the navbar
  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full mx-auto fixed bg-black bg-opacity-50 top-0 py-5 sm:py-4 z-30 `}
    >
      <nav className=" container m-auto text-white flex items-center justify-between">
        <div data-aos="fade-down" className="logo">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to="/"
            className="text-3xl font-bold sm:text-3xl"
          >
            Sanket Shende
          </Link>
        </div>
        <div
          data-aos="fade-down"
          className="nav-items flex items-center space-x-11"
        >
          {/* hamburger */}
          <button
            onClick={toggleNav}
            className="cursor-pointer text-2xl hidden md:block"
          >
            <HiMenu size={25} />
          </button>

          <ul
            className={`flex items-center space-x-11 ${
              !isOpen ? "md:flex" : "md:right-[0%]"
            } md:flex-col md:absolute m-auto md:top-0 md:right-[-100%] md:w-[78%] md:h-screen md:bg-white `}
          >
            {/* Use a button tag for better accessibility */}
            <button
              onClick={toggleNav}
              className={`text-3xl hidden md:block relative right-0 top-4 container mx-auto`}
            >
              <RxCross2 size={25} />
            </button>
            {navItems.map((item) => (
              <li
                key={item.id}
                className="md:m-6 md:flex md:gap-6 md:items-center md:justify-center"
              >
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-white hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <button 
              onClick={() => window.location.href = "#contact"}
            className="text-[16px] bg-white text-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500">Hire Me </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
