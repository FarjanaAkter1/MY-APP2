import React from "react";

export const Clicker = ({ onClicked }) => {
  // const handleClick = (Message) => {
  //   console.log(Message);
  // };
  return (
    <div>
      <button onClick={() => onClicked("Up")}>Up</button>
      <button onClick={() => onClicked("Down")}>Down</button>
    </div>
  );
};
