import React from "react";
import { useResult } from "../context-reducer/ResultContext";

export const ResultModal = ({ setModal, result, nextGame, matchNo, calculateSeriesWinner }) => {
  const { noOfMatches } = useResult();

  return (
    <>
      <div
        id="authentication-modal"
        tabIndex="-1"
        className="overflow-y-auto overflow-x-hidden bg-slate-200/75 flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-md max-h-full  md:h-auto overflow-y-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{result}</h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => setModal(false)}
              >
                <i className="bi bi-x-lg"></i>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
              {matchNo === noOfMatches ? (
                <button
                  type="button"
                  onClick={() => calculateSeriesWinner()}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Check Winner Of the Series
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => nextGame()}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Next Game
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
