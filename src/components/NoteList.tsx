import { Note } from "../utils/model";
import NoteItem from "./NoteItem";
import NoteItemEditMode from "./NoteItemEditMode";

function NoteList({
  notes,
  onToggleArchivedNoteChange,
  onDeleteNoteChange,
  onEditNoteChange,
  onEditedNoteById,
}: NoteListProps) {
  return (
    <div className="notelist__container">
      {notes.filter((e) => e.archived === false).length ? (
        notes.map((note: Note) =>
          !note.archived && !note.isEditModeActive ? (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              createdAt={note.createdAt}
              body={note.body}
              isArchived={note.archived}
              onToggleArchivedNoteChange={onToggleArchivedNoteChange}
              onDeleteNoteChange={onDeleteNoteChange}
              onEditNoteChange={onEditNoteChange}
            />
          ) : (
            !note.archived && (
              <NoteItemEditMode
                key={note.id}
                id={note.id}
                title={note.title}
                createdAt={note.createdAt}
                body={note.body}
                onEditedNoteById={onEditedNoteById}
              />
            )
          )
        )
      ) : (
        <h1>No Note</h1>
      )}
    </div>
  );
}

export default NoteList;
