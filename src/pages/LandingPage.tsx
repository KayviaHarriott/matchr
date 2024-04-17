// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";
import { ReactNode, useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import React from "react";
import { Box } from "@mui/system";
import { About } from "./About";
import { NavigationBar } from "../components/NavigationBar";
import { Projects } from "./Projects";
import { WhatIDo } from "./WhatIDo";

const list = [
  { content: <About />, color: "#FFFF" },
  // {
  //   content: <WhatIDo/>, color: "lightblue"
  // },
  // {
  //   content: <Projects/>,
  //   color: "lightred",
  // },
  // {
  //   content: (
  //     <div>
  //       <p>three</p>
  //     </div>
  //   ),
  //   color: "lightgreen",
  // },
];

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Content({ content, color }: { content: ReactNode; color: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Box
      sx={{ backgroundColor: color }}
      id="section"
      className="h-[100vh] flex relative perspective-500"
    >
      <div ref={ref}>
        <div>
          {" "}
          {content}
          {/* <p className="text-[blue]">kk {content.label}</p> */}
        </div>
      </div>
      {/* <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2> */}
      {/* <motion.h2 style={{ y }}>{`#0011`}</motion.h2> */}
    </Box>
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
      {/* <NavigationBar /> */}
      <div className="bg-[yellow]">
        {list.map((item) => (
          <div>
            <Content content={item.content} color={item.color} />
          </div>
        ))}
        {/* <motion.div
          className="fixed left-0 right-0 h-5 bg-[blue] bottom-20"
          style={{ scaleX }}
        /> */}
      </div>
    </>
  );
};
