import { useCursor } from "@/app/utils/customHooks/useCursor";
import React from "react";

const Button = ({ label, hoverText, onClickHandler }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  return (
    <button
      onClick={onClickHandler}
      onMouseEnter={() => mouseEnterHandler(hoverText)}
      onMouseLeave={mouseLeaveHandler}
      className="relative w-[90px] xl:w-[120px] h-[35px] xl:h-[45px] border rounded-full overflow-hidden group"
    >
      <p className="relative group-hover:text-amber-50 dark:group-hover:text-zinc-900 z-10 transition-all duration-400">
        {label}
      </p>
      <div className="absolute top-full left-1/2 -translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2 rounded-full size-[120px] bg-zinc-700 dark:bg-amber-50 z-0 pointer-events-none transition-all duration-400" />
    </button>
  );
};

export default Button;
