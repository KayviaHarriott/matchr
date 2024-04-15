import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
// import '@fontsource/press-start-2p';
// import '@fontsource/ibm-plex-sans-kr';
// import '@fontsource-variable/inter'
// import "@fontsource/poppins";
// import { TicketInformation } from "./pages/TicketsInformation";
export default function App() {
    return (React.createElement(BrowserRouter, null,
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/" },
                React.createElement(Route, { index: true, element: React.createElement(LandingPage, null) })))));
}
// ReactDom.render(<App />, document.getElementById("root"));
