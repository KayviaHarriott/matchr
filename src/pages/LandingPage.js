import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
    const navigate = useNavigate();
    const [trn, setTRN] = useState("");
    const [controlNumber, setControlNumber] = useState("");
    const [licenseIssue, setLicenseIssue] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const handleNavigation = () => {
        navigate("/ticket-information", { state: { data: { trn, controlNumber, licenseIssue, dateOfBirth } } });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement("p", null, "kaythedev.com"))));
};
