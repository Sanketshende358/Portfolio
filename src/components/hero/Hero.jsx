import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Sanket from "../../assets/Sanket.pdf";
import sanket from "../../assets/sanket.jpg"


const Hero = () => {
  return (
    <div id="home" className={` bg-black text-white `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
            <h2
              data-aos="fade-up"
              className=" text-5xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Sanket Shende
            </h2>
            <br />
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Web Developer",
                2000,
                "Full Stack developer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />
            <br /><br />
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href={Sanket}
              className="flex items-center gap-2 border- text-xl bg-white border-black hover:scale-110 px-7 py-2 sm:px-6 rounded-lg font-bold "
              download
            >
              <div className="flex items-center hover:text-yellow-700 gap-3 text-black">
                Resume <FiDownload />
              </div>
            </a>            
          </div>
          <div className="icons flex mt-10">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-7"
            >
              <li>
                <a href="https://github.com/sanket358">
                  {""}
                  <AiFillGithub className=" h-[3rem] w-[3rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaLinkedinIn className=" h-[3rem] w-[3rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/sanket_shende358/">
                  {" "}
                  <AiFillInstagram className=" h-[3rem] w-[3rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[90%]  w-full rounded-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src={sanket}
              alt="mine"
            />
            <div className=" absolute bottom-10 md:bottom-3 right-8 md:right-2">
              <div data-aos="zoom-in" data-aos-duration="1000"  className=" relative cursor-pointer">
                <img
                  className=" w-[135px] md:w-[90px] circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                <FaPlay
                  className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
