declare interface UiState {
  notes: Note[];
  keyword: string;
  menuSelected: number;
}

declare interface FormState {
  title: string;
  description: string;
  titleLimitChar: number
}

declare type SideBarProps = {
  menuSelected: number
  onMenuSelected: MouseEventHandler<HTMLButtonElement>
  onSearchKeywordChange: (keyword: string) => void
}

declare type MainSectionProps = {
  menuSelected: number;
  notes: Note[];
  onToggleArchivedNoteChange: MouseEventHandler<HTMLButtonElement>
  onDeleteNoteChange: MouseEventHandler<HTMLButtonElement>
  onEditNoteChange: MouseEventHandler<HTMLButtonElement>
  onAddNoteHandler: MouseEventHandler<HTMLButtonElement>
  onEditedNoteById: ({
    id,
    title,
    desc,
  }: {
    id: number;
    title: string;
    desc: string;
  }) => void
}

declare type NoteListProps = {
  notes: Note[];
  onToggleArchivedNoteChange: MouseEventHandler<HTMLButtonElement>
  onDeleteNoteChange: MouseEventHandler<HTMLButtonElement>
  onEditNoteChange: MouseEventHandler<HTMLButtonElement>
  onEditedNoteById: ({
    id,
    title,
    desc,
  }: {
    id: number;
    title: string;
    desc: string;
  }) => void
};

declare type NoteItemProps = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  isArchived: boolean
  onToggleArchivedNoteChange: MouseEventHandler<HTMLButtonElement>
  onDeleteNoteChange: MouseEventHandler<HTMLButtonElement>
  onEditNoteChange: MouseEventHandler<HTMLButtonElement>
}

declare type NoteArchivedListProps = {
  notes: Note[];
  onToggleArchivedNoteChange: MouseEventHandler<HTMLButtonElement>
  onDeleteNoteChange: MouseEventHandler<HTMLButtonElement>
  onEditNoteChange: MouseEventHandler<HTMLButtonElement>
  onEditedNoteById: ({
    id,
    title,
    desc,
  }: {
    id: number;
    title: string;
    desc: string;
  }) => void
};

declare interface NoteItemEditModeProps {
  id: number;
  title: string;
  body: string;
  createdAt: string;
  onEditedNoteById: ({
    id,
    title,
    desc,
  }: {
    id: number;
    title: string;
    desc: string;
  }) => void
}

declare type ButtonAddNoteProps = {
  onAddNoteHandler: MouseEventHandler<HTMLButtonElement>
}

declare type NavbarProps = {
  onAddNoteHandler: MouseEventHandler<HTMLButtonElement>
}

declare type SearchBarProps = {
  onSearchKeywordChange: (keyword: string) => void
}