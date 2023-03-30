import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";

import { saveNote, unSaveNote } from "../redux/actions/Note";

const Note = ({ id, title, description, isSaved }) => {
  const dispatch = useDispatch();
  const saveHandler = () => {
    dispatch(saveNote(id));
  };
  const unSaveHandler = () => {
    dispatch(unSaveNote(id));
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 5 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="p" sx={{ mb: 1.5, mt: 1.5 }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button disabled={isSaved} onClick={saveHandler}>
            {isSaved ? "SAVED" : "SAVE"}
          </Button>
          <Button>DELETE</Button>
        </ButtonGroup>
        {isSaved && (
          <Button color="inherit" onClick={unSaveHandler}>
            <BookmarkIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Note;
