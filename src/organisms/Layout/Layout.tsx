import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SelectGenre from "../../atoms/SelectGenre/SelectGenre";
import SongCard from "../../atoms/SongCard/SongCard";
import PlaylistCards from "../../atoms/PlaylistCard/PlaylistCards";

const Layout = () => {
  const [someData, setSomeData] = useState<any[]>([]);

  const {
    tracks: { track },
  } = someData;

  const key = "d5f511d1706fc5c191f78a7ee5d4aee4";

  const testData = () => {
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${key}&format=json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSomeData(data);
      });
  };

  useEffect(() => {
    testData();
  }, []);

  console.log(tracks);

  return (
    <>
      <Grid container columns={12} sx={{ height: "100vh" }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={9}>
          <Grid item display={"flex"} justifyContent={"right"} sx={{ m: 3 }}>
            <SelectGenre />
          </Grid>

          <Grid
            textAlign={"center"}
            container
            columns={5}
            spacing={2}
            justifyContent={"center"}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((song, index) => (
              <Grid key={song} xs={1} item>
                <SongCard index={index} />
              </Grid>
            ))}
          </Grid>
          <PlaylistCards />
        </Grid>
      </Grid>
    </>
  );
};
export default Layout;
