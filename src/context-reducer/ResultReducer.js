export const resultReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_PLAYERS":
        return { ...state, ...payload };
    case "ADD_RESULT":
      return { ...state, ...payload };
    case "RESTART":
      return { ...payload };
    default:
      return { ...state };
  }
};
