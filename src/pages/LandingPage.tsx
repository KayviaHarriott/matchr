import React, { useEffect } from "react";
import { FullPageScroll } from "../components/FullPageScroll";
import { motion, useScroll } from "framer-motion";
import { Box } from "@mui/system";

export const LandingPage = () => {
  const m = motion;

  const { scrollYProgress, scrollXProgress } = useScroll();

  const list = [
    { label: "One", backgroundColor: "lightgreen" },
    { label: "Two", backgroundColor: "lightblue" },
    { label: "Three", backgroundColor: "lightpink" },
  ];

  return (
    <>
      <m.div
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <m.div>
          <Box
            sx={{ backgroundColor: "lightYellow" }}
            className={`h-screen flex items-center justify-center`}
          >
            <p>Section 1</p>
          </Box>
        </m.div>
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
