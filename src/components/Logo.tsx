import React, { FC } from "react";
import { Button } from "@mui/material";

interface LogoProps {
  size?: "small" | "medium" | "large";
}
export const Logo: FC<LogoProps> = () => {
  return (
    <>
      <Button
        className="cursor-pointer"
        variant="contained"
        sx={{
          textTransform: "none",
          backgroundColor: "#0A7C59",
          color: "white",
          fontWeight: "bold",
          boxShadow: "none",
        }}
      >
        LicenseLookr
      </Button>
    </>
  );
};
