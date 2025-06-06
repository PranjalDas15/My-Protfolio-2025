import { useCursor } from "@/app/utils/customHooks/useCursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const desigRef = useRef([]);
  const footerRef = useRef(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  useGSAP(() => {
    const nameSplit = SplitText.create(nameRef.current, { type: "chars" });
    const desigSplit1 = SplitText.create(desigRef.current[0], {
      type: "chars",
    });
    const desigSplit2 = SplitText.create(desigRef.current[1], {
      type: "chars",
    });
    const desigSplit3 = SplitText.create(desigRef.current[2], {
      type: "chars",
    });
    const textSplit = SplitText.create(textRef.current, { type: "chars" });

    gsap.utils.shuffle(nameSplit.chars);
    gsap.utils.shuffle(desigSplit1.chars);
    gsap.utils.shuffle(desigSplit2.chars);
    gsap.utils.shuffle(desigSplit3.chars);
    gsap.utils.shuffle(textSplit.chars);

    gsap.from(nameSplit.chars, {
      opacity: 0,
      filter: "blur(10px)",
      whiteSpace: "nowrap",
      stagger: 0.1,
      duration: 0.5,
      delay: 0.5,
    });

    gsap.from(desigSplit1.chars, {
      opacity: 0,
      filter: "blur(10px)",
      whiteSpace: "nowrap",
      stagger: 0.02,
      duration: 0.2,
      delay: 1,
    });

    gsap.from(textSplit.chars, {
      opacity: 0,
      filter: "blur(10px)",
      whiteSpace: "nowrap",
      stagger: 0.02,
      duration: 0.2,
      delay: 1.5,
    });

    gsap.from(footerRef.current, {
      y: "-50%",
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.5,
      delay: 1.5,
    });

    gsap.to(containerRef.current, {
      filter: "blur(10px)",
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: 1,
      },
    });

    gsap.set([desigSplit2.chars, desigSplit3.chars], {
      opacity: 0,
      filter: "blur(10px)",
    });

    const tl = gsap.timeline({ delay: 3, repeat: -1, repeatDelay: 1.5 });
    tl.to(desigSplit1.chars, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.2,
      stagger: 0.02,
    });
    tl.to(desigSplit2.chars, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.2,
      stagger: 0.02,
      delay: 0.1,
    });
    tl.to(desigSplit2.chars, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.2,
      stagger: 0.02,
      delay: 1.5,
    });
    tl.to(desigSplit3.chars, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.2,
      stagger: 0.02,
      delay: 0.1,
    });
    tl.to(desigSplit3.chars, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.2,
      stagger: 0.02,
      delay: 1.5,
    });
    tl.to(desigSplit1.chars, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.2,
      stagger: 0.02,
      delay: 0.1,
    });
  });
  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center font-oswald"
    >
      <div
        ref={contentRef}
        className="absolute top-1/3 left-1/2 -translate-1/2 h-fit w-fit z-10"
      >
        <div className="overflow-hidden h-fit w-fit">
          <p
            ref={nameRef}
            onMouseEnter={() => {
              mouseEnterHandler("Hello! My name is Pranjal Das");
            }}
            onMouseLeave={mouseLeaveHandler}
            className="font-anton text-nowrap text-center text-[5rem]/[5rem] sm:text-[18rem]/[16rem]"
          >
            PRANJAL DAS
          </p>
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-between items-center text-[0.8rem] sm:text-[2rem]">
          <div className="relative h-[3rem] w-full md:w-1/2 overflow-hidden">
            <p
              ref={(el) => (desigRef.current[0] = el)}
              className="absolute top-0 left-0 text-center md:text-left w-full text-[2rem]"
            >
              FULLSTACK WEB DEVELOPER
            </p>
            <p
              ref={(el) => (desigRef.current[1] = el)}
              className="absolute top-0 left-0 text-center md:text-left w-full text-[2rem]"
            >
              FRONTEND WEB DEVELOPER
            </p>
            <p
              ref={(el) => (desigRef.current[2] = el)}
              className="absolute top-0 left-0 text-center md:text-left w-full text-[2rem]"
            >
              BACKEND WEB DEVELOPER
            </p>
          </div>
          <div className="h-fit w-fit overflow-hidden">
            <p ref={textRef}>BASED IN ASSAM, GUWAHATI</p>
          </div>
        </div>
      </div>

      <div
        ref={footerRef}
        className="absolute bottom-4 w-full flex justify-between items-end text-[0.8rem]/[0.8rem] md:text-[1rem]/[1.2rem] font-light px-6 z-[99]"
      >
        <p>Portfolio 2025</p>
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="text-orange-400 dark:text-sky-400" />
          <p>Scroll Down</p>
        </div>
        <p>Open to work</p>
      </div>
    </div>
  );
};

export default Hero;
