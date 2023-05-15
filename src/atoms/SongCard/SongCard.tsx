import React from "react";
import { Box } from "@mui/system";
import { Card, CardMedia } from "@mui/material";

const SongCard: React.FC<{ index: number }> = () => {
  return (
    <Card>
      <CardMedia>Some IMG</CardMedia>
    </Card>
  );
};

export default SongCard;
