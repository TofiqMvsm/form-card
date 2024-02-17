// store/addDataSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const addDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addData } = addDataSlice.actions;

export default addDataSlice.reducer;