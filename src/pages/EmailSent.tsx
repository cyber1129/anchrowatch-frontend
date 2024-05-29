import { Box, Button, Grid, Typography } from "@mui/material";
import { AccessTime } from "@mui/icons-material";
import { useEffect, useState } from "react";

import { LoginStep } from "./Login";
import emailSent from "../assets/email-sent.svg";

interface EmailSentProps {
  setStep: (step: LoginStep) => void;
  sendEmail: () => void;
}

export const EmailSent = ({ setStep, sendEmail }: EmailSentProps) => {
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timer;
    timer = setTimeout(() => {
      setDisableButton(false);
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleResend = () => {
    sendEmail();
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
    }, 30000);
  };

  return (
    <Grid container>
      <Grid
        item
        xs={6}
        height={500}
        borderRight="2px solid black"
        padding={3}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Typography fontSize={20} mb={3}>
            Check your inbox for a sign in link. which is valid for 10 minutes,
            if you don't receive it in 30 seconds press resend to receive
            another link.
          </Typography>
          <Box display="flex" alignItems="center" gap={1.25}>
            <Button
              variant="contained"
              type="submit"
              sx={{ width: 182, height: 48 }}
              disabled={disableButton}
              onClick={handleResend}
            >
              Resend
            </Button>
            {disableButton && (
              <>
                <AccessTime />
                <Typography fontSize={16}>30 seconds</Typography>
              </>
            )}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={emailSent} alt="email-sent" />
      </Grid>
    </Grid>
  );
};
