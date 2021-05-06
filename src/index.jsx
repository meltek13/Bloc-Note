import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import MarkdownInput from "./components/MarkdownInput";
import NoteSaved from "./components/NoteSaved";

const App = () => {
  const [Show, setShow] = React.useState("");
  var monObjet = localStorage;
  var monTableau = Object.keys(monObjet).map(function (cle) {
    return [cle, monObjet[cle]];
  });

  const ShowNote = (e) => {
    setShow(e);
  };

  const ShowAddNote = (e) => {
    setShow("");
  };

  return (
    <div className="body">
      <div className="NoteSaved">
        <button className="btn btn-danger add_note" onClick={ShowAddNote}>
          Ajouter une note
        </button>
        <div className="savedData">
          {monTableau.map((x) => (
            <NoteSaved click={ShowNote} data={x} key={x[0]} />
          ))}
        </div>
      </div>
      <MarkdownInput data={Show} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
