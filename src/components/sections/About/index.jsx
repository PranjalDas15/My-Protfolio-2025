import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import Info from "./Info";
import { Flip } from "gsap/Flip";
import Marquee from "react-fast-marquee";
import { familiar, workwith } from "@/lib/globalConsts/projects";
import Journey from "./Journey";
import { useCursor } from "@/app/utils/customHooks/useCursor";
import Icons from "./Icons";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger, Flip);
const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  // useGSAP(() => {
  //   const handleMouseMove = (e) => {
  //     const rect = buttonParentRef.current.getBoundingClientRect();
  //     const offsetX = e.clientX - (rect.left + rect.width / 2);
  //     const offsetY = e.clientY - (rect.top + rect.height / 2);

  //     const val = 20;
  //     gsap.to(buttonRef.current, {
  //       x: (offsetX / (rect.width / 2)) * val,
  //       y: (offsetY / (rect.height / 2)) * val,
  //       duration: 0.3,
  //     });
  //   };

  //   const resetPos = () => {
  //     gsap.to(buttonRef.current, {
  //       x: 0,
  //       y: 0,
  //       duration: 0.3,
  //       ease: "power3.inOut",
  //     });
  //   };

  //   buttonParentRef.current.addEventListener("mousemove", handleMouseMove);
  //   buttonParentRef.current.addEventListener("mouseleave", resetPos);

  //   return () => {
  //     buttonParentRef.current.removeEventListener("mousemove", handleMouseMove);
  //     buttonParentRef.current.removeEventListener("mouseleave", resetPos);
  //   };
  // });

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      {
        filter: 'blur(10px)',
        opacity: 0,
      },
      {
        filter: 'blur(0px)',
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });
    tl.fromTo(
      imageRef.current,
      {
        top: "-30%",
        borderRadius: "100%",
      },
      { top: "4%", scale: 1, borderRadius: "5%", duration: 1 }
    );

    gsap.from(buttonRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full font-robotoc flex justify-center items-center px-2"
    >
      <div className="w-full md:w-[700px] h-full flex flex-col gap-10">
        <div
          ref={imageRef}
          onMouseEnter={() => mouseEnterHandler("It's me")}
          onMouseLeave={() => mouseLeaveHandler()}
          className="absolute left-[50%] scale-50 -translate-x-1/2 size-[400px] overflow-hidden"
        >
          <Image
            alt="profile"
            src={"/assets/profile.jpg"}
            width={500}
            height={500}
            className="w-full h-full object-cover grayscale hover:grayscale-0 scale-110 hover:scale-100 transition-all duration-400"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-5 pt-[500px]">
          <Info />
          <button
            ref={buttonRef}
            onMouseEnter={() => mouseEnterHandler("Download")}
            onMouseLeave={() => mouseLeaveHandler()}
            className="relative cursor-none w-[150px] h-[45px] border rounded-xl overflow-hidden group"
          >
            <p className="relative group-hover:text-white dark:group-hover:text-gray-800 tracking-wider transition-all duration-400 z-10">
              My Resume
            </p>
            <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-gray-800 dark:bg-white transition-all duration-400 z-0"></div>
          </button>
        </div>
        <Skills />

        <Journey />
      </div>
    </div>
  );
};

export default About;
