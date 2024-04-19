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
      {/* <Box> </Box>AA6BD4 */}
      <Box className="py-[8px] px-[15%] bg-[#7208B7]">
        <p className="font-black text-[white] text-[24px] text-center">
          Matchr
        </p>
      </Box>
     
      <Box className="pt-[32px] pb-[56px]">
      <p className="text-center font-bold text-[32px] w-full">
        Download today!
      </p>
        <Box className="px-[15%] flex">
          <Box className="flex flex-col w-full justify-center items-center pt-10">
            <Box className="relative flex flex-col">
              <Box
                className="w-full"
                sx={{
                  transform: "rotate(-2deg)",
                  backgroundImage: `url(${photo1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "300px",
                  height: "400px",
                  borderRadius: 2,
                  mr: 5,
                  mb: 5,
                  // transform:
                  ml: 5,
                }}
              ></Box>
              <Box
                sx={{
                  transform: "rotate(10deg)",
                  backgroundColor: "white",
                  boxShadow: "3px 3px 10px 0px rgba(0,0,0,0.1)",
                  // borderColor: "rgba(0,0,0,0.1)",
                  // borderWidth: 1,
                  borderRadius: 1,
                }}
                className="absolute bottom-0 right-0 mt-[20px] text-center"
              >
                <Box
                  sx={{
                    backgroundImage: `url(${qrCode})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "150px",
                    height: "150px",
                    borderRadius: 1,
                    // transform:
                  }}
                ></Box>
                <p className="font-bold pb-2 text-[14px]">Scan Here!</p>
              </Box>
            </Box>
          </Box>
          <Box className="flex w-full justify-end">
            <Box>
              <p className="text-center font-bold text-[24px] text-[#7208B7] pt-[32px] pb-4">
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
