import Navbar from "./Navbar";
import NoteArchivedList from "./NoteArchivedList";
import NoteList from "./NoteList";

function MainSection({
  notes,
  menuSelected,
  onToggleArchivedNoteChange,
  onDeleteNoteChange,
  onEditNoteChange,
  onEditedNoteById,
  onAddNoteHandler,
}: MainSectionProps) {
  return (
    <div className="main-section__container">
      {menuSelected == 0 ? (
        <>
          <Navbar onAddNoteHandler={onAddNoteHandler} />
          <NoteList
            notes={notes}
            onToggleArchivedNoteChange={onToggleArchivedNoteChange}
            onDeleteNoteChange={onDeleteNoteChange}
            onEditNoteChange={onEditNoteChange}
            onEditedNoteById={onEditedNoteById}
          />
        </>
      ) : menuSelected == 1 ? (
        <NoteArchivedList
          notes={notes}
          onToggleArchivedNoteChange={onToggleArchivedNoteChange}
          onDeleteNoteChange={onDeleteNoteChange}
          onEditNoteChange={onEditNoteChange}
          onEditedNoteById={onEditedNoteById}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default MainSection;
