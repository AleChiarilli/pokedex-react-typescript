import { RootState } from '../../../store';

export function selectedPokedexEntry(state: RootState) {
  return state.pokedexEntries.selectedEntry;
}

export function getPokedexEntries(state: RootState) {
  return state.pokedexEntries.entries;
}

export function getPokemonDetails(state: RootState) {
  return state.pokedexEntries.pokemonDetails;
}

export function getPokedexFlavor(state: RootState) {
  return state.pokedexEntries.pokemonFlavor;
}
