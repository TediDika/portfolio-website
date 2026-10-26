"use client";
import { motion } from "framer-motion";
import React, { Suspense, lazy } from "react";
import { globeConfig, colors, sampleArcs } from "../constants";
const World = lazy(() => import("./Globe"));
const globeFade = "linear-gradient(to bottom, black 65%, transparent 90%)";

// Where the globe's center is, measured from the top-left of the 700 x 170
// "Hello World!" box: 8px right of the page center and 192px below the box.
const GLOBE_X = 358;
const GLOBE_Y = 362;
const TEXT_RADIUS = 273;
const helloArc = `M ${GLOBE_X - TEXT_RADIUS} ${GLOBE_Y} A ${TEXT_RADIUS} ${TEXT_RADIUS} 0 0 1 ${GLOBE_X + TEXT_RADIUS} ${GLOBE_Y}`;
const helloTextClass =
  "text-[44px] sm:text-[76px] md:text-[91px] font-extrabold tracking-wider";

export function Hero() {
  return (
    <>
      <div className="flex justify-center mt-[4rem]">
        <svg
          viewBox="0 0 700 170"
          preserveAspectRatio="xMidYMin slice"
          className="w-full max-w-[700px] h-[170px] overflow-visible"
          role="img"
          aria-label="Hello World!"
        >
          <defs>
            <path id="hello-arc" d={helloArc} />
            {/* In a mask, white areas stay visible and black areas are cut away.
                Cutting away the inside of the letters leaves only the outer edge of
                the outline, without the lines where the font's letter shapes overlap. */}
            <mask id="hello-hollow">
              <rect x="-200" y="-200" width="1100" height="800" fill="white" />
              <text className={helloTextClass} fill="black" textAnchor="middle">
                <textPath href="#hello-arc" startOffset="50%">
                  Hello World!
                </textPath>
              </text>
            </mask>
          </defs>
          <text
            className={helloTextClass}
            fill="none"
            stroke="white"
            strokeWidth={3}
            strokeLinejoin="round"
            textAnchor="middle"
            mask="url(#hello-hollow)"
          >
            <textPath href="#hello-arc" startOffset="50%">
              Hello World!
            </textPath>
          </text>
        </svg>
      </div>

      <div className="flex flex-row items-center justify-center h-[24rem] mb-20 pr-[1rem] relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-[40rem] px-4 ">
          <div
            className="absolute w-full h-72 h-full z-10"
            style={{ maskImage: globeFade }}
          >
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
        className="div"
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
