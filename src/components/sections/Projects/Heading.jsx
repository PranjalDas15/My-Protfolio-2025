import { useAppSelector } from "@/lib/redux/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";

gsap.registerPlugin(ScrollTrigger);

const Heading = () => {
  const headingRef = useRef(null);
  const { theme } = useAppSelector((state) => state.theme);

  useGSAP(() => {
    gsap.set(headingRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      y: "100%",
      immediateRender: true,
    });
    gsap.to(headingRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      y: "0%",
      duration: 2,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        end: "top center",
        scrub: 1,
      },
    });
  });

  return (
    <div ref={headingRef} className="opacity-0">
      <Marquee loop={0} speed={100}>
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-5 px-2.5 text-orange-400/80"
          >
            <svg viewBox="0 0 650 200" className="w-full h-fit ">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-anton"
                fontSize="10rem"
                stroke={
                  theme === "light"
                    ? "oklch(37% 0.013 285.805)"
                    : "oklch(98.7% 0.022 95.277)"
                }
                strokeWidth="1"
                fill="none"
              >
                MY WORKS
              </text>
            </svg>
            <svg viewBox="0 0 650 200" className="w-full h-fit ">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-anton"
                fontSize="10rem"
                fill={
                  theme === "light"
                    ? "oklch(37% 0.013 285.805)"
                    : "oklch(98.7% 0.022 95.277)"
                }
              >
                MY WORKS
              </text>
            </svg>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Heading;
