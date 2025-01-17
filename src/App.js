import { useEffect, useState } from "react";
import "./App.scss";
import { Board } from "./components";
import { PlayerModal, PreviousResultModal } from "./modals";

function App() {
  const [showModal, setModal] = useState(null);
  const [showPrevModal, setPrevModal] = useState(null);

  useEffect(() => {
    let data = localStorage.getItem("ticTacToe");

    if (!data) {
      setModal(true);
    }
  }, []);

  return (
    <div className="container p-2 text-center">
      <Board />

      <button
        type="button"
        className="text-white mt-20 primary-btn hover:bg-primary-200 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
        onClick={() => setPrevModal(true)}
      >
        Check Previous Results
      </button>

      {showModal && <PlayerModal setModal={setModal} />}
      {showPrevModal && <PreviousResultModal setModal={setPrevModal} />}
    </div>
  );
}

export default App;
