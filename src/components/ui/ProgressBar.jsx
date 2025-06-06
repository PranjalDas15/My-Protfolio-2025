import { useAppSelector } from "@/lib/redux/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProgressBar = () => {
  const { scroll } = useAppSelector((state) => state.scroll);
  const progressRef = useRef(null);
  useEffect(() => {
    gsap.to(progressRef.current, {
      scaleX: `${scroll}%`,
    });
  }, [scroll]);

  return (
    <div className="w-screen h-[4px] z-[999]">
      <div ref={progressRef} className="h-full bg-orange-400/90 dark:bg-sky-400/90  scale-x-0 origin-left"></div>
    </div>
  );
};

export default ProgressBar;
