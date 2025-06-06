import { useCursor } from "@/app/utils/customHooks/useCursor";
import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Copy, Expand, Minus, X } from "lucide-react";
import React, { useRef } from "react";

const ProjectDetails = ({ project, onClose, isOpen }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const containerRef = useRef(null);
  const contentRef = useRef([]);
  useGSAP(() => {
    if(isOpen) {
      gsap.fromTo(containerRef.current, {
        scale: 0.95,
        filter: 'blur(10px)',
        opacity: 0,
      }, {
        scale: 1,
        filter: 'blur(0px)',
        opacity: 1,
        delay: 1
      })
      gsap.fromTo(contentRef.current, {
      opacity: 0,
      pointerEvents: 'none',
      filter: "blur(10px)",
    }, {
      opacity: 1,
      filter: "blur(0px)",
      pointerEvents: 'auto',
      duration: 1,
      stagger: 0.1,
      delay: 1
    });
    } else {
      gsap.to(containerRef.current, {
        scale: 0.95,
        filter: 'blur(10px)',
        opacity: 0,
      })
      gsap.to(contentRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      pointerEvents: 'none',
      duration: 1,
    });
    }
  }, [isOpen]);
  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <div className="relative w-[70%] xl:w-[85%] h-[80%] flex flex-col-reverse xl:flex-row xl:justify-between">
        <div className="w-full h-[60%] xl:w-[50%] xl:h-full flex flex-col justify-center space-y-2">
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

          <div
            ref={(el) => (contentRef.current[4] = el)}
            className="flex items-center gap-2 pt-5 text-[0.9rem] xl:text-[1.2rem] font-light"
          >
            <Button label={"Github"} hoverText={"Redirect to Github"} />
            <Button label={"Visit Site"} hoverText={"Redirect to Site"} />
          </div>
        </div>

        <div
          ref={(el) => (contentRef.current[5] = el)}
          className="relative w-full h-[40%] xl:w-[50%] xl:h-full flex justify-start items-center"
        >
          <div
            onMouseEnter={() => mouseEnterHandler("Close")}
            onMouseLeave={mouseLeaveHandler}
            onClick={() => onClose()}
            className="absolute -top-10 xl:top-0 right-0"
          >
            <X
              size={30}
              className="hover:scale-110 transition-all duration-100"
            />
          </div>
          <div className="w-[90%] h-[300px] xl:h-[400px] xl:w-full overflow-hidden shadow-[0_1px_30px_10px_rgba(0,0,0,0.1)] rounded-2xl">
            <div className="w-full h-full">
              <img
                src={project.images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
