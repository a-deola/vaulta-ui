import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "../features/stepSlice";
import userReducer from "../features/userSlice"
import uiReducer from "../features/uiSlice"
import { loadingMiddleware } from "./loadingMiddleware";



export const store = configureStore({
reducer: {
    step: stepReducer,
    user: userReducer,
    ui: uiReducer
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loadingMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
