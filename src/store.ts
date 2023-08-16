import { combineReducers, configureStore } from '@reduxjs/toolkit';
import pokedexEntriesSlice from './pages/PokedexEntries/reducer/slice';

export const rootReducer = combineReducers({
  pokedexEntries: pokedexEntriesSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default configureStore({
  reducer: rootReducer,
});
