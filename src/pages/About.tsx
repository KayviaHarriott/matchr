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
import { EmailRounded, Mail } from "@mui/icons-material";
import { Instagram, GitHub } from "react-feather";
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
              <div className="flex">
                <p
                  //   style={{ scrollSnapAlign: "center" }}
                  className="text-[32px] font-bold"
                >
                  kay
                </p>
                <p
                  //   style={{ scrollSnapAlign: "center" }}
                  className="text-[32px] text-[#ED6A59] font-bold"
                >
                  the
                </p>
                <p
                  //   style={{ scrollSnapAlign: "center" }}
                  className="text-[32px] font-bold"
                >
                  dev
                </p>
              </div>
              <div className="flex flex-col items-end gap-1 mt-[-12px]">
                {["software engineer", "web developer"].map((items, key) => (
                  //   <motion.div
                  //     whileHover={{ scale: 1.05 }}
                  //     whileTap={{ scale: 0.9 }}
                  //   >
                  // {" "}
                  <Box
                    sx={{ borderRadius: 1, width: "fit-content" }}
                    className="bg-[black] text-[white] text-[14px] flex justify-center items-center py-2 px-2"
                  >
                    <p>{items}</p>
                  </Box>
                  //   </motion.div>
                ))}
                <div className="pt-2 flex flex-row gap-2 items-center justify-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href="https://github.com/KayviaHarriott" target="_blank">
                      {" "}
                      <GitHub />
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href="https://instagram.com/kayviaharriott"
                      target="_blank"
                    >
                      {" "}
                      <Instagram />
                    </a>
                  </motion.div>
                </div>
              </div>
              <p></p>
            </Box>
            <Box className="sm:w-2/3 max-w-[350px] sm:max-w-[400px]">
              <div className="flex flex-col gap-3">
                <p className="font-bold">
                  Oops... I'm not done building this yet!
                </p>
                <p className="text-[14px]">
                  I'm currently working on my website... but I can still do
                  yours! Feel free to contact me via email or instagram to talk
                  about it~
                </p>
                <div className="">
                  <p className="font-light italic text-[14px]">
                    Have a question?
                  </p>
                  <a href="mailto:kayvia@kaythedev.com">
                    {" "}
                    <motion.div
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <p className="font-bold italic text-[#ED6A59]">
                        kayvia@kaythedev.com
                      </p>
                    </motion.div>
                  </a>
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
