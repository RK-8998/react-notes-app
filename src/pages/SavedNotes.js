import { Divider, Typography } from "@mui/material";
import React from "react";
import NoteList from "../components/NoteList";

const SavedNotes = () => {
  return (
    <>
      <Typography variant="h3">Saved Notes</Typography>
      <br />
      <NoteList />
    </>
  );
};

export default SavedNotes;
