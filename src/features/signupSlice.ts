
import { createSlice, type PayloadAction,  } from "@reduxjs/toolkit";

interface SignupState {
  step: number;
}

const initialState: SignupState = {
  step: 1,
};


export const signupSlice = createSlice({
  name: "signup",
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

export const { setStep, nextStep, prevStep } = signupSlice.actions;
export default signupSlice.reducer;
