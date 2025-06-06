import { useCursor } from "@/app/utils/customHooks/useCursor";
import { socials } from "@/lib/globalConsts/socials";
import { useAppSelector } from "@/lib/redux/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Menu = ({ isOpen,menuCloseHandler }) => {
  const MENU = [{ name: "ABOUT" }, { name: "WORKS" }, { name: "CONTACT" }];
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const { theme } = useAppSelector((state) => state.theme);
  const menuRef = useRef([]);
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
    if (isOpen) {
      gsap.set(menuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.99,
        filter: "blur(10px)",
      });
      tl.to(menuRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.5,
        delay: 1,
      });
    } else {
      gsap.set(menuRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      });
      tl.to(menuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.99,
        filter: "blur(10px)",
        duration: 0.5,
      });
    }
  }, [isOpen]);

  const onClickHandler = (section) => {
    gsap.set(menuRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    });
    gsap.to(menuRef.current, {
      opacity: 0,
      y: -10,
      scale: 0.99,
      filter: "blur(10px)",
      duration: 0.5,
      ease: "power1.inOut" 
    });
    menuCloseHandler(section);
  };
  return (
    <div
      ref={menuRef}
      className="relative w-full h-full flex flex-col items-center justify-center"
    >
      <div className="absolute top-[5%] left-[2.5%] size-[80px]">
        <img
          src={
            theme === "light"
              ? "/assets/logo-dark.svg"
              : "/assets/logo-light.svg"
          }
        />
      </div>
      <div className="w-full h-[calc(100%-50px)] flex items-center justify-center">
        <div className="w-full md:w-[765px] h-fit space-y-5 group">
          {MENU.map((m, index) => (
            <div
              key={index}
              onClick={()=>onClickHandler(m.name.toLowerCase())}
              onMouseEnter={() => mouseEnterHandler(`Go to ${m.name} section`)}
              onMouseLeave={mouseLeaveHandler}
              className="relative flex items-center justify-center text-center group-hover:blur-[10px] hover:!blur-none transition-all duration-300"
            >
              <p className="text-[8rem]/[9rem] font-bold tracking-wider">
                {m.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-[50px] flex items-center justify-between px-10">
        <p>© Pranjal Das Portfolio 2025</p>
        <div className="flex items-center gap-2">
          {socials.map((s, index) => (
            <div
              onMouseEnter={() => mouseEnterHandler(`${s.name}`)}
              onMouseLeave={mouseLeaveHandler}
              key={index}
              className="size-[20px] overflow-hidden"
            >
              <img
                src={theme === "light" ? s.icon_l : s.icon_d}
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
