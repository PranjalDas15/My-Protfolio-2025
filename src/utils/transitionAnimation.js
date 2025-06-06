import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const transitionAnimationIn = () => {
  const transitionPlane = document.getElementById("transition-plane");
  const tl = gsap.timeline();
  tl.set(transitionPlane, {
    opacity: 1,
    filter: "blur(0px)",
  }).to(transitionPlane, {
    opacity: 0,
    filter: "blur(10px)",
  });
};

export const transitionAnimationOut = (href, router) => {
  const transitionPlane = document.getElementById("transition-plane");
  const tl = gsap.timeline();
  tl.set(transitionPlane, {
    opacity: 0,
    filter: "blur(10px)",
  }).to(transitionPlane, {
    opacity: 1,
    filter: "blur(0px)",
  });
};
