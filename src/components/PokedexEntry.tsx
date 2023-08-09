import { FC, useEffect, useState } from 'react';
import { Pokemon } from '../App';

type FlavorTextEntry = {
  flavor_text: string;
};

type PokedexFlavorTextEntry = {
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

type PokemonDetail = {
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
  stats: PokemonStat[];
  species: PokemonSpecies;
};

type Props = {
  pokemon: Pokemon;
};

export const PokedexEntry: FC<Props> = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetail | null>(
    null,
  );

  const [pokemonFlavor, setPokemonFlavor] =
    useState<PokedexFlavorTextEntry | null>(null);

  useEffect(() => {
    fetch(pokemon.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(setPokemonDetails)
      .catch(console.error);
  }, [pokemon]);

  useEffect(() => {
    if (pokemonDetails) {
      fetch(pokemonDetails.species.url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(setPokemonFlavor)
        .catch(console.error);
    }
  }, [pokemonDetails]);

  // pokemonDetails.species.url

  return (
    <>
      <div className="border-2 border-red-600 border-dashed rounded">
        {pokemon.id} {pokemon.name} {pokemon.url}
        {pokemonDetails && (
          <>
            <img src={pokemonDetails.sprites.front_default}></img>
            <div>{pokemonDetails.types[0].type.name}</div>
            {pokemonDetails.types[1] && (
              <div>{pokemonDetails.types[1].type.name}</div>
            )}
            <div>{pokemonFlavor?.flavor_text_entries[0].flavor_text}</div>
          </>
        )}
      </div>
    </>
  );
};
