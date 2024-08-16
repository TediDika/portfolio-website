"use client";
import { motion } from "framer-motion";
import React, { Suspense, lazy } from "react";
import helloWorld from "../assets/HelloWorld.png";
import { globeConfig, colors, sampleArcs } from "../constants";
const World = lazy(() => import("./Globe"));

export function Hero() {
  return (
    <>
      <div className="flex justify-center items-center  mt-[4rem] dark:bg-black">
        <img
          src={helloWorld}
          alt="Hello World!"
          className="w-full max-w-[40rem]"
        />
      </div>

      <div className="flex flex-row items-center justify-center h-[24rem] mb-20 pr-[1rem] dark:bg-black bg-white relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-[40rem] px-4 ">
          <div className="absolute w-full bottom-15 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40 " />
          <div className="absolute w-full h-72 h-full z-10">
            <Suspense fallback={<div>Loading...</div>}>
              <World data={sampleArcs} globeConfig={globeConfig} />
            </Suspense>
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="div dark:bg-black"
      >
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black dark:text-white">
          My name is Tedi!
        </h2>
        <p className="text-center text-base text-[.75rem] md:text-[1rem] font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
          I'm a big fan of this place ^
        </p>
      </motion.div>
    </>
  );
}
