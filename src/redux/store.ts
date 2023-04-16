'use client';
import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
  createMiddleware,
  createSerializableStateInvariantMiddleware,
} from '@reduxjs/toolkit';
import meliSlice from '@reduxConfig/feature/meli/meliSlice';
import thunk from 'redux-thunk';
import filterBarSlice from './feature/filterBar/filterBarSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { PersistConfig, persistStore } from 'redux-persist';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  meli: meliSlice,
  filterBar: filterBarSlice,
});

const persistedReducer = persistReducer<PersistPartial, AnyAction>(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora estas acciones en la verificación de serialización
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(thunk),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
