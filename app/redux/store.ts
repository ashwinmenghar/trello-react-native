import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { boardApi } from "./services/boardApi";
import { boardWithCardsApi } from "./services/boardWithCardsApi";
import { ListApi } from "./services/ListApi";
import { cardApi } from "./services/cardApi";

export const store = configureStore({
  reducer: {
    [boardApi.reducerPath]: boardApi.reducer,
    [boardWithCardsApi.reducerPath]: boardWithCardsApi.reducer,
    [ListApi.reducerPath]: ListApi.reducer,
    [cardApi.reducerPath]: cardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      boardApi.middleware,
      boardWithCardsApi.middleware,
      ListApi.middleware,
      cardApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
