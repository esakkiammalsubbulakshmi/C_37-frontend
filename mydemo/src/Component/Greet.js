import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name} {props.value}</h1>
    </div>
  );
};

export default Greet;
