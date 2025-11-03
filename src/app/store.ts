import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "../features/stepSlice";
import userReducer from "../features/userSlice"



export const store = configureStore({
reducer: {
    step: stepReducer,
    user: userReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
