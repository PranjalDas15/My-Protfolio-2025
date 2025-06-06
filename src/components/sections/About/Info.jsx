import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin);

const Info = () => {
  const textRef = useRef(null);
  const wordsRef = useRef([]);

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words, lines" });
    wordsRef.current = split.words;

    gsap.from(split.lines, {
      opacity: 0,
      filter: 'blur(10px)',
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
    
  }, []);

  return (
    <div className="h-fit w-fit overflow-hidden">
      <p ref={textRef} className="font-light text-[1.2rem]">
        Hello, I'm Pranjal Das. I am a passionate fullstack web developer
        specializing in React-based applications (Next.js) and Laravel. I hold a
        B.Tech from Assam Downtown University (CGPA 8.4, 2024) and specialize in
        building fast, responsive websites using Tailwind CSS, GSAP, and Redux.
        I love turning ideas into smooth, user-friendly digital experiences and
        constantly explore new technologies to grow as a developer.
      </p>
    </div>
  );
};

export default Info;
