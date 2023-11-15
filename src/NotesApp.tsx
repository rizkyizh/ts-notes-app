import React from "react";
import { Note } from "./utils/model";
import { generateRandomId, generateTimeStamp, getInitialData } from "./utils";
import SideBar from "./components/Sidebar";
import MainSection from "./components/MainSection";

class NotesApp extends React.Component<unknown, UiState> {
  constructor(props: unknown) {
    super(props);

    this.state = {
      notes: getInitialData(),
      keyword: "",
      menuSelected: 0,
    };

    this.onSetMenuSelected = this.onSetMenuSelected.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onToggleArchivedNoteChange =
      this.onToggleArchivedNoteChange.bind(this);
    this.onDeleteNoteChange = this.onDeleteNoteChange.bind(this);
    this.onEditNoteChange = this.onEditNoteChange.bind(this);
    this.onEditedNoteById = this.onEditedNoteById.bind(this);
    this.onSearchKeywordChange = this.onSearchKeywordChange.bind(this);
  }

  onSetMenuSelected(newNumber: number) {
    this.setState(() => ({
      menuSelected: newNumber,
    }));
  }

  onAddNoteHandler() {
    const newNote: Note = {
      id: generateRandomId(),
      title: "title",
      body: "lorem ipsum",
      createdAt: generateTimeStamp(),
      archived: false,
      isEditModeActive: true,
    };
    this.setState((prevState) => ({
      notes: [newNote, ...prevState.notes],
    }));
  }

  onEditNoteChange(id: number) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note: Note) =>
        note.id === id
          ? { ...note, isEditModeActive: !note.isEditModeActive }
          : note
      ),
    }));
  }

  onEditedNoteById({
    id,
    title,
    desc,
  }: {
    id: number;
    title: string;
    desc: string;
  }) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note: Note) =>
        note.id === id
          ? { ...note, title, body: desc, isEditModeActive: false }
          : note
      ),
    }));
  }

  onToggleArchivedNoteChange(id: number) {
    this.setState((prevState) => ({
      notes: prevState.notes.map((note: Note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  onDeleteNoteChange(id: number) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter((note: Note) => note.id !== id),
    }));
  }

  onSearchKeywordChange(newkeyword: string) {
    this.setState(() => ({
      keyword: newkeyword,
    }));
  }

  private get filteredNotesBySearchKeyword(): Note[] {
    return this.state.notes.filter((note: Note) =>
      note.title.toLowerCase().includes(this.state.keyword.toLowerCase())
    );
  }

  render(): React.ReactNode {
    const notes = this.filteredNotesBySearchKeyword;
    const menuSelected = this.state.menuSelected;

    return (
      <div className="notes-app__container">
        <SideBar
          menuSelected={menuSelected}
          onMenuSelected={this.onSetMenuSelected}
          onSearchKeywordChange={this.onSearchKeywordChange}
        />
        <MainSection
          notes={notes}
          menuSelected={menuSelected}
          onToggleArchivedNoteChange={this.onToggleArchivedNoteChange}
          onDeleteNoteChange={this.onDeleteNoteChange}
          onEditNoteChange={this.onEditNoteChange}
          onEditedNoteById={this.onEditedNoteById}
          onAddNoteHandler={this.onAddNoteHandler}
        />
      </div>
    );
  }
}

export default NotesApp;
