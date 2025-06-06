"use client";

import { useCursor } from "@/app/utils/customHooks/useCursor";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setText } from "@/lib/redux/slices/mouseSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorBodyRef = useRef(null);
  const cursorTextRef = useRef(null);
  const { text, isHover } = useAppSelector(
    (state) => state.mouse
  );

  useGSAP(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    let xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.3});
    let yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.3});

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  });

  useGSAP(() => {
    gsap.to(cursorTextRef.current, {
      scale: isHover ? 1 : 0,
      opacity: isHover ? 1 : 0,
      duration: 0.3,
      whiteSpace: "nowrap",
      transformOrigin: 'left bottom',
      ease: "circ",
    });

    gsap.to(cursorBodyRef.current, {
      scale: isHover ? 0.5 : 1,
      duration: 0.3
    })
  }, [isHover]);
  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[999]"
    >
      <div
        ref={cursorBodyRef}
        className={`rounded-full size-[20px] bg-gray-800/50 dark:bg-white/50 flex justify-center items-center backdrop-blur-[5px]`}
      ></div>
      <p
        ref={cursorTextRef}
        className={`absolute bottom-full left-full opacity-0 px-5 font-light text-white dark:text-zinc-900 text-[0.8rem] font-robotoc bg-gray-800/50 dark:bg-white/50 rounded-full py-2`}
      >
        {text}
      </p>
    </div>
  );
};

export default Cursor;
