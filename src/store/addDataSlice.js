import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
  data: [],
};

export const addDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData: (state, action) => {
      const newData = { ...action.payload, id: uuidv4() }; 
      state.data.push(newData);
    },
    editData: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteData: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addData, editData, deleteData } = addDataSlice.actions;

export default addDataSlice.reducer;
