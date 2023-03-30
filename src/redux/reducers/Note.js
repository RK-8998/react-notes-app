import { noteActions } from "../actions/Note";

const initialState = [
  {
    id: 1,
    title: "Note 1",
    description: "Note for daily exercise and take healthy food in eating",
    isSaved: false,
  },
  {
    id: 2,
    title: "Note 2",
    description: "Note for daily exercise and take healthy food in eating",
    isSaved: true,
  },
  {
    id: 3,
    title: "Note 3",
    description: "Note for daily exercise and take healthy food in eating",
    isSaved: false,
  },
];

const NoteReducer = (state = initialState, action) => {
  let newNotes;
  let index;
  switch (action.type) {
    case noteActions.ADD_NOTE:
      newNotes = state.concat(action.payload);
      return newNotes;

    case noteActions.DELETE_NOTE:
      newNotes = state.filter((note) => note.id !== action.payload.id);
      return newNotes;

    case noteActions.SAVE_NOTE:
      newNotes = [...state];
      index = newNotes.findIndex((note) => note.id === action.payload.id);
      newNotes[index].isSaved = true;
      return newNotes;

    case noteActions.UN_SAVE_NOTE:
      newNotes = [...state];
      index = newNotes.findIndex((note) => note.id === action.payload.id);
      newNotes[index].isSaved = false;
      return newNotes;

    default:
      return state;
  }
};

export default NoteReducer;
