import { configureStore } from "@reduxjs/toolkit";
import addDataReducer from "./addDataSlice";

const store = configureStore({
  reducer: {
    data: addDataReducer,
  },
});

export default store