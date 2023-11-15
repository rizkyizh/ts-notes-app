function ButtonAddNote({ onAddNoteHandler }: ButtonAddNoteProps) {
  return (
    <button
      onClick={() => onAddNoteHandler()}
      className="button-add-note__btn-add"
    >
      Create Note +
    </button>
  );
}

export default ButtonAddNote;
