
import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

interface StepState {
  step: number;
}

const initialState: StepState = {
  step: 1,
};


export const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload;
    },
    nextStep: (state) => {
      state.step ++;
    },
    prevStep: (state) => {
      if (state.step > 1) state.step --;
    },
  },
});

export const { setStep, nextStep, prevStep } = stepSlice.actions;
export default stepSlice.reducer;
