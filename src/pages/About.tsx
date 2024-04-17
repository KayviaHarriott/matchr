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
import { Instagram, GitHub } from "@mui/icons-material";
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
        <Box className="max-w-[300px] text-right flex flex-col gap-1">
          <div>
            <p
              style={{ scrollSnapAlign: "center" }}
              className="text-[32px] font-bold"
            >
              kaythedev
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {["software engineer", "web developer"].map((items, key) => (
              <Box
                sx={{ borderRadius: 1 }}
                className="bg-[black] text-[white] text-[14px] flex justify-center items-center py-2 px-2"
              >
                <p>{items}</p>
              </Box>
            ))}
          </div>
          <p></p>
        </Box>
        <Box className="max-w-[350px] sm:max-w-[400px]">
          <div className="flex flex-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              convallis urna nec turpis aliquet, non pellentesque orci interdum.
              Aliquam ut est ante. Aliquam ac dui eu orci faucibus rutrum. Etiam
              porttitor est turpi.
            </p>
            <p>
              Vitae varius ex faucibus in. Maecenas non consectetur justo.
              Suspendisse arcu enim, maximus at accumsan sit amet, cursus eget
              ex. Pellentesque in ex ac leo blandit euismod. Phasellus porta
              finibus imperdiet.
            </p>
          </div>
          <div className="pt-4 flex flex-row gap-2 items-center justify-center text-center">
            <GitHub />
            <Instagram />
          </div>
          <div></div>
        </Box>
      </Box>
    </>
  );
};
