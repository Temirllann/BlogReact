import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>hello {props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default Hello;
