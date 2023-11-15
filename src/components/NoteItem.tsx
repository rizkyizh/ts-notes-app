import NoteItemBody from "./NoteItemBody";

function NoteItem({
  body,
  createdAt,
  id,
  isArchived,
  onToggleArchivedNoteChange,
  title,
  onDeleteNoteChange,
  onEditNoteChange,
}: NoteItemProps) {
  return (
    <div className="noteitem" key={id}>
      <NoteItemBody title={title} tgl={createdAt} desc={body} />
      <div className="noteitem__option">
        <button
          onClick={() => onDeleteNoteChange(id)}
          className="noteitem__option-btn trash"
        ></button>
        <button
          onClick={() => onEditNoteChange(id)}
          className="noteitem__option-btn edit"
        ></button>
        <button
          onClick={() => onToggleArchivedNoteChange(id)}
          className={
            isArchived
              ? "noteitem__option-btn archive archived"
              : "noteitem__option-btn archive"
          }
        ></button>
      </div>
    </div>
  );
}

export default NoteItem;
