import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { deleteNote } from "../redux/actions/Note";
import Note from "./Note";
import { saveNote, unSaveNote } from "../redux/actions/Note";
import Search from "./Search";
import Swal from "sweetalert2";

const NoteList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notes = useSelector((state) => state.notes);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [finalNotes, setFinalNotes] = useState([]);

  const location = useLocation();

  const filterSavedNotes = useCallback(() => {
    setIsLoading(true);
    if (location.pathname === "/savedNotes") {
      const data = notes.filter((note) => note.isSaved === true);
      setFinalNotes(data);
    } else {
      setFinalNotes(notes);
    }
    setIsLoading(false);
  }, [location, notes]);

  const filterSearchNotes = useCallback(() => {
    let data = [];
    if (location.pathname === "/savedNotes") {
      data = notes.filter((note) => note.isSaved === true);
    } else {
      data = notes;
    }
    const searchedNotes = data.filter((note) => note.title.includes(searchValue));
    setFinalNotes(searchedNotes);
  }, [searchValue, notes, location]);

  useEffect(() => {
    filterSavedNotes();
  }, [filterSavedNotes]);

  useEffect(() => {
    filterSearchNotes();
  }, [searchValue, filterSearchNotes]);

  const saveHandler = useCallback(
    async (id) => {
      await dispatch(saveNote(id));
      await Swal.fire("Saved!", "Your Note Saved Successfully", "success");
    },
    [dispatch]
  );

  const unSaveHandler = useCallback(
    async (id) => {
      await dispatch(unSaveNote(id));
      await Swal.fire("Unsaved!", "Your Note Unsaved Successfully", "success");
    },
    [dispatch]
  );

  const deleteNoteHandler = useCallback(
    async (id) => {
      await dispatch(deleteNote(id));
      await Swal.fire("Deleted!", "Your Note Deleted Successfully", "success");
    },
    [dispatch]
  );

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} /> <br />
      {isLoading && <p>Loading....</p>}
      {finalNotes.length > 0 &&
        !isLoading &&
        finalNotes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              description={note.description}
              isSaved={note.isSaved}
              onDeleteNote={deleteNoteHandler}
              onSaveNote={saveHandler}
              onUnSaveNote={unSaveHandler}
            />
          );
        })}
      {finalNotes.length === 0 && location.pathname === "/savedNotes" && isLoading === false && (
        <Box textAlign={"center"} sx={{ marginTop: 5 }}>
          <Typography variant="h5">No any saved notes found...</Typography>
          <Button variant="text" onClick={() => navigate("/")}>
            Save new notes
          </Button>
        </Box>
      )}
      {finalNotes.length === 0 && location.pathname === "/" && isLoading === false && (
        <Box textAlign={"center"} sx={{ marginTop: 5 }}>
          <Typography variant="h5">No any past notes found...</Typography>
          <Button variant="text" onClick={() => navigate("/addNote")}>
            Add new notes
          </Button>
        </Box>
      )}
    </>
  );
};

export default NoteList;
