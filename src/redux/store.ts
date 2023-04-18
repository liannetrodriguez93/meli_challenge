'use client';
import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from '@reduxjs/toolkit';
import productListSlice from '@reduxConfig/feature/product/productSlices/productListSlice';
import thunk from 'redux-thunk';
import filterBarSlice from './feature/filterBar/filterBarSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { PersistConfig, persistStore } from 'redux-persist';
import productInfoSlice from './feature/product/productSlices/productInfoSlice';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  productListSlice: productListSlice,
  productInfoSlice: productInfoSlice,
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
