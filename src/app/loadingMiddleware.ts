import { isPending, isRejected, isFulfilled } from "@reduxjs/toolkit";
import { startLoading, stopLoading } from "@/features/uiSlice";

export const loadingMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
  if (isPending(action)) storeAPI.dispatch(startLoading());
  if (isFulfilled(action) || isRejected(action)) storeAPI.dispatch(stopLoading());
  return next(action);
};
