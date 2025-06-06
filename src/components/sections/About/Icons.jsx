import { useCursor } from "@/app/utils/customHooks/useCursor";
import { workwith } from "@/lib/globalConsts/projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Icons = ({ heading, skills }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const iconRef = useRef([]);

  useGSAP(() => {
    if (iconRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        filter: 'blur(10px)',
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 70%",
          scrub: 1,
        },
      });
      gsap.from(iconRef.current, {
        opacity: 0,
        filter: 'blur(10px)',
        stagger: 0.4,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top 70%",
          scrub: 1,
        },
      });
    }
  });
  return (
    <div ref={containerRef} className="space-y-3">
      <div className="w-full h-fit overflow-hidden">
        <p ref={headingRef} className="text-[1.2rem] text-center">{heading}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-5 w-full">
        {skills.map((w, index) => (
          <div
            key={index}
            onMouseEnter={()=>mouseEnterHandler(w.name)}
            onMouseLeave={mouseLeaveHandler}
            ref={(el) => (iconRef.current[index] = el)}
            className="size-[40px] overflow-hidden"
          >
            <Image
              src={w.icon}
              alt="icon"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Icons;