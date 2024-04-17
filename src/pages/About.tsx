import { Box } from "@mui/material";
import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);

  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useParallax(scrollYProgress, 100);

  return (
    <>
      <Box className="flex px-[32px] gap-4">
        <Box className="max-w-[300px]">
          <p
            style={{ scrollSnapAlign: "center" }}
            className="text-[32px] font-bold"
          >
            kaythedev
          </p>
        </Box>
        <Box className="max-w-[350px]">
        <div className="flex flex-col gap-2">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                convallis urna nec turpis aliquet, non pellentesque orci interdum.
                Aliquam ut est ante. Aliquam ac dui eu orci faucibus rutrum. Etiam
                porttitor est turpi.
              </p>
              <p>
                Vitae varius ex faucibus in. Maecenas non consectetur justo.
                Suspendisse arcu enim, maximus at accumsan sit amet, cursus eget ex.
                Pellentesque in ex ac leo blandit euismod. Phasellus porta finibus
                imperdiet.
              </p>
        </div>
        </Box>
      </Box>
    </>
  );
};
