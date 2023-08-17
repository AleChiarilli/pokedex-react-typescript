import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  PokedexEntriesState,
  PokedexFlavorTextEntry,
  Pokemon,
  PokemonDetail,
} from '../types';

const initialState: PokedexEntriesState = {
  entries: [],
  selectedEntry: {
    url: '',
    name: '',
  },
  pokemonDetails: {
    sprites: {
      front_default: '',
    },
    types: [],
    stats: [],
    species: {
      url: '',
    },
  },
  pokemonFlavor: {
    flavor_text_entries: [],
  },
};

export const fetchPokedexEntries = createAsyncThunk<Pokemon[]>(
  'pokedexEntries/getPokedexEntries',
  async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=151`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = (await response.json()) as { results: Pokemon[] };
    return data.results;
  },
);

const pokedexEntriesSlice = createSlice({
  name: 'pokedexEntries',
  initialState,
  reducers: {
    SELECT_POKEMON: (state, action: PayloadAction<Pokemon>) => {
      state.selectedEntry = action.payload;
    },
    SAVE_POKEDEX_ENTRIES: (state, action: PayloadAction<Pokemon[]>) => {
      state.entries = action.payload;
    },
    SAVE_POKEMON_DETAILS: (state, action: PayloadAction<PokemonDetail>) => {
      state.pokemonDetails = action.payload;
    },
    SAVE_POKEMON_FLAVOR: (
      state,
      action: PayloadAction<PokedexFlavorTextEntry>,
    ) => {
      state.pokemonFlavor = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchPokedexEntries.fulfilled, (state, action) => {
      state.entries = action.payload;
    });
  },
});

export const {
  SELECT_POKEMON,
  SAVE_POKEDEX_ENTRIES,
  SAVE_POKEMON_DETAILS,
  SAVE_POKEMON_FLAVOR,
} = pokedexEntriesSlice.actions;

export default pokedexEntriesSlice.reducer;
