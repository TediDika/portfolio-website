import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import prevArrow from "../assets/back-arrow.png";
import nextArrow from "../assets/next-arrow.png";
import { projects } from "../constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-210 mt-[20rem]">
        <div id="projects" className="relative -top-[10rem]"></div>
        <div className="flex flex-col h-210 w-[50rem] dark:bg-black p-6">
          <h1 className="mb-5 h1">Projects.</h1>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto max-w-7xl py-10 px-4">
        <div className="custom-button-prev cursor-pointer w-[70px] min-w-[70px] px-1">
          <img className="" src={prevArrow} alt="prevArrow" />
        </div>
        <Swiper
          className=""
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: ".custom-button-prev",
            nextEl: ".custom-button-next",
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            815: {
              slidesPerView: 2,
            },
            1130: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform transition-transform duration-200 active:scale-95"
              >
                <div className="bg-white h-[36rem] rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[14rem] object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl text-gray-600 font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div className="absolute w-[90%] bottom-[1rem] left-1/2 transform -translate-x-1/2">
                      <p className="font-code text-gray-600 text-center">
                        {project.tools}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-button-next cursor-pointer w-[70px] min-w-[70px] px-1 pl-7">
          <img className="" src={nextArrow} alt="nextArrow" />
        </div>
      </div>
    </>
  );
};

export default Projects;
