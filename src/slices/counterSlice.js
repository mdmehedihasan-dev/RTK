import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusNumber: (state,action) => {
      state.value += action.payload;
    },

    minusNumber: (state,action) => {
      if(state.value >1 ){
        state.value -= action.payload;
      }
    },
    multiNumber:(state)=>{
      state.value *=2
    },
    divNumber:(state)=>{
      state.value /=2
    }
  },
});

// Action creators are generated for each case reducer function
export const { plusNumber,minusNumber,multiNumber,divNumber } = counterSlice.actions;

export default counterSlice.reducer;
