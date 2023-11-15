"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroTitle() {
  const constraintsRef = useRef(null);
  const constraintsRefTop = useRef(null);
  const constraintsRefBottom = useRef(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.75], [1, 0.85]);

  return (
    <>
      <motion.div
        ref={targetRef}
        className="fixed left-1/2 -translate-x-1/2 flex flex-col justify-start items-center w-full pt-20 mb-[8rem] h-screen"
        style={{ opacity }}
      >
        <motion.div
          style={{ scale }}
          className="text-center w-full flex flex-row justify-center"
        >
          <motion.div
            className="relative container py-16 w-full max-w-3xl flex flex-col justify-center items-center gap-4 px-4 md:mx-0"
            ref={constraintsRef}
          >
            <div className="grid grid-rows-2 w-full gap-2">
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <p className="font-bold text-8xl text-center md:text-left">
                  Jaume
                </p>
                <motion.div
                  ref={constraintsRefTop}
                  className="w-full min-h-[100px] md:h-fit relative container col-span-2 from-yellow-500 via-orange-500 to-red-500  rounded-xl bg-gradient-to-bl flex-1"
                >
                  <motion.img
                    alt="Sticker"
                    src="/sticker6.svg"
                    drag
                    dragConstraints={constraintsRefTop}
                    className="item h-20 w-auto absolute top-8 right-12 hover:cursor-grab active:cursor-grabbing"
                  />
                </motion.div>
              </div>
              <div className="flex flex-row justify-center gap-4">
                <motion.div
                  ref={constraintsRefBottom}
                  className="hidden md:flex relative container from-blue-500 via-sky-500 to-teal-500  rounded-xl bg-gradient-to-br flex-1"
                >
                  <motion.img
                    alt="Sticker"
                    src="/sticker7.svg"
                    drag
                    dragConstraints={constraintsRefBottom}
                    className="item h-20 w-auto absolute top-8 right-12 hover:cursor-grab active:cursor-grabbing bg-transparent"
                  />
                </motion.div>
                <p className="font-bold text-8xl -z-10 md:z-0">Gelabert</p>
              </div>
            </div>

            <motion.img
              alt="Sticker"
              src="/sticker1.svg"
              drag
              dragConstraints={constraintsRef}
              className="item h-20 w-auto absolute bottom-10 left-6 hover:cursor-grab active:cursor-grabbing shadow-lg"
            />
            <motion.img
              alt="Sticker"
              src="/sticker2.svg"
              drag
              dragConstraints={constraintsRef}
              className="item h-10 w-auto absolute top-8 right-12 hover:cursor-grab active:cursor-grabbing shadow-lg"
            />
            <motion.img
              alt="Sticker"
              src="/sticker3.svg"
              drag
              dragConstraints={constraintsRef}
              className="item h-16 w-auto absolute bottom-20 left-12 hover:cursor-grab active:cursor-grabbing"
            />
            <motion.img
              alt="Sticker"
              src="/sticker4.svg"
              drag
              dragConstraints={constraintsRef}
              className="item h-16 w-auto absolute bottom-auto right-60 hover:cursor-grab active:cursor-grabbing"
            />
            <motion.img
              alt="Sticker"
              src="/sticker5.svg"
              drag
              dragConstraints={constraintsRef}
              className="item h-16 w-auto absolute bottom-0 left-auto hover:cursor-grab active:cursor-grabbing"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
