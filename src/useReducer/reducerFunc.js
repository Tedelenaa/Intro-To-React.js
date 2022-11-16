export const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };

    case "decrement":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { count: 0 };

    case "userInput":
      return { ...state, user: action.payload };

    default:
      throw new Error("action does not exist");
  }
};

export const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  USER_INPUT: "userInput",
};
