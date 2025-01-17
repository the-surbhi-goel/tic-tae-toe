import React from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="square"
      onClick={()=> value ? '' : onSquareClick()}
    >
      {value}
    </button>
  );
};

export default Square;
