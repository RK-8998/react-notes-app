import { combineReducers, createStore } from "redux";
import NoteReducer from "../redux/reducers/Note";

const rootStore = combineReducers({
  notes: NoteReducer,
});

const store = createStore(rootStore);

export default store;
