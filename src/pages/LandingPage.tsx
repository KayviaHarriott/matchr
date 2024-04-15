import { Box, Button, InputLabel, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputLabelStyling } from "../styles/ComponentStyling";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import InstagramIcon from '@mui/icons-material/Instagram';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [trn, setTRN] = useState<string>("");
  const [controlNumber, setControlNumber] = useState<string>("");
  const [licenseIssue, setLicenseIssue] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const handleNavigation = () => {
    navigate("/ticket-information", {
      state: { data: { trn, controlNumber, licenseIssue, dateOfBirth } },
    });
  };
  return (
    <>
      <Box
        sx={{backgroundColor: "#E6F2F6"}}
        className="flex flex-col justify-center items-center h-screen gap-3 "
      >
        <Box
          sx={{
            width: "fit-content",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            padding: 4,
            borderRadius: 2,
          }}
          className="text-center"
        >
          <p className="text-[32px] font-bold text-[#087CA7]">
            Kayvia Harriott
          </p>
          <div className="flex flex-col gap-2 w-[400px] text-center">
            <p className="text-[gray]">
              Hi! I'm currently working on my website, but in the meanwhile,
              contact me below:
            </p>
            <div className="flex flex-col text-center items-center justify-center gap-1">
              <a href="mailto:kayvia@kaythedev.com">
                <p className="font-bold">kayvia@kaythedev.com</p>
              </a>
             <a href="https://www.instagram.com/kayviaharriott" target="_blank">
               <div className="flex gap-1 items-center justify-center text-center">
                  <InstagramIcon/>
                  <p className="font-bold">kayviaharriott</p>
               </div>
             </a>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};
