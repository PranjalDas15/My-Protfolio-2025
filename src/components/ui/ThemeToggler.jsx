"use client";

import { toggleTheme } from "../../lib/redux/slices/themeSlice";
import { Sun } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useCursor } from "@/app/utils/customHooks/useCursor";

const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const { theme } = useAppSelector((state) => state.theme);
  return (
    <>
      <button
        onClick={() => dispatch(toggleTheme())}
        onMouseEnter={() =>
          mouseEnterHandler(theme === "light" ? "Dark" : "Light")
        }
        onMouseLeave={mouseLeaveHandler}
        className="z-[9999] cursor-none"
      >
        <Sun size={30} />
      </button>
    </>
  );
};

export default ThemeToggler;
