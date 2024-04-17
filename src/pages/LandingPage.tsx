// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import React from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div
      id="section"
      className="h-[100vh] flex justify-center items-center relative perspective-500"
    >
      <div ref={ref}>
        <div>
          {" "}
          <p className="text-[blue]">kk</p>
        </div>
        {/* <img src={`/${id}.jpg`} alt="A London skyscraper" /> */}
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </div>
  );
}

export const LandingPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <p>
          <Image id={image} />
        </p>
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
};
