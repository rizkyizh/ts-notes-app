import { showFormattedDate } from "../utils";

function NoteItemBody({ title, tgl, desc }: itemBodyProps) {
  return (
    <div className="noteitem__body-wrapper">
      <h3 className="noteitem__body-title">{title}</h3>
      <p className="noteitem__body-tgl">{showFormattedDate(tgl)}</p>
      <p className="noteitem__body-description">{desc}</p>
    </div>
  );
}

type itemBodyProps = {
  title: string;
  tgl: string;
  desc: string;
};

export default NoteItemBody;
