import { Box, Button } from "@mui/material";
import couple_image from "/imgs/header-image.jpg";
export const LandingPage = () => {
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
              <img
                src={couple_image}
                className="w-[200px] rounded-lg absolute"
              />
            </div>
          </div>
        </Box> */}
      <Box className="bg-[lightgray] py-[32px]">
        <Box className="flex justify-center">
          <Box
            sx={{
              backgroundColor: "white",
              px: 3,
              pb: 4,
              pt: 2,
              borderRadius: 2,
            }}
            className=""
          >
            <div className="flex flex-col gap-4">
              {/* <p className="text-[13px] mb-[0px] mb-[-16px]">Duis fringilla</p> */}
              <p className="font-black text-[32px]">Matchr</p>
              <p className="max-w-[400px] font-light">
                Nunc sem eros, pulvinar vel consectetur eget, molestie vel nibh.
                Quisque venenatis aliquam neque non ultrices. Aliquam vitae enim
                erat. Duis ultricies id tortor ut condimentum. Aliquam nec
                consectetur elit.
              </p>
              <p className="max-w-[400px] italic font-semibold">
                Nulla fringilla pharetra enim, nec vestibulum metus
              </p>
              <div className="flex gap-1 pt-1">
                <Button
                  sx={{
                    width: "fit-content",
                    boxShadow: "none",
                    backgroundColor: "black",
                    color: "white",
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
                    color: "black",
                  }}
                  variant="contained"
                >
                  Vivamus
                </Button>
              </div>
            </div>
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
    </div>
  );
};
