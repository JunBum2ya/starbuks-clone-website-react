import { useEffect, useRef } from "react"
import _ from 'lodash';

const ScrollSpySection = (props: ScrollSpySectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    _.
    const handleScroll = () => {
      const top = sectionRef.current?.offsetTop;
      const scrollPosition = window.scrollY;
      if(scrollPosition + 400 >= (top??-1)) {
        sectionRef.current?.classList.add("show");
      }else {
        sectionRef.current?.classList.remove("show");
      }
    }
    _.
    window.addEventListener("scroll",handleScroll);
  },[]);

  return (
    <section className={`scroll-spy ${props.classList?.join(" ")??""}`} ref={sectionRef}>
      {props.children}
    </section>
  );
};

interface ScrollSpySectionProps {
  children?: React.ReactNode,
  classList?: string[]
}

export default ScrollSpySection;