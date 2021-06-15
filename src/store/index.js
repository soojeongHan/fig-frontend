import {
  combineReducers,
  getDefaultMiddleware,
  configureStore,
} from "@reduxjs/toolkit";
import market from "../features/market";
import review from "../features/review";
import partners from "../features/partners";

export const rootReducer = combineReducers({
  market: market.reducer,
  review: review.reducer,
  partners: partners.reducer,
});

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [...getDefaultMiddleware()],
  });
  return store;
};

export default createStore;
