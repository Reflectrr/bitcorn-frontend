import styleReducer from "./reducers/styleReducer";
import mobileReducer from "./reducers/mobileReducer";
import adminReducer from "./reducers/adminReducer";
import dataReducer from "./reducers/dataReducer";
import predictionReducer from "./reducers/predictionReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  classes: styleReducer,
  drawer: mobileReducer,
  admin: adminReducer,
  data: dataReducer,
  prediction: predictionReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
