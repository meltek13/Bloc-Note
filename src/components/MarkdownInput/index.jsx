import { useState } from "react";
import "./style.css";
import NoteDisplay from "components/NoteDisplay";
import ShowNote from "components/ShowNote";

const MarkdownInput = ({ data }) => {
  const [valueTitle, setValueTitle] = useState("");
  const [valueContent, setValueContent] = useState("");

  const onChangeTitle = (event) => {
    setValueTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setValueContent(event.target.value);
  };

  const handleSave = (e) => {
    localStorage.setItem(valueTitle, valueContent);
  };

  if (data) {
    return (
      <div className="rightPart">
        <ShowNote OneNote={data} />
      </div>
    );
  } else {
    return (
      <div className="rightPart">
        <NoteDisplay title={valueTitle} content={valueContent} />
        <div className="containerForm">
          <form className="form MarkdownInput">
            <input
              className="input"
              type="text"
              name="title"
              value={valueTitle}
              placeholder="Sujet"
              onChange={onChangeTitle}
            />
            <textarea
              className="textarea"
              value={valueContent}
              placeholder="Description ..."
              onChange={onChangeContent}
            ></textarea>
            <button
              type="submit"
              onClick={handleSave}
              className="btn btn-danger"
            >
              Sauvegarder
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default MarkdownInput;
