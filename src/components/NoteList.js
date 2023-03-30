import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Note from "./Note";

const NoteList = () => {
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

  return (
    <>
      {finalNotes.map((note) => {
        return (
          <Note key={note.id} id={note.id} title={note.title} description={note.description} isSaved={note.isSaved} />
        );
      })}
    </>
  );
};

export default NoteList;
