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
  //   const ref = useRef(null);

  //   function useParallax(value: MotionValue<number>, distance: number) {
  //     return useTransform(value, [0, 1], [-distance, distance]);
  //   }
  //   const { scrollYProgress } = useScroll({ target: ref });

  //   const y = useParallax(scrollYProgress, 100);

  const list = [{ title: "What I Know", url: "" }];
  return (
    <>
      <Box className="flex w-screen">
        <Box className="flex h-screen w-full justify-center items-center">
          <Box className="flex px-[32px] gap-4">
            <Box className="sm:w-1/3 max-w-[300px] flex flex-col items-end text-right flex flex-col gap-4 mt-[-12px]">
              <div>
                <p
                  style={{ scrollSnapAlign: "center" }}
                  className="text-[32px] font-bold"
                >
                  kaythedev
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                {["software engineer", "web developer"].map((items, key) => (
                  <Box
                    sx={{ borderRadius: 1, width: "fit-content" }}
                    className="bg-[black] text-[white] text-[14px] flex justify-center items-center py-2 px-2"
                  >
                    <p>{items}</p>
                  </Box>
                ))}
                <div className="pt-4 flex flex-row gap-2 items-center justify-center text-center">
                  <GitHub />
                  <Instagram />
                </div>
              </div>
              <p></p>
            </Box>
            <Box className="sm:w-2/3 max-w-[350px] sm:max-w-[400px]">
              <div className="flex flex-col gap-3">
                <p className="font-bold">Pellentesque in ex</p>
                <p className="text-[14px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus convallis urna nec turpis aliquet, non pellentesque
                  orci interdum. Aliquam ut est ante. Aliquam ac dui eu orci
                  faucibus rutrum. Etiam porttitor est turpi.
                </p>
                <div className="">
                  <p className="font-light italic text-[14px]">
                    Pellentesque in ex?
                  </p>
                  <p className="font-bold italic">Maecenas non consectetur</p>
                </div>
                {/* <p>
                      Vitae varius ex faucibus in. Maecenas non consectetur justo.
                      Suspendisse arcu enim, maximus at accumsan sit amet, cursus eget
                      ex. Pellentesque in ex ac leo blandit euismod. Phasellus porta
                      finibus imperdiet.
                    </p> */}
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
