import ic_note from "../assets/ic_note.svg";
import ic_archive from "../assets/ic_archive.svg";
import SearchBar from "./SearchBar";

function SideBar({
  menuSelected,
  onMenuSelected,
  onSearchKeywordChange,
}: SideBarProps) {
  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        <h1 className="sidebar__header-title">MY NOTES</h1>
      </div>
      <SearchBar onSearchKeywordChange={onSearchKeywordChange} />
      <div className="sidebar__menus-wrapper">
        <h2 className="sidebar__menu-title">MENU</h2>
        <button
          className={`sidebar__btn-menu ${menuSelected === 0 && "active"}`}
          onClick={() => onMenuSelected(0)}
        >
          <img src={ic_note} className="sidebar__btn-menu-ic" />
          <p className="sidebar__btn-menu-name">Active Notes</p>
        </button>
        <button
          className={`sidebar__btn-menu ${menuSelected === 1 && "active"}`}
          onClick={() => onMenuSelected(1)}
        >
          <img src={ic_archive} className="sidebar__btn-menu-ic" />
          <p className="sidebar__btn-menu-name">Archived Note</p>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
