import React, { useState } from "react";

import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface genreData {
  genre: string;
}

const SelectGenre = () => {
  const [genre, setGenre] = useState<string>("Pop");

  const handleChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value as string);
  };

  return (
    <>
      <Select
        size="small"
        color="primary"
        value={genre}
        onChange={handleChange}
        sx={{
          color: "red",
        }}
      >
        <MenuItem value="Rock">Rock</MenuItem>
        <MenuItem value="Pop">Pop</MenuItem>
        <MenuItem value="Rap">Rap</MenuItem>
        <MenuItem value="Metal">Metal</MenuItem>
        <MenuItem value="Something">Something</MenuItem>
      </Select>
    </>
  );
};

export default SelectGenre;
