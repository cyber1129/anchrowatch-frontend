import { OpenInNew } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { useState } from "react";

import login from "../assets/login.svg";

interface SubmitEmailProps {
  email: string;
  setEmail: (email: string) => void;
  submitEmail: () => void;
}

export const SubmitEmail = ({
  email,
  setEmail,
  submitEmail,
}: SubmitEmailProps) => {
  const [error, setError] = useState<boolean>(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);
    if (!validEmail) {
      setError(true);
    } else {
      setError(false);
      submitEmail();
    }
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
        component="form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <Box>
          <Typography fontSize={20} mb={6}>
            Enter your Anchorwatch registered email
          </Typography>
          <Typography fontSize={20} textTransform="uppercase" mb={1.5}>
            Email
          </Typography>
          <FormControl error={error} variant="outlined" autoFocus required>
            <Input
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            {error && (
              <FormHelperText sx={{ ml: 0 }}>
                Incorrect email address
              </FormHelperText>
            )}
          </FormControl>
        </Box>
        <Box display="flex" flexDirection="column" gap={1.5}>
          <Box display="flex" gap={1}>
            <Typography fontSize={14}>Need Help?</Typography>
            <OpenInNew sx={{ height: 20, width: 20 }} />
          </Box>
          <Button
            variant="contained"
            type="submit"
            sx={{ width: 182, height: 48 }}
          >
            Next
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        xs={6}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <img src={login} alt="login" />
      </Grid>
    </Grid>
  );
};
