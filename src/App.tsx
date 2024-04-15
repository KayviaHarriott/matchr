import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
// import '@fontsource/press-start-2p';
// import '@fontsource/ibm-plex-sans-kr';
// import '@fontsource-variable/inter'
// import "@fontsource/poppins";
// import { TicketInformation } from "./pages/TicketsInformation";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LandingPage />} />
        </Route>
        {/* <Route path="/ticket-information" index element={<TicketInformation />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

// ReactDom.render(<App />, document.getElementById("root"));
