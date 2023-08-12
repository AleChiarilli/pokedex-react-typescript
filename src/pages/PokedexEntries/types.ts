export type Pokemon = {
  url: string;
  name: string;
  id?: string;
};

export type PokedexEntriesState = {
  entries: Pokemon[];
  selectedEntry: Pokemon;
};
