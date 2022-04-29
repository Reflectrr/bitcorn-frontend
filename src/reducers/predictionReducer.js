const predictionReducer = (state = -1, action) => {
  switch (action.type) {
    case "SET_PREDICTION":
      return action.data;
    default:
      return state;
  }
};

export const setPrediction = (data) => {
  return {
    type: "SET_PREDICTION",
    data: data,
  };
};
export default predictionReducer;
