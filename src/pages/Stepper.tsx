import { Box } from "@mui/material";
import { ArrowBackIos, Close } from "@mui/icons-material";

import { LoginStep } from "./Login";

interface StepperProps {
  step: LoginStep;
  setStep: (step: LoginStep) => void;
}

export const Stepper = ({ step, setStep }: StepperProps) => {
  return (
    <Box
      height={48}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="2px solid black"
      paddingX={2}
      gap={1}
    >
      {step === LoginStep.EMAIL_SENT ? (
        <Box
          onClick={() => setStep(LoginStep.SUBMIT_EMAIL)}
          sx={{ cursor: "pointer" }}
        >
          <ArrowBackIos />
        </Box>
      ) : (
        <Box width={24} />
      )}
      <Box display="flex" alignItems="center" gap={1}>
        <Box
          height={16}
          width={16}
          borderRadius={8}
          border="1px solid black"
          bgcolor="red"
        />
        <Box width={24} border="1px solid black" />
        <Box
          height={16}
          width={16}
          borderRadius={8}
          border="1px solid black"
          bgcolor={step === LoginStep.EMAIL_SENT ? "red" : "white"}
        />
      </Box>
      <Close sx={{ cursor: "pointer" }} />
    </Box>
  );
};
