const dataReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_DATA":
      return action.data;
    default:
      return state;
  }
};

export const setData = (data) => {
  return {
    type: "SET_DATA",
    data,
  };
};

export default dataReducer;
