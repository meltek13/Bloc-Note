import React from "react";

const ShowNote = ({ OneNote }) => {
  const [destroy, setDestroy] = React.useState(false);
  var monObjet = localStorage;
  var monTableau = Object.keys(monObjet).map(function (cle) {
    return [cle, monObjet[cle]];
  });
  let filter = monTableau.filter((x) => x[0] === OneNote.target.innerHTML);

  const Delete = (e) => {
    localStorage.removeItem(filter[0][0]);
    window.location.reload();
  };

  return (
    <div>
      <h2>{filter[0][0]}</h2>
      <p>{filter[0][1]}</p>
      <button className="btn btn-danger" onClick={Delete}>
        supprimer
      </button>
      <button className="btn btn-danger">modifier</button>
    </div>
  );
};
export default ShowNote;
