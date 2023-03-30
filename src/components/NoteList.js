import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteNote } from "../redux/actions/Note";
import Note from "./Note";

const NoteList = () => {
  console.log("RENDER NoteList");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  console.log("notes: ", notes);

  const [finalNotes, setFinalNotes] = useState([]);

  const location = useLocation();

  const filterSavedNotes = useCallback(() => {
    if (location.pathname === "/savedNotes") {
      const data = notes.filter((note) => note.isSaved === true);
      setFinalNotes(data);
    } else {
      setFinalNotes(notes);
    }
  }, [location, notes]);

  useEffect(() => {
    filterSavedNotes();
  }, [filterSavedNotes]);

  const deleteNoteHandler = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      {finalNotes.length ? (
        finalNotes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              isSaved={note.isSaved}
              onDeleteNote={deleteNoteHandler}
            />
          );
        })
      ) : location.pathname === "/savedNotes" ? (
        <Box textAlign={"center"} sx={{ marginTop: 5 }}>
          <Typography variant="h5">No any saved notes for you...</Typography>
          <Button variant="text" onClick={() => navigate("/")}>
            Save new notes
          </Button>
        </Box>
      ) : (
        <Box textAlign={"center"} sx={{ marginTop: 5 }}>
          <Typography variant="h5">No any past notes for you...</Typography>
          <Button variant="text" onClick={() => navigate("/addNote")}>
            Add new notes
          </Button>
        </Box>
      )}
    </>
  );
};

export default NoteList;
