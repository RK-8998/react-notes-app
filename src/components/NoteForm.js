import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { addNote } from "../redux/actions/Note";
import { v4 as generateId } from "uuid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SweatAlert from "../ui/SweatAlert";

const NoteForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [isTitleTouched, setIsTitleTouched] = useState(false);

  const [description, setDescription] = useState("");
  const [isDescriptionTouched, setIsDescriptionTouched] = useState(false);

  const titleHasError = title.trim().length === 0 && isTitleTouched;
  const descriptionHasError = description.trim().length === 0 && isDescriptionTouched;

  console.log(titleHasError, descriptionHasError);

  const isFormValid = titleHasError === false && descriptionHasError === false;

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setIsTitleTouched(false);
    setIsDescriptionTouched(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsTitleTouched(true);
    setIsDescriptionTouched(true);

    if (isFormValid) {
      const id = generateId();
      const payload = {
        id,
        title,
        description,
      };
      await dispatch(addNote(payload));
      resetForm();
      await Swal.fire("Added!", "Your Note Added Successfully", "success");
      navigate("/");
    }
  };

  return (
    <>
      <Typography variant="h3">New Note</Typography>
      <Divider variant="fullWidth" />
      <Box
        component="form"
        onSubmit={submitHandler}
        sx={{
          "& .MuiTextField-root": { mt: 5, width: "50%", alignContent: "center" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            variant="outlined"
            id="title"
            label="Title"
            placeholder="Enter Your Note Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={() => setIsTitleTouched(true)}
            error={titleHasError}
          />
          <br />
          <TextField
            variant="outlined"
            id="description"
            label="Description"
            placeholder="Enter Your Note Description"
            multiline
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={() => setIsDescriptionTouched(true)}
            error={descriptionHasError}
          />
        </div>
        <br />
        <Button type="submit" variant="contained" startIcon={<PlaylistAddIcon />}>
          ADD
        </Button>
      </Box>
    </>
  );
};

export default NoteForm;
