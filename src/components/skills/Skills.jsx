import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiSpringboot, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { FaReact, FaJava, FaNodeJs, FaGithub, FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-300 sm:text-2xl">
            Technical Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[85%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-300 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex gap-8 mt-5 items-center h-[100%] justify-end md:justify-center"
            >

              <div className="w-[450px] h-[420px] flex flex-col gap-5 pt-5 px-5 border-2 rounded-3xl hover:scale-110 border-slate-500 hover:border-slate-800">
                <h2 className="text-3xl text-center">Frontend</h2>
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={88} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={80} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={80}
                />

              </div>

              <div className="w-[450px] h-[420px] flex flex-col gap-5 pt-5 px-5 border-2 rounded-3xl hover:scale-110 border-slate-500 hover:border-slate-800">
                <h2 className="text-3xl text-center">Backend</h2>
                <ProgressBar logo={<FaJava />} name={"Java"} value={70} />
                <ProgressBar logo={<SiSpringboot />} name={"Spring Boot"} value={70} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={80}
                />
                <ProgressBar logo={<FaNodeJs />} name={"Node Js"} value={75} />
                <ProgressBar
                  logo={SiExpress}
                  name={"Express Js"}
                  value={80}
                />
              </div>

              <div className="w-[450px] h-[420px] flex flex-col gap-5 pt-5 px-5 border-2 rounded-3xl hover:scale-110 border-slate-500 hover:border-slate-800">
                <h2 className="text-3xl text-center">Database</h2>
                <ProgressBar logo={<SiMysql />} name={"MySQL"} value={80} />
                <ProgressBar logo={<SiMongodb />} name={"MongoDB"} value={90} />

                <h2 className="text-3xl mt-4 text-center">DevOps</h2>
                <ProgressBar
                  logo={<FaGithub />}
                  name={"GitHub"}
                  value={80}
                />
                <ProgressBar logo={<FaAws />} name={"AWS"} value={80} />
                
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;
