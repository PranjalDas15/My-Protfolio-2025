import React, { useRef, useState } from "react";
import ProgressBar from "../ui/ProgressBar";
import ThemeToggler from "../ui/ThemeToggler";
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
  const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

  // Animate menu label out
  tl.to("#menu-toggle-text", {
    opacity: 0,
    duration: 0.2,
    onComplete: () => {
      setIsOpen((prev) => !prev);
    },
  });

  // Delay actual menu animation slightly after label animates out
  tl.add(() => {
    const innerTl = gsap.timeline({ defaults: { ease: "power1.inOut" } });

    if (!isOpen) {
      // Opening menu
      innerTl
        .to("#home", { scale: 0.99, filter: "blur(10px)" }, 0)
        .to(navBgRef.current, { height: "100vh", duration: 0.5 }, 0.2)
        .to(
          navBgSecRef.current,
          { scaleY: 0, transformOrigin: "50% 100%", duration: 0.6 },
          0.7
        )
        .to("#home", { opacity: 0 }, 0.7);
    } else {
      // Closing menu
      innerTl
        .to("#home", { opacity: 1 }, 0)
        .to(
          navBgSecRef.current,
          { scaleY: 1, transformOrigin: "50% 100%", duration: 0.5 },
          0.5
        )
        .to(navBgRef.current, { height: "0vh", duration: 0.5 }, 1)
        .to("#home", { scale: 1, filter: "blur(0px)" }, 1.3);
    }
  });

  // Animate label back in after a slight delay
  tl.to("#menu-toggle-text", {
    opacity: 1,
    duration: 0.3,
    delay: 0.2,
  });
};


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
      .fromTo("#open-menu", { opacity: 0 }, { opacity: 1 }, 1)
      .fromTo("#close-menu", { opacity: 1 }, { opacity: 0 }, 1)
      .to(navBgRef.current, { height: "0vh", duration: 0.5 }, 1)
      .to("#home", { scale: 1, filter: "blur(0px)" }, 1.2);
    gsap.to(window, {
      scrollTo: `#${section}`,
      duration: 1,
      delay: 0.8,
    });
  };
  return (
    <>
      <ProgressBar />
      <div className="w-full h-full flex items-end justify-between px-10">
        <div className="size-[40px]">
          <img
            src={
              theme === "light"
                ? "/assets/logo-dark.svg"
                : "/assets/logo-light.svg"
            }
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="relative flex items-center gap-10 z-[999] px-2 py-1 rounded-full bg-transparent backdrop-blur-xl">
          <button onClick={() => onClickHandler()} className="w-2">
            <p
              id="menu-toggle-text"
              className="absolute -translate-y-1/2 top-1/2 left-2 transition-all duration-500"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </p>
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
    </>
  );
};

export default Navbar;
