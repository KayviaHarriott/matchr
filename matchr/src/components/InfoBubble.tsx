import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
interface InfoBubbleProps {
  icon: ReactNode;
  subText: string;
  title: string;
  description: string;
}
export const InfoBubble: FC<InfoBubbleProps> = ({
  icon,
  subText,
  title,
  description,
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          border: 1,
          borderColor: "rgba(203,156,241,0.1)",
          boxShadow: "4px 4px 10px 0px rgba(203,156,241,0.2)",
          px: 3,
          pb: 2,
          pt: 2,
          borderRadius: 2,
          width: "fit-content",
        }}
        className=""
      >
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 max-w-[350px]">
            <Box className="flex items-center gap-1">
              <Box
                sx={{
                  backgroundColor: "#7208B7",
                  width: "fit-content",
                  p: 1.5,
                  color: "white",
                  borderRadius: 1,
                }}
              >
                {icon}
              </Box>
            </Box>
            <div className="flex flex-col">
              <p className="text-[gray] font-bold text-[14px]">{subText}</p>
              <p className="text-[black] font-bold mt-[-2px]">{title}</p>
            </div>
            <p className="text-[gray] font-light mt-[-5px]">{description}</p>
          </div>
        </div>
      </Box>
    </>
  );
};
