import { Box } from "@mui/material";
import React from "react";
export const SummaryBox = ({ title, type, content = [], backgroundColor, borderColor, }) => {
    return (React.createElement(React.Fragment, null, type === "text" ? (React.createElement(Box, { className: "max-w-[500px] p-4 flex flex-col gap-2", sx: {
            // border: `2px solid ${borderColor}`,
            // backgroundColor: `${backgroundColor}`,
            boxShadow: '0px 0px 8px rgba(53, 81, 180, 0.1)',
            width: "fit-content",
            borderRadius: 1,
        } },
        React.createElement("p", { className: `font-bold text-center text-[12px] text-[#5477F2]` }, title),
        React.createElement("div", null, content.map((item, index) => (React.createElement("div", { key: index, className: "flex gap-1" },
            React.createElement("p", { className: "font-medium text-[14px] text-[#5D5D5D]" },
                item.label,
                ":"),
            " ",
            React.createElement("p", { className: "font-light text-[14px]" }, item.value))))))) : type === "number" ? (React.createElement(Box, { className: "flex flex-col text-center max-w-[300px] p-4 flex flex-col gap-2", sx: {
            // border: `2px solid ${borderColor}`,
            // backgroundColor: `${backgroundColor}`,
            boxShadow: '0px 0px 8px rgba(53, 81, 180, 0.1)',
            width: "fit-content",
            borderRadius: 1,
        } },
        React.createElement("p", { className: `font-bold text-center text-[12px] text-[#5477F2]` }, title),
        React.createElement("div", null, content.map((item, index) => (React.createElement("div", { key: index, className: "flex flex-col" },
            React.createElement("p", { className: "font-bold text-[24px] text-[#5D5D5D]" }, item.value),
            React.createElement("p", { className: "font-semibold text-[14px] text-[#5D5D5D]" }, item.label))))))) : null));
};
