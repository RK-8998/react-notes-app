import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const NoteForm = () => {
  return (
    <>
      <Typography variant="h3">New Note</Typography>
      <Divider variant="fullWidth" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { mt: 5, width: "50%", alignContent: "center" },
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <div>
            <TextField variant="filled" id="title" label="Title" placeholder="Enter Your Note Title" />
            <br />
            <TextField
              id="description"
              label="Description"
              placeholder="Enter Your Note Description"
              multiline
              variant="filled"
            />
          </div>
          <br />
          <Button type="submit" variant="contained" startIcon={<PlaylistAddIcon />}>
            ADD
          </Button>
        </form>
      </Box>
    </>
  );
};

export default NoteForm;
