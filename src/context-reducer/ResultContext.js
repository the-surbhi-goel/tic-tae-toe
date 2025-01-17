import { createContext, useContext, useReducer } from "react";
import { resultReducer } from "./ResultReducer";

const initialState = {
  player1: "",
  player2: "",
  noOfMatches: 0,
  currentMatch: 0,
  result: [],
  totalPoints: {
    player1: 0,
    player2: 0,
  },
};

const ResultContext = createContext(initialState);

export const ResultProvider = ({ children }) => {
  const [state, dispatch] = useReducer(resultReducer, initialState);

  const addPlayers = (player1, player2, noOfMatches) => {
    const result = Array(parseInt(noOfMatches)).fill([null, null]);
    dispatch({
      type: "ADD_PLAYERS",
      payload: {
        player1: player1,
        player2: player2,
        currentMatch: 0,
        noOfMatches: parseInt(noOfMatches),
        result: result,
      },
    });
  };

  const setCurrentMatch = (matchNo) => {
    dispatch({
      type: "ADD_PLAYERS",
      payload: {
        currentMatch: matchNo,
      },
    });
  };

  const addResult = (match_no, result) => {
    const updatedList = [...state.result];
    updatedList[match_no] = result;

    const totalPoints = {
      player1: state.totalPoints.player1 + result[0],
      player2: state.totalPoints.player2 + result[1],
    };
    dispatch({
      type: "ADD_RESULT",
      payload: {
        result: updatedList,
        currentMatch: match_no + 1,
        totalPoints: totalPoints,
      },
    });
  };

  const restart = () => {
    dispatch({
      type: "RESTART",
      payload: initialState,
    });
  };

  const value = {
    player1: state.player1,
    player2: state.player2,
    noOfMatches: state.noOfMatches,
    currentMatch: state.currentMatch,
    result: state.result,
    totalPoints: state.totalPoints,
    addPlayers,
    addResult,
    setCurrentMatch,
    restart,
  };

  return <ResultContext.Provider value={value}>{children}</ResultContext.Provider>;
};

export const useResult = () => {
  const context = useContext(ResultContext);
  return context;
};
