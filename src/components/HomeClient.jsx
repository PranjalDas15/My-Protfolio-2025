"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { setScrollPosition } from "@/lib/redux/slices/scrollSlice";
import { useGSAP } from "@gsap/react";
import Cursor from "@/components/ui/Cursor";
import BackToTopButton from "@/components/ui/BackToTopButton";
import Navbar from "@/components/Navbar";
import BgComponent from "./BgComponent";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const HomeClient = () => {
  const dispatch = useAppDispatch();
  const { isProjectOpen } = useAppSelector((state) => state.project);
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const sectionRef = useRef([]);
  const smootherRef = useRef(null);

  useGSAP(() => {
    smootherRef.current = ScrollSmoother.create({
      smooth: 2,
      wrapper: wrapperRef.current,
      content: contentRef.current,
      effects: true,
      smoothTouch: 0.5,
      onUpdate: (self) => dispatch(setScrollPosition(self.progress * 100)),
      autoResize: true,
    });
  }, []);

  useEffect(() => {
    if (smootherRef.current) {
      setTimeout(()=>{
        smootherRef.current.paused(isProjectOpen);
      }, 2000)
    }
  }, [isProjectOpen]);

  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { overflow: "hidden", height: "100vh" },
      {
        overflow: "auto",
        height: "auto",
        // delay: 2,
        duration: 1,
      }
    );
  });

  return (
    <>
      <div
        ref={wrapperRef}
        className="relative w-screen h-screen overflow-hidden"
      >
        <BackToTopButton />
        <Navbar />
        <Cursor />
        <BgComponent/>
        <div ref={contentRef} id="home" className="relative overflow-hidden">
          <section
            id="hero"
            ref={(el) => (sectionRef.current[0] = el)}
            className="w-screen h-screen z-0"
          >
            <Hero />
          </section>
          <section
            id="about"
            ref={(el) => (sectionRef.current[1] = el)}
            className="w-screen z-10"
          >
            <About />
          </section>
          <section
            id="works"
            ref={(el) => (sectionRef.current[3] = el)}
            className="w-screen z-10"
          >
            <Projects />
          </section>
          <section
            id="contact"
            ref={(el) => (sectionRef.current[4] = el)}
            className="w-screen z-10"
          >
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

export default HomeClient;
