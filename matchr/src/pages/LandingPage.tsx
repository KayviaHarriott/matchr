import { Box, Button } from "@mui/material";
// import couple_image from "/imgs/header-image.jpg";
import bottomDivider from "/imgs/dividers/wavesOpacity_bottom.svg";
import topDivider from "/imgs/dividers/wavesOpacity_top.svg";
import { motion } from "framer-motion";

export const LandingPage = () => {
  const m = motion;
  return (
    <div className="">
      {/* <Box className="h-[300px] bg-[lightblue]">
        <p>top</p>
      </Box> */}
      {/* <Box className="w-full flex gap-2 bg-[lightgray] py-[40px] px-[120px]"> */}
      {/* <Box className="lg:w-1/2 flex justify-end pr-[400px]">
        <div className="hidden lg:flex relative pl-[40px]">
          <div className="mr-[-40px]">
            <img src={couple_image} className="w-[200px] rounded-sm" />
          </div>
          <div className="mt-[100px] mr-[50px]">
            <img src={couple_image} className="w-[200px] rounded-lg absolute" />
          </div>
        </div>
      </Box> */}
      <Box sx={{ paddingY: 8, backgroundColor: "#AA6BD4" }}></Box>
      <Box className="bg-[#EFEBF8]">
        <img src={bottomDivider} />
        <Box className="flex justify-center">
          <m.div
          // animate={{ rotate: [0, 1, 0, 2, 0] }} // Rotate values in degrees
          // transition={{ duration: 8, repeat: Infinity }} // Duration of each loop
          // style={{ display: "inline-block" }} // Ensures the animation doesn't affect layout
          >
            <Box
              sx={{
                backgroundColor: "white",
                border: 1,
                borderColor: "rgba(203,156,241,0.1)",
                boxShadow: "4px 4px 10px 0px rgba(203,156,241,0.2)",
                px: 3,
                pb: 4,
                pt: 2,
                borderRadius: 2,
              }}
              className=""
            >
              <div className="flex flex-col gap-4">
                {/* <p className="text-[13px] mb-[0px] mb-[-16px]">Duis fringilla</p> */}
                <div className="flex flex-col gap-1">
                  <p className="font-black text-[#7208B7] text-[32px]">
                    Matchr
                  </p>
                  <p className="max-w-[400px] text-[black] font-light">
                    Nunc sem eros, pulvinar vel consectetur eget, molestie vel
                    nibh. Quisque venenatis aliquam neque non ultrices. Aliquam
                    vitae enim erat. Duis ultricies id tortor ut condimentum.
                    Aliquam nec consectetur elit.
                  </p>
                </div>
                <p className="max-w-[400px] text-[#494949] italic font-semibold">
                  Nulla fringilla pharetra enim, nec vestibulum metus
                </p>
                <div className="flex gap-1 pt-1">
                  <Button
                    sx={{
                      width: "fit-content",
                      boxShadow: "none",
                      backgroundColor: "#7208B7",
                      //   fontWeight: "bold",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#AA6BD4",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
                      },
                    }}
                    variant="contained"
                  >
                    Nullam
                  </Button>
                  <Button
                    sx={{
                      width: "fit-content",
                      boxShadow: "none",
                      border: 2,
                      backgroundColor: "transparent",
                      color: "#7208B7",
                      "&:hover": {
                        backgroundColor: "white",
                        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.3)",
                      },
                    }}
                    variant="contained"
                  >
                    Vivamus
                  </Button>
                </div>
              </div>
            </Box>
          </m.div>
        </Box>
        <Box sx={{ transform: "rotateX(180deg)" }}>
        
          <img src={topDivider} />
        </Box>


      </Box>
      <Box sx={{ height: "32px", marginTop: "-1px", backgroundColor: "#AA6BD4" }}></Box>
      {/* </Box> */}
    </div>
  );
};
