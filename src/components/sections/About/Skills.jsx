import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import Icons from "./Icons";
import { familiar, workwith } from "@/lib/globalConsts/projects";

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
    const containerRef = useRef(null);
    const skillHeadingRef = useRef(null);

    useGSAP(()=>{
        gsap.from(skillHeadingRef.current, {
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
    })
  return (
    <div ref={containerRef} className="flex flex-col gap-5 w-full">
      <div className="w-full h-fit overflow-hidden">
        <h3
          ref={skillHeadingRef}
          className="text-[1.5rem] font-semibold text-center"
        >
          My Skills
        </h3>
      </div>
      <Icons heading={"These I work with"} skills={workwith} />
      <Icons heading={"These I'm familiar with"} skills={familiar} />
    </div>
  );
};

export default Skills;
