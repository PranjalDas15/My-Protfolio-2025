import Button from "@/components/ui/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import Info from "./Info";
import Journey from "./Journey";
import { useCursor } from "@/app/utils/customHooks/useCursor";
import Skills from "./Skills";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const { mouseEnterHandler, mouseLeaveHandler } = useCursor();

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      {
        filter: "blur(10px)",
        opacity: 0,
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration: 1,
        delay: 2,
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    });
    tl.fromTo(
      imageRef.current,
      {
        top: "-25%",
        borderRadius: "100%",
      },
      { top: "4%", scale: 1, borderRadius: "5%", duration: 1 }
    );

    gsap.from(buttonRef.current, {
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      scrollTrigger: {
        trigger: buttonRef.current,
        start: "top 80%",
        end: "top 60%",
        scrub: 1,
      },
    });
  });

  const onDownload = () => {
    const confirmDownload = confirm("Download Resume?");
    if (confirmDownload) {
    const link = document.createElement("a");
    link.href = "/assets/resume.pdf";
    link.download = "Pranjal_Resume.pdf";
    link.click();
  }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full font-robotoc flex justify-center items-center"
    >
      <div className="w-full md:w-[700px] h-full flex flex-col gap-10">
        <div
          ref={imageRef}
          onMouseEnter={() => mouseEnterHandler("It's me")}
          onMouseLeave={() => mouseLeaveHandler()}
          className="absolute left-[50%] scale-50 -translate-x-1/2 size-[350px] sm:size-[400px] overflow-hidden"
        >
          <Image
            alt="profile"
            src={"/assets/profile.jpg"}
            width={500}
            height={500}
            className="w-full h-full object-cover grayscale hover:grayscale-0 scale-110 hover:scale-100 transition-all duration-400"
          />
        </div>
        <div className="w-full flex flex-col items-center gap-5 pt-[500px] p-2">
          <Info />
          <div ref={buttonRef}>
            <Button onClickHandler={onDownload} hoverText={"Download"} label={"My Resume"} />
          </div>
        </div>
        <Skills />
        <Journey />
      </div>
    </div>
  );
};

export default About;
