import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { ButtonGroup } from "@mui/material";

const Note = ({ id, title, description, isSaved, onDeleteNote, onSaveNote, onUnSaveNote }) => {
  console.log("RENDER NOTE");

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
          <Button disabled={isSaved} onClick={() => onSaveNote(id)}>
            {isSaved ? "SAVED" : "SAVE"}
          </Button>
          <Button onClick={() => onDeleteNote(id)}>DELETE</Button>
        </ButtonGroup>
        {isSaved && (
          <Button color="inherit" onClick={() => onUnSaveNote(id)}>
            <BookmarkIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Note;
