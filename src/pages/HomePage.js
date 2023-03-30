import { Divider, Typography } from "@mui/material";
import React from "react";
import NoteList from "../components/NoteList";

const Home = () => {
  return (
    <>
      <Typography variant="h3">Home</Typography>
      <Divider />
      <NoteList />
    </>
  );
};

export default Home;
