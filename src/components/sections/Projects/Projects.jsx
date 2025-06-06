import { useCursor } from "@/app/utils/customHooks/useCursor";
import { projects } from "@/lib/globalConsts/projects";
import { useAppSelector } from "@/lib/redux/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Heading from "./Heading";
import Project from "./ProjectDetails";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const index = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const projectRef = useRef([]);
  const currentProjectRef = useRef(null);
  const { theme } = useAppSelector((state) => state.theme);
  const [currentProject, setCurrentProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [projectImage, setProjectImage] = useState(null);

  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  useGSAP(() => {
    // this is for the mouse cursor follow action
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });
    let xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.3,
      ease: "power2",
    });
    let yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.3,
      ease: "power2",
    });

    const moveCursor = (e) => {
      xTo(e.pageX + cursorRef.current.clientWidth / 2 - 225);
      yTo(e.pageY + cursorRef.current.clientHeight / 2 - 125);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      containerRef.current?.removeEventListener("mouseenter");
      containerRef.current?.removeEventListener("mouseleave");
    };
  });

  useGSAP(() => {
    gsap.from(projectRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      y: "100%",
      duration: 2,
      stagger: 0.3,
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 80%",
        end: "top center",
        scrub: 1,
      },
    });

    gsap.set(currentProjectRef.current, {
      opacity: 0,
      scale: 0
    })
  });

  const mouseEnter = (image) => {
    setProjectImage(image);
    gsap.fromTo(
      cursorRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
      }
    );
  };

  const mouseLeave = () => {
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: 1,
    });
  };

  const projectSelectHandler = (project) => {
    gsap.to(window, {
      scrollTo: "#works",
      duration: 0.5,
    });
    setIsOpen(true);
    gsap.set(currentProjectRef.current, {
      scale: 0,
      opacity: 0,
      pointerEvents: "none",
    });
    gsap.to(currentProjectRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      pointerEvents: "auto",
    });
    setCurrentProject(project);
  };

  const projectCloseHandler = () => {
    gsap.to(window, {
      scrollTo: "#works",
      duration: 0.5,
    });
    setIsOpen(false);
    gsap.set(currentProjectRef.current, {
      scale: 1,
      opacity: 1,
      pointerEvents: "auto",
    });
    gsap.to(currentProjectRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      pointerEvents: "none",
    });
    setCurrentProject(null);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center pt-[100px]"
    >
      <div className="relative w-full h-screen flex flex-col justify-center items-center pt-[100px] py-[50px]">
        <Heading />
        <div className="w-full h- flex flex-col items-center justify-center px-2 md:px-5 z-0 hover:z-20">
          {projects.slice(0, 5).map((p, index) => (
            <div
              // ref={(el) => (projectRef.current[index] = el)}
              onMouseEnter={() => mouseEnterHandler("Open Project")}
              onMouseLeave={() => mouseLeaveHandler()}
              key={index}
              className="relative w-[90%]  md:text-[2rem] font-light group"
            >
              <div className="relative w-full h-full py-[1rem] flex justify-between items-center group px-5">
                <p className="group-hover:translate-x-10 text-[4rem] font-semibold tracking-tighter transition-all duration-400">
                  0{index + 1}
                </p>
                <div
                  ref={(el) => (projectRef.current[index] = el)}
                  onClick={() => projectSelectHandler(p)}
                  onMouseEnter={() => mouseEnter(p.images[0])}
                  onMouseLeave={() => mouseLeave()}
                  className="absolute top-1/2 left-1/2 -translate-1/2 h-full w-[85%] flex items-center justify-center z-50"
                >
                  <p className="text-[2.5rem] font-light transition-all duration-400">
                    {p.name.toUpperCase()}
                  </p>
                </div>
                <div className="gap-5 text-[1rem] border w-[40px] h-[40px] flex items-center justify-center bg-zinc-700 dark:bg-amber-50 group-hover:bg-transparent group-hover:w-[100px] rounded-full overflow-hidden transition-all duration-400">
                  <button
                    onMouseEnter={() => mouseEnterHandler("Go to GitHub")}
                    onMouseLeave={mouseLeaveHandler}
                    className="cursor-none group-hover:opacity-100 opacity-0 transition-all duration-400 delay-100"
                  >
                    <div className="size-[30px] overflow-hidden">
                      <img
                        src={
                          theme === "light"
                            ? "/assets/github.svg"
                            : "/assets/github_dark.svg"
                        }
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </button>
                  <button
                    onMouseEnter={() => mouseEnterHandler("Visit Website")}
                    onMouseLeave={mouseLeaveHandler}
                    className="cursor-none group-hover:opacity-100 opacity-0 transition-all duration-400 delay-100"
                  >
                    <ArrowUpRight size={30} />
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gray-700 dark:bg-white z-0 transition-all duration-1000" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-[3px] bg-orange-400 dark:bg-sky-400 z-10 transition-all duration-900" />
            </div>
          ))}

          <button className="relative w-[90%]  md:text-[1.5rem] h-[80px] font-light">
            SHOW MORE
          </button>
        </div>

        <div
          ref={cursorRef}
          className=" fixed top-0 left-0 opacity-0 w-[450px] h-[250px] pointer-events-none rounded-xl overflow-hidden z-20"
        >
          <img
            src={projectImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div
        onClick={() => {
          projectCloseHandler();
        }}
        ref={currentProjectRef}
        className="absolute top-0 left-0 w-1/2 h-screen flex bg-red-200"
      >
        {currentProject && <Project project={currentProject} />}
      </div>
    </div>
  );
};

export default index;
