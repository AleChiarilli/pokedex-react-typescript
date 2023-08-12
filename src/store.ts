import { configureStore } from '@reduxjs/toolkit';
import pokedexEntriesSlice from './pages/PokedexEntries/reducer/slice';

export default configureStore({
  reducer: {
    pokedexEntries: pokedexEntriesSlice,
  },
});
