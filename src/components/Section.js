import { Box } from "@mui/material";
import React from "react";
export const Section = ({ title, content, backgroundColor, }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Box, { sx: { backgroundColor: `${backgroundColor}` }, className: `py-[32px] px-[150px]` },
            React.createElement("p", { className: "font-bold text-[#0A7C59]" }, title ? title : null),
            React.createElement("div", { className: "pt-4" }, content ? content : null))));
};
