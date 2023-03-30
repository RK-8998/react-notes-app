export const noteActions = {
  ADD_NOTE: "ADD_NOTE",
  DELETE_NOTE: "DELETE_NOTE",
  SAVE_NOTE: "SAVE_NOTE",
  UN_SAVE_NOTE: "UN_SAVE_NOTE",
};

export const addNote = (payload) => {
  return { type: noteActions.ADD_NOTE, payload };
};

export const saveNote = (id) => {
  return { type: noteActions.SAVE_NOTE, payload: { id } };
};
export const unSaveNote = (id) => {
  return { type: noteActions.UN_SAVE_NOTE, payload: { id } };
};
