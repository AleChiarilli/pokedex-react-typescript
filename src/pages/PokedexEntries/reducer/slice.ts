import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PokedexEntriesState, Pokemon } from '../types';

const initialState: PokedexEntriesState = {
  entries: [],
  selectedEntry: {
    url: '',
    name: '',
  },
};

const pokedexEntriesSlice = createSlice({
  name: 'pokedexEntries',
  initialState,
  reducers: {
    SELECT_POKEMON: (state, action: PayloadAction<Pokemon>) => {
      state.selectedEntry = action.payload;
    },
  },
});

export const { SELECT_POKEMON } = pokedexEntriesSlice.actions;
export default pokedexEntriesSlice.reducer;
