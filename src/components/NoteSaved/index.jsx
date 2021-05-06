import React from "react";
import "./style.css";

const NoteSaved = ({ data, click }) => {
  return (
    <div className="savedNote">
      <h4 onClick={click} className="text-danger titleShowNote">
        {data[0]}
      </h4>
      <p>{data[1]}</p>
    </div>
  );
};

export default NoteSaved;
