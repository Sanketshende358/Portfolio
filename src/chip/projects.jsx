// frontend/src/components/Projects.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import { RxExternalLink } from "react-icons/rx";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <>
            {projects.map((project) => {
                return (
                    <div
                        data-aos="zoom-in"
                        key={project._id}
                        className="flex flex-col justify-center items-center"
                    >
                        <POPUP className="img-content relative">
                            <div className="h-[280px] w-[350px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-lg overflow-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto ">
                                <img
                                    src={`http://localhost:5000/uploads/${project.image}`} // Serve the image
                                    alt={project.title}
                                    className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer"
                                />
                            </div>

                            <div
                                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
                            >
                                <div className=" flex items-center justify-center gap-4">
                                    <Link
                                        to={project.projectLink}
                                        target="_blank"
                                        className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                                    >
                                        <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                                        <p className=" text-black">Demo</p>
                                    </Link>
                                </div>
                            </div>
                        </POPUP>
                        <p className="text-gray-200 mt-3 text-xl font-medium sm:text-lg">
                            {project.title}
                        </p>
                    </div>
                );
            })}
        </>
    );
};

const POPUP = styled.div`
      position: relative;
      img {
        &:hover {
          transform: scaleX(2);
        }
      }
      .popup {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        margin: auto;
        transition: 0.5s ease;
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
      .icon {
        color: #fff !important;
      }
      &:hover .popup {
        opacity: 1;
        color: #fff;
      }
    `;


export default Projects;