import { useResult } from "../context-reducer/ResultContext";

export const PreviousResultModal = ({ setModal }) => {
  const { player1, player2, result, totalPoints } = useResult();

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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Previous Results
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
                onClick={() => setModal(false)}
              >
                X
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <table className="result-table w-full" cellPadding={3} cellSpacing={3}>
              <thead>
                <tr>
                  <th>Match</th>
                  <th>{player1}</th>
                  <th>{player2}</th>
                </tr>
              </thead>
              <tbody>
                {result.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data[0]}</td>
                      <td>{data[1]}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td>Total</td>
                  <td>{totalPoints.player1}</td>
                  <td>{totalPoints.player2}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
