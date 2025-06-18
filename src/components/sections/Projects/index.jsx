import React, { useRef, useState } from "react";
import Heading from "./Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/globalConsts/projects";
import { useCursor } from "@/app/utils/customHooks/useCursor";
import ProjectDetails from "./ProjectDetails";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setIsProjectOpen } from "@/lib/redux/slices/projectSlice";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const index = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const dispatch = useAppDispatch();
  const { isProjectOpen } = useAppSelector((state) => state.project);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const projectRef = useRef([]);
  const selectedProjecttRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useGSAP(() => {
    gsap.from(projectRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      scaleX: 0.9,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
      },
    });
  });

  useGSAP(() => {
    gsap.set(headingRef.current, {
      opacity: 0,
      filter: "blur(10px)",
    });
    if (isProjectOpen) {
      gsap.fromTo(
        headingRef.current,
        {
          opacity: 1,
          filter: "blur(0)",
        },
        {
          opacity: 0,
          filter: "blur(10px)",
          duration: 1,
        }
      );
    } else {
      gsap.to(headingRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
      });
    }
  }, [isProjectOpen]);

  const handleOpenProject = (p) => {
    setSelectedProject(p);
    setIsOpen(true)
    gsap.to(window, {
      scrollTo: "#works",
      onComplete: () => {
        dispatch(setIsProjectOpen(true));
        gsap.set(projectRef.current, {
          opacity: 1,
          filter: "blur(0px)",
          scaleX: 1,
          pointerEvents: "auto",
        });

        // animation for project list
        gsap.to(projectRef.current, {
          opacity: 0,
          filter: "blur(10px)",
          scaleX: 0.9,
          pointerEvents: "none",
          duration: 0.5,
          stagger: 0.1,
        });

        //animation for project details
        gsap.set(selectedProjecttRef.current, {
          pointerEvents: "none",
        });
        gsap.to(selectedProjecttRef.current, {
          pointerEvents: "auto",
        });
      },
    });
  };

  const handleCloseProject = () => {
    setIsOpen(false)
    //animation for project details
    gsap.set(selectedProjecttRef.current, {
      pointerEvents: "auto",
    });
    gsap.to(selectedProjecttRef.current, {
      pointerEvents: "none",
    });

    // animation for project list
    gsap.set(projectRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      scaleX: 0.9,
      pointerEvents: "none",
    });
    gsap.to(projectRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      scaleX: 1,
      pointerEvents: "auto",
      duration: 0.5,
      stagger: 0.2,
      delay: 0.5,
      onUpdate: () => {
        dispatch(setIsProjectOpen(false));
      },
    });
  };

  return (
    <div>
      <div
        ref={containerRef}
        className="relative w-screen h-screen flex justify-center items-center px-2 md:px-10 md:pt-[100px]"
      >
        <div ref={headingRef} className="absolute top-[50px] md:top-5 w-full">
          <Heading />
        </div>

        <div className="relative w-full h-[60%] md:h-[70%] flex flex-col items-center justify-center">
          {projects.map((p, index) => (
            <button
              ref={(el) => (projectRef.current[index] = el)}
              onClick={() => handleOpenProject(p)}
              onMouseEnter={() => mouseEnterHandler("Open Project")}
              onMouseLeave={mouseLeaveHandler}
              className="relative w-full h-full border-b flex items-center justify-between lg:px-10 group cursor-none"
              key={index}
            >
              <div className="z-10">
                <p className="text-[4rem] md:text-[5rem] lg:text-[6rem] leading-0 opacity-50 font-bold group-hover:translate-x-5 group-hover:text-orange-400 dark:group-hover:text-sky-400 transition-all duration-400 z-10">
                  0{index + 1}
                </p>
              </div>
              <div className="z-10">
                <p className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-end opacity-80 font-light group-hover:-translate-x-5 group-hover:text-orange-400 dark:group-hover:text-sky-400 transition-all duration-400 z-10">
                  {p.name.toUpperCase()}
                </p>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-0 group-hover:h-full bg-zinc-700 dark:bg-amber-50 transition-all duration-300 z-0" />
            </button>
          ))}
        </div>

        {selectedProject && (
          <div ref={selectedProjecttRef} className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <ProjectDetails
            isOpen={isOpen}
            project={selectedProject}
            onClose={handleCloseProject}
          />
          </div>
        )}
      </div>
    </div>
  );
};

export default index;
