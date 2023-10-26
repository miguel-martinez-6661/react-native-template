import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

const logger = createLogger();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
