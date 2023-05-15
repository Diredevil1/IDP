import React from "react";

import { TextField, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <Box
      display="flex"
      gap="2rem"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <TextField
        required
        variant="outlined"
        label="Name"
        InputProps={{ style: { color: "#e63946" } }}
      />
      <TextField
        required
        variant="outlined"
        label="Surname"
        InputProps={{ style: { color: "#e63946" } }}
      />
      <Button color="secondary" variant="outlined" disableRipple>
        <Link to={"layout"}>Check In</Link>
      </Button>
    </Box>
  );
};

export default WelcomePage;
