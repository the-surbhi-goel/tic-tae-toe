import React, { useState } from "react";
import Square from "./Square";
import ResultModal from "./ResultModal";

export const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  const [result, setResult] = useState(null);
  const [showModal, setModal] = useState(null);

  const calculateResult = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setResult("Winner is " + squares[a]);
        setModal(true);
        return squares[a];
      }
    }

    const nullElemnts = squares.filter((ele) => ele === null);

    if(nullElemnts.length === 0){
      setResult("Draw");
      setModal(true);
    }
  };

  const setSquareValue = (index) => {
    let temp = squares;
    temp[index] = isXNext ? "X" : "O";
    setSquares(temp);
    setXNext(!isXNext);
    calculateResult()
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXNext(false);
    setResult(null);
    setModal(null);
  };

  return (
    <>
      <div>Next Turn: {isXNext ? "X" : "O"}</div>
      {result && <div>{result}</div>}
      <div className="board-table">
        {squares.map((value, index) => {
          return (
            <Square
              key={index}
              value={value}
              onSquareClick={() => {
                setSquareValue(index);
              }}
            />
          );
        })}

        {showModal && <ResultModal result={result} setModal={setModal} restartGame={restartGame} />}
      </div>
    </>
  );
};
