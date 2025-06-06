import { useCursor } from "@/app/utils/customHooks/useCursor";
import Button from "@/components/ui/Button";
import { Copy, Expand, Minus, X } from "lucide-react";
import React from "react";

const ProjectDetails = ({ ref, project, onClose }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
    >
      <div className="relative w-[70%] xl:w-[85%] h-[80%] flex flex-col-reverse xl:flex-row xl:justify-between">
        <div className="w-full h-[60%] xl:w-[50%] xl:h-full flex flex-col justify-center space-y-2">
          <h2 className="text-[2rem] xl:text-[2.5rem] font-light">
            {project.name}
          </h2>
          <div className="flex items-center gap-2">
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

          <p className="py-3 text-[0.9rem] font-light">{project.type}</p>

          <ul className="">
            {project.desc.map((d, index) => (
              <li
                key={index}
                className="text-[1rem] xl:text-[1.2rem] text-wrap font-light xl:py-1.5"
              >
                {d}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 pt-5 text-[0.9rem] xl:text-[1.2rem] font-light">
            <Button label={"Github"} hoverText={"Redirect to Github"} />
            <Button label={"Visit Site"} hoverText={"Redirect to Site"} />
          </div>
        </div>

        <div className="relative w-full h-[40%] xl:w-[50%] xl:h-full flex justify-start items-center">
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
