import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const BgComponent = () => {
  const cursorRef = useRef(null);
  useGSAP(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });
    const mouseMove = (e) => {
      gsap.to(cursorRef.current, {
        duration: 2,
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    }
  });

  return (
    <div className="fixed top-0 w-full h-full">
      <div className="relative w-full h-full grid grid-cols-8 grid-rows-12 lg:grid-cols-24 lg:grid-rows-12 overflow-hidden gap-0.5 z-10">
        {Array.from({ length: 288 }).map((_, index) => (
          <div key={index} className=" bg-amber-50 dark:bg-zinc-900"></div>
        ))}
      </div>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 size-[900px] bg-radial to-80% from-zinc-700 dark:from-amber-50 to-transparent rounded-full opacity-30 z-0"
      />
      <div className="absolute top-0 bg-radial from-transparent to-60% to-amber-50 dark:to-zinc-900 w-full h-full z-20" />
    </div>
  );
};

export default BgComponent;
