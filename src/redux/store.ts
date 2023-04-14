'use client';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import meliSlice from '@reduxConfig/feature/meli/meliSlice';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    meli: meliSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
