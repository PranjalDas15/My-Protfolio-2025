import React, { useRef, useState } from "react";
import ProgressBar from "../ui/ProgressBar";
import ThemeToggler from "../ui/ThemeToggler";
import { useCursor } from "@/app/utils/customHooks/useCursor";
import { useAppSelector } from "@/lib/redux/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Menu from "./Menu";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Navbar = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const [isOpen, setIsOpen] = useState(false);
  const navBgRef = useRef(null);
  const navBgMainRef = useRef(null);
  const navBgSecRef = useRef(null);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    if (isOpen) {
      tl.to("#home", { scale: 0.99, filter: "blur(10px)" }, 0)
        .to(navBgRef.current, { height: "100vh", duration: 0.5 }, 0.2)
        .to(
          navBgSecRef.current,
          { scaleY: 0, transformOrigin: "50% 100%", duration: 0.5 },
          0.7
        )
        .to("#home", { opacity: 0 }, 0.7);
    } else {
      tl.to("#home", { opacity: 1 }, 0)
        .to(
          navBgSecRef.current,
          { scaleY: 1, transformOrigin: "50% 100%", duration: 0.5 },
          0.5
        )
        .to(navBgRef.current, { height: "0vh", duration: 0.5 }, 1)
        .to("#home", { scale: 1, filter: "blur(0px)" }, 1.2);
    }
  }, [isOpen]);

  const menuCloseHandler = (section) => {
    setIsOpen(false);
    const tl = gsap.timeline({
      defaults: {
        ease: "power1.inOut",
      },
    });
    tl.to("#home", { opacity: 1 }, 0)
      .to(
        navBgSecRef.current,
        { scaleY: 1, transformOrigin: "50% 100%", duration: 0.5 },
        0.5
      )
      .to(navBgRef.current, { height: "0vh", duration: 0.5 }, 1)
      .to("#home", { scale: 1, filter: "blur(0px)" }, 1.2);
    gsap.to(window, {
      scrollTo: `#${section}`,
      duration: 1,
      delay: 0.8
    });
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-[50px] z-[999]">
      <ProgressBar />
      <div className="w-full h-full flex items-end justify-between px-10">
        <div className="size-[40px]">
          <img src={theme === 'light' ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'} alt="" className="w-full h-full object-contain"/>
        </div>
        <div className="flex items-center gap-5 z-[99] px-2 py-1 rounded-full bg-transparent backdrop-blur-[10px]">
          <button
            onClick={() => onClickHandler()}
            className="transition-all duration-300"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
          <ThemeToggler />
        </div>
      </div>

      <div
        ref={navBgRef}
        className="absolute top-0 left-0 w-screen h-0 overflow-hidden"
      >
        <div
          ref={navBgSecRef}
          className="absolute top-0 left-0 w-full h-full dark:bg-amber-50 bg-zinc-700"
        />
        <div
          ref={navBgMainRef}
          className="w-full h-full dark:bg-zinc-800 bg-amber-50"
        >
          <Menu isOpen={isOpen} menuCloseHandler={menuCloseHandler} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
