import { Box, Button, InputLabel, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputLabelStyling } from "../styles/ComponentStyling";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

export const LandingPage = () => {
  const navigate = useNavigate();
  const [trn, setTRN] = useState<string>("");
  const [controlNumber, setControlNumber] = useState<string>("");
  const [licenseIssue, setLicenseIssue] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const handleNavigation = () => {
    navigate("/ticket-information", { state: { data: {trn, controlNumber, licenseIssue, dateOfBirth} } });
  };
  return (
    <>
     <div>
      <p>kaythedev.com</p>
     </div>
    </>
  );
};
