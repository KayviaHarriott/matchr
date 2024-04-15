import { Box } from "@mui/material";
import React from "react";
import { FC } from "react";

interface SummaryBoxProps {
  title: string;
  type: string; //should be text or number
  content:
    | {
        label: string;
        value: string | number;
      }[];
  backgroundColor: string;
  borderColor: string;
}

export const SummaryBox: FC<SummaryBoxProps> = ({
  title,
  type,
  content = [],
  backgroundColor,
  borderColor,
}) => {
  return (
    <>
      {type === "text" ? (
        <Box
          className="max-w-[500px] p-4 flex flex-col gap-2"
          sx={{
            // border: `2px solid ${borderColor}`,
            // backgroundColor: `${backgroundColor}`,
            boxShadow: '0px 0px 8px rgba(53, 81, 180, 0.1)',
            width: "fit-content",
            borderRadius: 1,
          }}
        >
          <p className={`font-bold text-center text-[12px] text-[#5477F2]`}>{title}</p>
          <div>
            {content.map((item, index) => (
              <div key={index}className="flex gap-1">
                <p className="font-medium text-[14px] text-[#5D5D5D]">{item.label}:</p>{" "}
                <p className="font-light text-[14px]">{item.value}</p>
              </div>
            ))}
          </div>
        </Box>
      ) : type === "number" ? (
        <Box
          className="flex flex-col text-center max-w-[300px] p-4 flex flex-col gap-2"
          sx={{
            // border: `2px solid ${borderColor}`,
            // backgroundColor: `${backgroundColor}`,
            boxShadow: '0px 0px 8px rgba(53, 81, 180, 0.1)',
            width: "fit-content",
            borderRadius: 1,
          }}
        >
           <p className={`font-bold text-center text-[12px] text-[#5477F2]`}>{title}</p>
          <div>
            {content.map((item, index) => (
              <div key={index} className="flex flex-col">
                <p className="font-bold text-[24px] text-[#5D5D5D]">{item.value}</p>
                <p className="font-semibold text-[14px] text-[#5D5D5D]">{item.label}</p>
              </div>
            ))}
          </div>
        </Box>
      ) : null}
    </>
  );
};
