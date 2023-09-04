import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  PokedexEntriesState,
  PokedexFlavorTextEntry,
  Pokemon,
  PokemonDetail,
} from '../types';
import {
  defaultDetails,
  defaultEntry,
  defaultFlavorText,
} from '../../../utils/constants';

const initialState: PokedexEntriesState = {
  entries: [],
  selectedEntry: defaultEntry,
  pokemonDetails: defaultDetails,
  pokemonFlavor: defaultFlavorText,
  searchText: '',
};

export const fetchPokedexEntries = createAsyncThunk<Pokemon[]>(
  'pokedexEntries/fetchPokedexEntries',
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

export const fetchSelectedPokemonDetails = createAsyncThunk(
  'pokedexEntries/fetchSelectedPokemonDetails',
  async (pokemon: Pokemon) => {
    const pokemonDetails = (await fetch(pokemon.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())) as PokemonDetail;

    const pokemonFlavor = (await fetch(pokemonDetails.species.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())) as PokedexFlavorTextEntry;

    return { selectedEntry: pokemon, pokemonDetails, pokemonFlavor };
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

    SEARCH_POKEMON: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPokedexEntries.fulfilled, (state, action) => {
        state.entries = action.payload;
      })
      .addCase(fetchSelectedPokemonDetails.fulfilled, (state, action) => {
        state.pokemonDetails = action.payload.pokemonDetails;
        state.pokemonFlavor = action.payload.pokemonFlavor;
        state.selectedEntry = action.payload.selectedEntry;
      });
  },
});

export const {
  SELECT_POKEMON,
  SAVE_POKEDEX_ENTRIES,
  SAVE_POKEMON_DETAILS,
  SAVE_POKEMON_FLAVOR,
  SEARCH_POKEMON,
} = pokedexEntriesSlice.actions;

export default pokedexEntriesSlice.reducer;
