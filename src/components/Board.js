import React, { useState } from "react";
import Square from "./Square";
import { ResultModal } from "../modals";
import { useResult } from "../context-reducer/ResultContext";

export const Board = () => {
  const { currentMatch, player1, player2, addResult, totalPoints } = useResult();
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
        if (squares[a] === "X") {
          addResult(currentMatch, [1, 0]);
        } else {
          addResult(currentMatch, [0, 1]);
        }

        console.log(totalPoints);

        setResult("Winner is " + squares[a]);
        setModal(true);

        return squares[a];
      }
    }

    // Check Draw State
    const nullElemnts = squares.filter((ele) => ele === null);

    if (nullElemnts.length === 0) {
      setResult("Draw", [0, 0]);
      addResult(currentMatch - 1);
      setModal(true);
    }
  };

  const calculateSeriesWinner = () => {
    setModal(false);

    if (totalPoints.player1 > totalPoints.player2) {
      alert("Series Winner is " + player1);
    } else if (totalPoints.player2 > totalPoints.player1) {
      alert("Series Winner is " + player2);
    } else {
      alert("Series is draw ");
    }
    window.location.reload();
  };

  const setSquareValue = (index) => {
    let temp = squares;
    temp[index] = isXNext ? "X" : "O";
    setSquares(temp);
    setXNext(!isXNext);
    calculateResult();
  };

  const nextGame = () => {
    setSquares(Array(9).fill(null));
    setXNext(true);
    setResult(null);
    setModal(null);
  };

  return (
    <>
      <div>Match #{currentMatch + 1}</div>
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
      </div>
      {showModal && (
        <ResultModal
          result={result}
          matchNo={currentMatch}
          setModal={setModal}
          nextGame={nextGame}
          calculateSeriesWinner={calculateSeriesWinner}
        />
      )}
    </>
  );
};
