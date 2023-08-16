type FlavorTextEntry = {
  flavor_text: string;
};

export type PokedexFlavorTextEntry = {
  flavor_text_entries: FlavorTextEntry[];
};

type PokemonSpecies = {
  url: string;
};

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type PokemonType = {
  slot: number;
  type: {
    name: string;
  };
};

export type PokemonDetail = {
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  stats: PokemonStat[];
  species: PokemonSpecies;
};

export type Pokemon = {
  url: string;
  name: string;
  id?: string;
};

export type PokedexEntriesState = {
  entries: Pokemon[];
  selectedEntry: Pokemon;
  pokemonDetails: PokemonDetail;
  pokemonFlavor: PokedexFlavorTextEntry;
};
