import React from "react";
import { Paper, ToggleButton, Typography } from "@mui/material";
import { Box } from "@mui/system";

const PlaylistCards = () => {
  return (
    <Box
      sx={{
        marginTop: 3,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {[1, 2, 3, 4, 5, 6].map((song, index) => {
        return (
          <Paper
            key={song}
            elevation={0}
            sx={{
              userSelect: "none",
              paddingLeft: 3,
              paddingRight: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "#e63946",

              height: "4rem",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,.1)",
                color: "#e63990",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography fontSize="18px">{index + 1}</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 2,
                }}
              >
                <Typography variant="subtitle1">It's My Life</Typography>
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Bon Jovi
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              sx={{
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Some album
            </Typography>
            <Typography variant="body2">1 week ago</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <ToggleButton value="check">S</ToggleButton>
              <Typography variant="body2">Duration</Typography>
            </Box>
          </Paper>
        );
      })}
    </Box>
  );
};

export default PlaylistCards;
