import { useEffect, useRef } from "react"

const ScrollSpySection = (props: ScrollSpySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const handleScroll = Throttle(() => {
      const scrollPosition = window.scrollY;
      const sectionTop = sectionRef.current?.offsetTop??-1;
      const sectionHeight = sectionRef.current?.clientHeight??0;
      
      if(scrollPosition >= (sectionTop + sectionHeight) * .7) {
        sectionRef.current?.classList.add("show");
      }else {
        sectionRef.current?.classList.remove("show");
      }
    },300);
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    };
  },[]);

  return (
    <section className={`scroll-spy ${props.classList?.join(" ")??""}`} ref={sectionRef}>
      {props.children}
    </section>
  );
};

const Throttle = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
) => {
  let lastCallTime = 0;
  return (...args: Parameters<F>) => {
    const now = new Date().getTime();
    if(now - lastCallTime >= delay) {
      func(args);
      lastCallTime = now;
    }
  };
};

interface ScrollSpySectionProps {
  children?: React.ReactNode,
  classList?: string[]
}

export default ScrollSpySection;