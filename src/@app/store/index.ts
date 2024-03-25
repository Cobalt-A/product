import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from '@entities/products'

const rootReducer = combineReducers({
  productReducer
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
