import React from "react";
import { useResult } from "../context-reducer/ResultContext";
import { useForm } from "react-hook-form";

export const PlayerModal = ({ setModal }) => {
  const { addPlayers } = useResult();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      player1: "",
      player2: "",
      noOfMatches: 0,
    },
  });

  const onSubmit = async (formData) => {
    addPlayers(formData.player1, formData.player2, formData.noOfMatches);
    setModal(false);
  };

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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tic Tac Toe</h3>
            
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-4 md:p-5">
              <form className="space-y-4 text-left" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label
                    htmlFor="player1"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Player1 Name
                  </label>
                  <input
                    type="text"
                    name="player1"
                    id="player1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Name"
                    {...register("player1", {
                      required: true,
                    })}
                  />

                  {errors?.player1?.type === "required" && (
                    <p className="text-red-500 mt-3">Please enter player1 name</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="player2"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Player2 Name
                  </label>
                  <input
                    type="text"
                    name="player2"
                    id="player2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Name"
                    {...register("player2", {
                      required: true,
                    })}
                  />

                  {errors?.player2?.type === "required" && (
                    <p className="text-red-500 mt-3">Please enter player2 name</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="noOfMatches"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Number of Matches
                  </label>
                  <input
                    type="text"
                    name="noOfMatches"
                    id="noOfMatches"
                    placeholder="1234567890"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    {...register("noOfMatches", {
                      required: true,
                      pattern: /^[0-9]*$/g,
                      min: 1,
                      max: 20,
                    })}
                  />
                  {errors?.noOfMatches?.type === "required" && (
                    <p className="text-red-500 mt-3">Please enter number of Matches</p>
                  )}

                  {errors?.noOfMatches?.type === "pattern" && (
                    <p className="text-red-500 mt-3">Please enter valid number</p>
                  )}

                  {errors?.noOfMatches?.type === "min" && (
                    <p className="text-red-500 mt-3">Minimum number of matches should be 1</p>
                  )}
                  {errors?.noOfMatches?.type === "max" && (
                    <p className="text-red-500 mt-3">Maximum number of matches can be 20</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white primary-btn hover:bg-primary-200 focus:bg-primary-200 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Start Game
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
