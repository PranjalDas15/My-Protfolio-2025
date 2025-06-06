import { useAppDispatch } from "@/lib/redux/hooks";
import { setScrollPosition } from "@/lib/redux/slices/scrollSlice";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const SmoothScroller = ({ children }) => {
  const dispatch = useAppDispatch();
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      wrapper: wrapperRef.current,
      content: contentRef.current,
      effects: true,
      smoothTouch: 0.5,
      onUpdate: (self) => dispatch(setScrollPosition(self.progress * 100)),
      autoResize: true,
    });
  });
  return (
    <div ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default SmoothScroller;
