import gsap from "gsap";
import { Power1 } from "gsap";

export const floatObject = (element: Element | string, delay: number, size: number) => {
  gsap.to(element, randomNumber(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: randomNumber(0, delay)
  });
};

const randomNumber = (min: number, max: number) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
};