import { Box, Button /*Icon */ } from "@mui/material";
import couple_image from "/imgs/header-image.jpg";
import { /*animate,*/ motion /*useScroll*/ } from "framer-motion";
import { Footer } from "./Footer";
// import Figma from "feather-icons";
// import MessageSquare from "feather-icons"
import { Smartphone, MessageSquare /*Calendar*/ } from "react-feather";
import { InfoBubble } from "../components/InfoBubble";
import photo1 from "/imgs/man-smiling-at-phone.jpg";
import qrCode from "/imgs/qr-code.png";
export const LandingPage = () => {
  const m = motion;
  // const { scrollYProgress, scrollXProgress } = useScroll();

  const list = [
    {
      icon: <Smartphone />,
      subText: "Step 1",
      title: "Lorem Ipsum Dolor",
      description: `Nunc sem eros, pulvinar vel consectetur eget, molestie vel nibh. 
           Aliquam vitae enim erat.`,
      animate: { rotate: [0, 1, 0, 2, 0] },
    },
    {
      icon: <MessageSquare />,
      subText: "Step 2",
      title: "Lorem Ipsum Dolor",
      description: `Nunc sem eros, pulvinar vel consectetur eget, molestie vel nibh. 
           Aliquam vitae enim erat.`,
      animate: { rotate: [0, 3, 0, -2, 0] },
    },
    // {
    //   icon: <Calendar />,
    //   subText: "Step 3",
    //   title: "Lorem Ipsum Dolor",
    //   description: `Nunc sem eros, pulvinar vel consectetur eget, molestie vel nibh.
    //        Aliquam vitae enim erat.`,
    //   animate: { rotate: [0, -4, 0, 2, 0] },
    // },
  ];

  return (
    <div className="w-screen ">
      <Box> </Box>
      <Box className="py-[32px] px-[15%] bg-[#AA6BD4]">
        <Box className="flex justify-center">
          <img className="w-[200px] rounded-lg" src={couple_image} />
          <m.div
          // animate={{ rotate: [0, 1, 0, 2, 0] }}
          // transition={{ duration: 8, repeat: Infinity }}
          // style={{ display: "inline-block" }}
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
      </Box>

      <Box className="py-[56px]">
        <Box className="px-[15%] flex">
          <Box className="flex flex-col w-full">
            <p className="text-center font-bold text-[40px] w-full">
              Get the App Today!
            </p>
            <Box sx={{ 
              backgroundImage: `url(${photo1})`,
              backgroundSize: "cover",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: "center",
              width: '300px', 
              height: '400px',
              borderRadius: 1,
              // transform: 
               
               }}></Box>
          </Box>
          <Box className="flex w-full justify-end">
            <Box>
              <p className="text-center font-bold text-[24px] text-[#7208B7] pb-4">
                How it Works
              </p>
              <m.div
                // initial={{ opacity: 0 }}
                // whileInView={{ opacity: 1, scale: 2 }}
                whileFocus={{ opacity: 1, scale: 2 }}
                // while
                viewport={{ once: true }}
              >
                <Box className="flex flex-col gap-2">
                  {list.map((item, index) => (
                    <m.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                    >
                      <m.div
                        key={index}
                        animate={item.animate}
                        transition={{ duration: 8, repeat: Infinity }}
                        style={{ display: "inline-block" }}
                      >
                        <InfoBubble
                          icon={item.icon}
                          subText={item.subText}
                          title={item.title}
                          description={item.description}
                        />
                      </m.div>
                    </m.div>
                  ))}
                </Box>
              </m.div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};
