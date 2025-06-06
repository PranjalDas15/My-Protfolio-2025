import { useCursor } from "@/app/utils/customHooks/useCursor";
import { JOURNEY } from "@/lib/globalConsts/journey";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const progressParentRef = useRef(null);
  const progressRef = useRef(null);
  const headingRef = useRef(null);
  const journeysRef = useRef([]);

  useGSAP(() => {
    gsap.to(progressRef.current, {
      height: 0,
      ease: "linear",
      scrollTrigger: {
        trigger: progressParentRef.current,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
    if (journeysRef.current && journeysRef.current.length > 0) {
      journeysRef.current.forEach((j, index) => {
        if (!j) return;

        gsap.from(j, {
          opacity: 0,
          x: index % 2 === 0 ? -40 : 40,
          filter: "blur(50px)",
          scrollTrigger: {
            trigger: j,
            start: "top bottom",
            end: "top 70%",
            scrub: 1,
          },
        });
      });
    }

    gsap.from(headingRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom",
        end: "top 70%",
        scrub: 1,
      },
    });
  });

  return (
    <div className="w-full h-full flex justify-center items-center font-robotoc py-5 px-2">
      <div className="w-full md:w-[700px] space-y-5">
        <div className="w-full h-fit overflow-hidden">
          <p
            ref={headingRef}
            className="text-[1.5rem] text-center font-semibold"
          >
            My Journey
          </p>
        </div>
        <div className="relative w-full flex flex-col gap-2 bg-red-200 bg-clip-text">
          {JOURNEY.map((j, index) => (
            <div
              key={index}
              ref={(el) => (journeysRef.current[index] = el)}
              className="w-full flex items-center even:justify-start even:text-end odd:justify-end odd:text-start"
            >
              <div
                onMouseEnter={() => mouseEnterHandler(j.type)}
                onMouseLeave={mouseLeaveHandler}
                className="w-[49%] p-2 "
              >
                <p className="text-[1.2rem] font-semibold">{j.name}</p>
                <p className="text-[0.8rem]">{j.details}</p>
                <p className="text-[0.7rem]">{j.duration}</p>
                <p className="text-[0.6rem] text-red-400">
                  {j.status === "dropped" && "Dropped Out"}
                </p>
              </div>
            </div>
          ))}

          <div
            ref={progressParentRef}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[0.8%] rounded-full overflow-hidden h-full bg-gradient-to-b from-orange-500 via-orange-200 to-sky-500 z-0"
          >
            <div
              ref={progressRef}
              className="absolute bottom-0 left-0 w-full h-full bg-gray-700 z-10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
