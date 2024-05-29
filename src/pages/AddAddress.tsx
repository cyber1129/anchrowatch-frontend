import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { Stepper } from "./Stepper";
import { ArrowBackIos, Close } from "@mui/icons-material";

import addAddress from "../assets/add-address.svg";
import { useState } from "react";

export const AddAddress = () => {
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  return (
    <Box>
      <Box
        height={48}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="2px solid black"
        paddingX={2}
        gap={1}
      >
        <Box
          //   onClick={() => setStep(LoginStep.SUBMIT_EMAIL)}
          sx={{ cursor: "pointer" }}
        >
          <ArrowBackIos />
        </Box>
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
            bgcolor="red"
          />
        </Box>
        <Close sx={{ cursor: "pointer" }} />
      </Box>
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
              Enter the address below to add to your vault{" "}
            </Typography>
            <Typography fontSize={20} textTransform="uppercase" mb={1.5}>
              Email
            </Typography>
            <FormControl error={error} variant="outlined" autoFocus required>
              <Input
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="email"
              />
              {error && (
                <FormHelperText sx={{ ml: 0 }}>
                  46 characters maximum
                </FormHelperText>
              )}
            </FormControl>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={addAddress} alt="add-address" />
        </Grid>
      </Grid>
    </Box>
  );
};
