import ButtonAddNote from "./ButtonAddNote";

function Navbar({ onAddNoteHandler }: NavbarProps) {
  return (
    <div className="navbar__container">
      <ButtonAddNote onAddNoteHandler={onAddNoteHandler} />
    </div>
  );
}

export default Navbar;
