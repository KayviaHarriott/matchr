import { Box } from "@mui/material";
import React from "react";
import { FC } from "react";

interface SectionProps {
  title?: String;
  content?: React.ReactNode;
  backgroundColor?: String;
}

export const Section: FC<SectionProps> = ({
  title,
  content,
  backgroundColor,
}) => {
  return (
    <>
      <Box
        sx={{ backgroundColor: `${backgroundColor}` }}
        className={`py-[32px] px-[150px]`}
      >
        <p className="font-bold text-[#0A7C59]">{title ? title : null}</p>
        <div className="pt-4">{content ? content : null}</div>
      </Box>
    </>
  );
};
