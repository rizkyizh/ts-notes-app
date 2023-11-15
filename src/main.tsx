import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import NotesApp from "./NotesApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <NotesApp />
  </React.StrictMode>
);
