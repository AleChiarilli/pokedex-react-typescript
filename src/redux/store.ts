import { combineReducers, configureStore } from '@reduxjs/toolkit';

import pokedexEntriesSlice from '../pages/PokedexEntries/reducer/pokedexEntriesSlice';
import { listenerMiddleware } from './listenerMiddleware';

export const rootReducer = combineReducers({
  pokedexEntries: pokedexEntriesSlice,
});

const getStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().prepend(listenerMiddleware.middleware),
  });

export const loadStore = getStore();
