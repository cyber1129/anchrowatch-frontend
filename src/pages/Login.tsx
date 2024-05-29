import { Box, Typography } from "@mui/material";

import { Stepper } from "./Stepper";
import { SubmitEmail } from "./SubmitEmail";
import { useState } from "react";
import { EmailSent } from "./EmailSent";

export enum LoginStep {
  SUBMIT_EMAIL = "submit-email",
  EMAIL_SENT = "email-sent",
}

export const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [step, setStep] = useState<LoginStep>(LoginStep.SUBMIT_EMAIL);

  const submitEmail = () => {
    sendEmail();

    setStep(LoginStep.EMAIL_SENT);
  };

  const sendEmail = () => {
    // submit email to backend

    console.log("email sent", email);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box height={600} width={1050} border="2px solid black">
        <Stepper step={step} setStep={setStep} />
        <Box
          height={50}
          paddingLeft={3}
          borderBottom="2px solid black"
          display="flex"
          alignItems="center"
          bgcolor="#F0F1F1"
        >
          <Typography fontSize={20} textTransform="uppercase">
            Log in to your account
          </Typography>
        </Box>
        {step === LoginStep.SUBMIT_EMAIL ? (
          <SubmitEmail
            email={email}
            setEmail={setEmail}
            submitEmail={submitEmail}
          />
        ) : step === LoginStep.EMAIL_SENT ? (
          <EmailSent setStep={setStep} sendEmail={sendEmail} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
