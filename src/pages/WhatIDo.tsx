import { Box } from "@mui/material";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Figma, Layout, Edit } from "react-feather";
// import { faFigma } from '@fortawesome/free-solid-svg-icons'
// import { faFigma } from '@fortawesome/free-solid-svg-icons';

// const element = <FontAwesomeIcon icon={faEnvelope} />
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

export const WhatIDo = () => {
  const techStackList = ["REACTJS", "HTML/CSS", "TYPESCRIPT", "PYTHON", "PHP"];
  const contentList = [
    {
      title: "One",
      content: (
        <div>
          <div className="flex flex-col gap-2">
            <Box
              sx={{
                color: "white",
                backgroundColor: "black",
                width: "fit-content",
                padding: 1.5,
                borderRadius: 1,
              }}
            >
              <Edit />
            </Box>
            <div>
              <p className="font-bold">Websites</p>
              <p className="font-bold text-[gray] text-[14px]">
                Curabitur viverra tempor orci.
              </p>
            </div>
            {/* <p className="font-light text-[14px] text-[gray]">
              Integer dictum accumsan ex ut aliquam. Phasellus ac ligula mi.
              Maecenas dictum elit sed nibh tempus pretium. Aenean feugiat
              sagittis velit, in laoreet ipsum semper at.
            </p> */}
          </div>
        </div>
      ),
    },
    {
      title: "One",
      content: (
        <div>
          <div className="flex flex-col gap-2">
            <Box
              sx={{
                color: "white",
                backgroundColor: "black",
                width: "fit-content",
                padding: 1.5,
                borderRadius: 1,
              }}
            >
              <Layout />
            </Box>
            <div>
              <p className="font-bold">Custom Web-Apps</p>
              <p className="font-bold text-[gray] text-[14px]">
                Curabitur viverra tempor orci.
              </p>
            </div>
            {/* <p className="font-light text-[14px] text-[gray]">
              Integer dictum accumsan ex ut aliquam. Phasellus ac ligula mi.
              Maecenas dictum elit sed nibh tempus pretium. Aenean feugiat
              sagittis velit, in laoreet ipsum semper at.
            </p> */}
          </div>
        </div>
      ),
    },
    {
      title: "One",
      content: (
        <div>
          <div className="flex flex-col gap-2">
            {/* <FontAwesomeIcon icon={faFigma} /> */}
            <Box
              sx={{
                color: "white",
                backgroundColor: "black",
                width: "fit-content",
                padding: 1.5,
                borderRadius: 1,
              }}
            >
              <Figma />
            </Box>
            {/* <FontAwesomeIcon icon="fa-brands fa-figma" /> */}
            <div>
              <p className="font-bold">UI/UX Web Designs</p>
              <p className="font-bold text-[gray] text-[14px]">
                Curabitur viverra tempor orci.
              </p>
            </div>
            {/* <p className="font-light text-[14px] text-[gray]">
              Integer dictum accumsan ex ut aliquam. Phasellus ac ligula mi.
              Maecenas dictum elit sed nibh tempus pretium. Aenean feugiat
              sagittis velit, in laoreet ipsum semper at.
            </p> */}
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center p-3">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-1/3 flex justify-center sm:justify-end">
            <p className="font-bold text-[32px]">whatido</p>
          </div>
          <div className="sm:w-2/3 flex flex-col gap-2">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                {contentList.map((item, index) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "white",
                        padding: 2,
                        borderRadius: 1,
                        boxShadow: "3px 3px 14px 1px rgba(0,0,0,0.2)",
                      }}
                      className=""
                    >
                      <div className="max-w-[300px]">
                        {/* <p className="font-bold">{item.title}</p> */}
                        <div>{item.content}</div>
                      </div>
                    </Box>
                  </motion.div>
                ))}
                <div></div>
                {/* <div>
                  <p className="font-bold">Frameworks & techstacks</p>
                  <div className="flex gap-1 flex-wrap">
                    {techStackList.map((item, index) => (
                      <Box
                        sx={{
                          backgroundColor: "black",
                          color: "white",
                          width: "fit-content",
                          paddingX: 1,
                          paddingY: 0.5,
                          borderRadius: 1,
                          fontWeight: "500",
                          fontSize: "14px",
                        }}
                        className=""
                      >
                        {item}
                      </Box>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
