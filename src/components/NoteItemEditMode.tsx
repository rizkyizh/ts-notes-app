import React, { FormEvent } from "react";
import { showFormattedDate } from "../utils";

class NoteItemEditMode extends React.Component<
  NoteItemEditModeProps,
  FormState
> {
  constructor(props: NoteItemEditModeProps) {
    super(props);

    this.state = {
      title: props.title,
      description: props.body,
      titleLimitChar: 50 - props.title.length,
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
    this.onSubmitEditedNote = this.onSubmitEditedNote.bind(this);
  }

  onTitleChange(newTitle: string) {
    if (newTitle.length <= 50) {
      this.setState(() => ({
        title: newTitle,
        titleLimitChar: 50 - newTitle.length,
      }));
    }
  }

  onDescChange(newDesc: string) {
    this.setState(() => ({
      description: newDesc,
    }));
  }

  onSubmitEditedNote(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    this.props.onEditedNoteById({
      id: this.props.id,
      title: this.state.title,
      desc: this.state.description,
    });
  }

  render(): React.ReactNode {
    return (
      <div className="noteitem-editmode active-edit" key={this.props.id}>
        <p className="noteitem-editmode__title-limit-char">
          {this.state.titleLimitChar}
        </p>
        <form onSubmit={this.onSubmitEditedNote}>
          <div className="noteitem-editmode__body-wrapper">
            <input
              className="noteitem-editmode__title active-edit"
              type="text"
              name="title"
              id="title"
              value={this.state.title}
              onChange={(e) => this.onTitleChange(e.target.value)}
            />
            <input
              className="noteitem-editmode__tgl active-edit"
              type="datetime"
              name="createdAt"
              id="createdAt"
              value={showFormattedDate(this.props.createdAt)}
              contentEditable="false"
              readOnly
            />
            <textarea
              className="noteitem-editmode__desc active-edit"
              name="desc"
              id="desc"
              value={this.state.description}
              onChange={(e) => this.onDescChange(e.target.value)}
            />
          </div>
          <div className="noteitem-editmode__option">
            <button
              onClick={() => this.props.onDeleteNoteChange(this.props.id)}
              className="noteitem__option-btn trash"
            ></button>
            <button
              type="submit"
              className="noteitem-editmode__option-btn checklis"
            ></button>
          </div>
        </form>
      </div>
    );
  }
}

// function NoteItemEditMode({
//   id,
//   title,
//   createdAt,
//   body,
// }: NoteItemEditModeProps) {

// }

export default NoteItemEditMode;
