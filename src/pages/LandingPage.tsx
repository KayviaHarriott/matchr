import React from "react";
import { FullPageScroll } from "../components/FullPageScroll";
import { motion, useScroll } from "framer-motion";
import { Box } from "@mui/system";

export const LandingPage = () => {
  const m = motion;
  const { scrollYProgress } = useScroll();

  const list = [
    { label: "One", backgroundColor: "lightgreen" },
    { label: "Two", backgroundColor: "lightblue" },
    { label: "Three", backgroundColor: "lightpink" },
  ];
  return (
    <>
      {" "}
      {/* <motion.div /> */}
      <m.div
        //  style={{ scaleX: scrollYProgress }}
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 1 }}
      >
        {list.map((item, index) => (
          <Box
            sx={{ backgroundColor: `${item.backgroundColor}` }}
            className={`h-screen flex items-center justify-center`}
            key={index}
          >
            {item.label}
          </Box>
        ))}
      </m.div>
      {/* <FullPageScroll sections={[]} /> */}
    </>
  );
};
