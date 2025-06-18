import { socials } from "@/lib/globalConsts/socials";
import { useAppSelector } from "@/lib/redux/hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import React, { useRef } from "react";
import Form from "./Form";
import { useCursor } from "@/app/utils/customHooks/useCursor";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
  const { theme } = useAppSelector((state) => state.theme);
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();
  const gitRef = useRef(null);
  const containerRef = useRef(null);
  const socialsRef = useRef([]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      mouseEnterHandler("Copied!");
    });
  };

  useGSAP(() => {
    const split = SplitText.create(gitRef.current, { type: "chars" });
    gsap.set(split.chars, { opacity: 0.2, filter: "blur(10px)" });
    gsap.to(split.chars, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: gitRef.current,
        start: "top 80%",
        end: "top 10%",
        scrub: 1,
      },
    });

    gsap.from(socialsRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: socialsRef.current,
        start: "top 90%",
        end: "top center"
      },
    });
  });
  return (
    <div className="w-full h-[100vh] xl:h-screen pt-[50px] xl:pt-0 flex flex-col justify-between">
      <div className="w-full xl:h-[calc(100vh-30px)] flex flex-col px-2 py-2 xl:px-10">
        <div className="w-full xl:h-1/3 text-center xl:text-start">
          <h1 ref={gitRef} className="font-anton text-[3rem] xl:text-[15rem]">
            Get in touch
          </h1>
        </div>
        <div
          ref={containerRef}
          className="w-full h-full xl:h-2/3 flex flex-col-reverse xl:flex-row justify-start xl:items-center"
        >
          <div className="w-full h-full flex flex-col justify-center xl:gap-10 py-5 xl:py-0">
            <div className="w-full flex justify-evenly">
              {/* Mobile */}
              {socials.map((s, index) => (
                <div
                  key={index}
                  ref={(el) => (socialsRef.current[index] = el)}
                  className="flex md:hidden items-center justify-between"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-8 transition-all duration-300">
                      <Image
                        className="w-full h-full object-contain"
                        src={theme === "light" ? s.icon_l : s.icon_d}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="text-[0.8rem] font-light tracking-wide transition-all duration-300">
                      {s.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* PC */}
            <div>
              {socials.map((s, index) => (
                <Link 
                  href={s.href}
                  target="_blank"
                  key={index}
                  ref={(el) => (socialsRef.current[index] = el)}
                  onMouseEnter={() =>
                    mouseEnterHandler(`Redirect to ${s.name} website`)
                  }
                  onMouseLeave={mouseLeaveHandler}
                  className="hidden xl:flex items-center justify-between border-b-2 py-5 cursor-none group"
                >
                  <div className="flex items-center gap-5">
                    <div className="size-10 group-hover:translate-x-2 transition-all duration-300">
                      <Image
                        className="w-full h-full object-contain"
                        src={theme === "light" ? s.icon_l : s.icon_d}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="text-[1.5rem] font-light tracking-wide group-hover:translate-x-2 transition-all duration-300">
                      {s.name}
                    </p>
                  </div>
                  <div className="group-hover:-translate-x-2 group-hover:rotate-45 transition-all duration-300">
                    <ArrowUpRight />
                  </div>
                </Link>
              ))}
            </div>

            <div className="w-full xl:w-fit text-[1.2rem] flex flex-col items-center xl:gap-2 xl:items-start xl:text-[2rem] leading-0 font-light tracking-wide py-5 px-2">
              <p
                ref={(el) => (socialsRef.current[4] = el)}
                onMouseEnter={() => mouseEnterHandler("Copy to clipboard")}
                onMouseLeave={mouseLeaveHandler}
                onClick={() => handleCopy("+91 7002833491")}
                className="w-fit hover:text-orange-400 dark:hover:text-sky-400 py-5 transition-all duration-400"
              >
                +91 7002833491
              </p>
              <p
                ref={(el) => (socialsRef.current[5] = el)}
                onMouseEnter={() => mouseEnterHandler("Copy to clipboard")}
                onMouseLeave={mouseLeaveHandler}
                onClick={() => handleCopy("pranjal080015@gmail.com")}
                className="w-fit hover:text-orange-400 dark:hover:text-sky-400 py-5 transition-all duration-400"
              >
                pranjal080015@gmail.com
              </p>
            </div>
          </div>

          <Form />
        </div>
      </div>
      <div className="w-full h-[30px] flex items-center justify-between px-5 bg-zinc-900 dark:bg-amber-50 text-[0.8rem] text-amber-50 dark:text-zinc-700">
        <div className="size-[20px]">
          <img
            src="/assets/logo-light.svg"
            className="w-full h-full object-contain"
          />
        </div>
        <p>© Pranjal Das Portfolio 2025</p>
        <p>Made using NextJs and GSAP</p>
      </div>
    </div>
  );
};

export default Contact;
