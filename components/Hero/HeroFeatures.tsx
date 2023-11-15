"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import NavbarSocialLink from "../Links/NavbarSocialLink";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function HeroFeatures() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  return (
    <div className="mt-[50vh]">
      <div className="h-fit max-h-[100vh] w-full z-10 flex flex-col">
        <div className="sticky top-[20px] rounded-full border w-full py-2 px-4 backdrop-blur-sm bg-white/30 flex flex-row justify-between items-center z-10">
          <p className="font-medium text-neutral-500">
            Senior Software Engineer @ MeiT
          </p>
          <div className="flex flex-row justify-end items-center gap-4">
            <NavbarSocialLink href="" icon={<Github />} />
            <NavbarSocialLink href="" icon={<Linkedin />} />
            <NavbarSocialLink href="" icon={<Twitter />} />
          </div>
        </div>
        <motion.div
          ref={targetRef}
          className="relative left-1/2 -translate-x-1/2 grid grid-cols-3 mx-12"
        >
          <Link
            href=""
            className="border rounded-lg bg-neutral-50 w-[300px] h-fit mt-20"
          >
            <motion.div
              style={{ opacity }}
              className="h-[300px] w-full flex flex-col justify-end items-center"
            >
              <div className="bg-white border-t w-full px-3 py-2 rounded-b-lg flex flex-col justify-start items-start">
                <p className="text-black font-medium">hola</p>
                <p className="text-neutral-500 text-sm">Descript</p>
              </div>
            </motion.div>
          </Link>
          <Link
            href=""
            className="border rounded-lg bg-neutral-50 w-[300px] h-fit mt-20"
          >
            <motion.div
              style={{ opacity }}
              className="h-[300px] w-full flex flex-col justify-end items-center"
            >
              <div className="bg-white border-t w-full px-3 py-2 rounded-b-lg flex flex-col justify-start items-start">
                <p className="text-black font-medium">hola</p>
                <p className="text-neutral-500 text-sm">Descript</p>
              </div>
            </motion.div>
          </Link>
          <Link
            href=""
            className="border rounded-lg bg-neutral-50 w-[300px] h-fit mt-20"
          >
            <motion.div
              style={{ opacity }}
              className="h-[300px] w-full flex flex-col justify-end items-center"
            >
              <div className="bg-white border-t w-full px-3 py-2 rounded-b-lg flex flex-col justify-start items-start">
                <p className="text-black font-medium">hola</p>
                <p className="text-neutral-500 text-sm">Descript</p>
              </div>
            </motion.div>
          </Link>
        </motion.div>
        <div className="h-screen my-20 pb-10">
          <p className="text-sm text-neutral-500">
            Fullstack dev solving problems at scale. Building user-centric{" "}
            <b>digital products</b> @ <b>MeiT</b>. Former Investment Banker. I
            enjoy <b>running, sailing and spending time with my family</b>.
            Currently based in <b>Madrid</b>. I really enjoy{" "}
            <b>helping new employees</b> adapt to the company <b>culture</b>. If
            you think I could <b>help you</b>, send me an email at{" "}
            <a href="mailto:jaume@meit.es">
              <b className="underline hover:text-red-400 transition-all">
                jaume@meit.es
              </b>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
