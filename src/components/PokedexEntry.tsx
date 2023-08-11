import { FC, useEffect, useState } from 'react';
import { Pokemon } from '../App';
import {
  convertDigits,
  capitalizeFirstLetter,
  replaceWhitespace,
} from '../utils';

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
      <div className="p-2 items-center sticky top-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
        {pokemonDetails && (
          <div className="flex flex-col p-2">
            {pokemon.id && (
              <div className="flex flex-row">
                <img
                  src={pokemonDetails.sprites.front_default}
                  className="w-[150px]"
                ></img>
                <div className="flex-col">
                  <p>{convertDigits(parseInt(pokemon.id), 3)}</p>
                  <p> {capitalizeFirstLetter(pokemon.name)}</p>
                  <div className="flex">
                    <p className="pr-2">{pokemonDetails.types[0].type.name}</p>
                    {pokemonDetails.types[1] && (
                      <p>{pokemonDetails.types[1].type.name}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">X</div>
              </div>
            )}
            <div className="flex flex-col pt-5">
              {replaceWhitespace(
                pokemonFlavor?.flavor_text_entries[0].flavor_text,
              )}
            </div>
            <h3 className="pt-5 pb-1">Statistics</h3>
            <p>
              {pokemonDetails.stats[0].stat.name.toUpperCase()} :{' '}
              {pokemonDetails.stats[0].base_stat}
            </p>
            <p>
              {pokemonDetails.stats[1].stat.name.charAt(0).toUpperCase() +
                pokemonDetails.stats[1].stat.name.slice(1)}{' '}
              : {pokemonDetails.stats[1].base_stat}
            </p>
            <p>
              {pokemonDetails.stats[2].stat.name.charAt(0).toUpperCase() +
                pokemonDetails.stats[2].stat.name.slice(1)}{' '}
              : {pokemonDetails.stats[2].base_stat}
            </p>
            <p>
              {pokemonDetails.stats[3].stat.name.charAt(0).toUpperCase() +
                pokemonDetails.stats[3].stat.name.slice(1)}{' '}
              : {pokemonDetails.stats[3].base_stat}
            </p>
            <p>
              {pokemonDetails.stats[4].stat.name.charAt(0).toUpperCase() +
                pokemonDetails.stats[4].stat.name.slice(1)}{' '}
              : {pokemonDetails.stats[4].base_stat}
            </p>
            <p>
              {pokemonDetails.stats[5].stat.name.charAt(0).toUpperCase() +
                pokemonDetails.stats[5].stat.name.slice(1)}{' '}
              : {pokemonDetails.stats[5].base_stat}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
