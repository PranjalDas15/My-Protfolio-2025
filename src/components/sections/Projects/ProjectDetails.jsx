import { useCursor } from "@/app/utils/customHooks/useCursor";
import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AlertTriangle, Copy, Expand, Minus, X } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const ProjectDetails = ({ project, onClose, isOpen }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const containerRef = useRef(null);
  const contentRef = useRef([]);
  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        containerRef.current,
        {
          scale: 0.95,
          filter: "blur(10px)",
          opacity: 0,
        },
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          delay: 1,
        }
      );
      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          pointerEvents: "none",
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          pointerEvents: "auto",
          duration: 1,
          stagger: 0.1,
          delay: 1,
        }
      );
    } else {
      gsap.to(containerRef.current, {
        scale: 0.95,
        filter: "blur(10px)",
        opacity: 0,
      });
      gsap.to(contentRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        pointerEvents: "none",
        duration: 1,
      });
    }
  }, [isOpen]);
  return (
    <div
      ref={containerRef}
      id="project-container"
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <div className="relative w-[90%] xl:w-[95%] 2xl:w-[85%] h-[80%] flex flex-col-reverse xl:flex-row justify-between lg:gap-5">
        <div className="w-full h-fit lg:h-full flex flex-col justify-center space-y-2">
          <h2
            ref={(el) => (contentRef.current[0] = el)}
            className="text-[2rem] xl:text-[2.5rem] font-light"
          >
            {project.name}
          </h2>
          <div
            ref={(el) => (contentRef.current[1] = el)}
            className="flex items-center gap-2"
          >
            {project.technologies.map((t, index) => (
              <div key={index} className="size-[25px] overflow-hidden">
                <img
                  src={t.icon}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <p
            ref={(el) => (contentRef.current[2] = el)}
            className="py-3 text-[0.9rem] font-light"
          >
            {project.type}
          </p>

          <ul ref={(el) => (contentRef.current[3] = el)} className="">
            {project.desc.map((d, index) => (
              <li
                key={index}
                className="text-[1rem] xl:text-[1.2rem] text-wrap font-light xl:py-1.5"
              >
                {d}
              </li>
            ))}
          </ul>

          <div ref={(el) => (contentRef.current[4] = el)}>
            <div className="flex items-center gap-2 pt-5 text-[0.9rem] xl:text-[1.2rem] font-light">
              {project.links.github !== '' ? (
                <Link target="_blank" href={project.links.github}>
                  <Button label={"Github"} hoverText={"Redirect to Github"} />
                </Link>
              ):(<></>)}

              {project.links.deploy !== '' ? (
                <Link target="_blank" href={project.links.deploy}>
                  <Button label={"Visit Site"} hoverText={"Redirect to Site"} />
                </Link>
              ): (<></>)}
              <div className="md:hidden" onClick={onClose}>
                <Button label={"Close"} hoverText={"Close Tab"} />
              </div>
            </div>
            {project.links.deploy !== '' ? (
              <div className="flex items-center gap-1 text-[0.8rem] text-red-400">
                <div>
                  <AlertTriangle size={12} />
                </div>
                <p className="py-2 font-extralight">
                  The visited link might take some time to load as they are
                  uploaded on free servers. Sorry about that.
                </p>
              </div>
            ): (<></>)}
          </div>
        </div>

        <div
          ref={(el) => (contentRef.current[5] = el)}
          className="relative w-full h-full md:w-[80%] lg:w-2/3 xl:w-full  flex justify-start items-center"
        >
          <div className="overflow-hidden shadow-[0_1px_30px_10px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="aspect-video">
              <img
                src={project.images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div
          onMouseEnter={() => mouseEnterHandler("Close")}
          onMouseLeave={mouseLeaveHandler}
          onClick={() => onClose()}
          className="hidden md:block absolute -top-10 xl:top-0 right-0"
        >
          <X
            size={30}
            className="hover:scale-110 transition-all duration-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
