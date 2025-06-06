import { useCursor } from "@/app/utils/customHooks/useCursor";
import { useAppSelector } from "@/lib/redux/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const BackToTopButton = () => {
  const { scroll } = useAppSelector((state) => state.scroll);
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    if (scroll > 20) {
      gsap.to(buttonRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1,
        overwrite: "auto",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(buttonRef.current, {
        opacity: 0,
        filter: "blur(10px)",
        y: 50,
        duration: 1,
        overwrite: "auto",
        pointerEvents: "none",
      });
    }
  }, [scroll]);
  return (
    <div
      ref={buttonRef}
      className="fixed bottom-12 left-1/2 -translate-x-1/2 z-[999]"
    >
      <button
        onClick={()=>{gsap.to(window, {
            duration: 1,
            scrollTo: '#hero',
        })}}
        onMouseEnter={() => mouseEnterHandler("Back to Top")}
        onMouseLeave={mouseLeaveHandler}
        className="rounded-full bg-zinc-900/20 dark:bg-amber-50/20 hover:bg-zinc-900/50 dark:hover:bg-amber-50/50 backdrop-blur-[10px] px-5 py-2 cursor-none transition-all duration-300"
      >
        <ArrowUp />
      </button>
    </div>
  );
};

export default BackToTopButton;
