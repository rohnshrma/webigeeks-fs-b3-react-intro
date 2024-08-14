import React from "react";

const Card = (props) => {
  console.log("props =>", props);

  return (
    <div className="card">
      <div className="img-top">
        <img src={props.imgUrl} alt="img 1" />
      </div>
      <div className="card-body>">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
