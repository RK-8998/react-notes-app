import React from "react";
import "./App.css";
import Sidebar from "./layout/Sidebar";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddNotePage from "./pages/AddNotePage";
import SavedNotes from "./pages/SavedNotes";
import NotFoundPage from "./pages/404";
import SidebarDemo from "./layout/SidebarDemo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/addNote", element: <AddNotePage /> },
      { path: "/savedNotes", element: <SavedNotes /> },
    ],
  },
  { path: "*", element: <NotFoundPage /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
