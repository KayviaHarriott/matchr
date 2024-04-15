import React from "react";
import { Button } from "@mui/material";
export const Logo = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Button, { className: "cursor-pointer", variant: "contained", sx: {
                textTransform: "none",
                backgroundColor: "#0A7C59",
                color: "white",
                fontWeight: "bold",
                boxShadow: "none",
            } }, "LicenseLookr")));
};
