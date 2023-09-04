import { FC } from 'react';
import {
  convertDigits,
  capitalizeFirstLetter,
  replaceWhitespace,
} from '../../../utils';
import { useSelector } from 'react-redux';
import {
  getPokedexFlavor,
  getPokemonDetails,
  selectedPokedexEntry,
} from '../reducer/selectors';
import { BarType, PokemonType } from './PokeBarType';
import { StatProgressBar } from './StatProgressBar';

export const PokedexEntry: FC = () => {
  const pokemon = useSelector(selectedPokedexEntry);
  const pokemonDetails = useSelector(getPokemonDetails);
  const pokemonFlavor = useSelector(getPokedexFlavor);

  if (!pokemon.id || !pokemonDetails.stats.length) return <></>;

  return (
    <>
      <section className="pl-3">
        <div className="items-center sticky top-0 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div>
            <BarType
              pokemonType={pokemonDetails.types[0].type.name as PokemonType}
            />
          </div>
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
                    <p className="font-semibold">
                      {' '}
                      {capitalizeFirstLetter(pokemon.name)}
                    </p>
                    <div className="flex">
                      <p className="pr-2">
                        {pokemonDetails.types[0]?.type.name}
                      </p>
                      {pokemonDetails.types[1] && (
                        <p>{pokemonDetails.types[1].type.name}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col pt-5">
                {replaceWhitespace(
                  pokemonFlavor?.flavor_text_entries[0]?.flavor_text,
                )}
              </div>
              <h3 className="pt-5 pb-1">Statistics</h3>
              <p>
                {pokemonDetails.stats[0]?.stat.name.toUpperCase()}:{' '}
                {pokemonDetails.stats[0]?.base_stat}
              </p>
              <StatProgressBar
                pokemonType={pokemonDetails.types[0].type.name as PokemonType}
                value={pokemonDetails.stats[0]?.base_stat}
              />
              <p>
                {pokemonDetails.stats[1]?.stat.name.charAt(0).toUpperCase() +
                  pokemonDetails.stats[1]?.stat.name.slice(1)}{' '}
                : {pokemonDetails.stats[1]?.base_stat}
              </p>
              <StatProgressBar
                pokemonType={pokemonDetails.types[0].type.name as PokemonType}
                value={pokemonDetails.stats[1]?.base_stat}
              />
              <p>
                {pokemonDetails.stats[2]?.stat.name.charAt(0).toUpperCase() +
                  pokemonDetails.stats[2]?.stat.name.slice(1)}{' '}
                : {pokemonDetails.stats[2]?.base_stat}
              </p>
              <StatProgressBar
                pokemonType={pokemonDetails.types[0].type.name as PokemonType}
                value={pokemonDetails.stats[2]?.base_stat}
              />
              <p>
                {pokemonDetails.stats[3]?.stat.name.charAt(0).toUpperCase() +
                  pokemonDetails.stats[3]?.stat.name.slice(1)}{' '}
                : {pokemonDetails.stats[3]?.base_stat}
              </p>
              <StatProgressBar
                pokemonType={pokemonDetails.types[0].type.name as PokemonType}
                value={pokemonDetails.stats[3]?.base_stat}
              />
              <p>
                {pokemonDetails.stats[4]?.stat.name.charAt(0).toUpperCase() +
                  pokemonDetails.stats[4]?.stat.name.slice(1)}{' '}
                : {pokemonDetails.stats[4]?.base_stat}
              </p>
              <StatProgressBar
                pokemonType={pokemonDetails.types[0].type.name as PokemonType}
                value={pokemonDetails.stats[4]?.base_stat}
              />
              <p>
                {pokemonDetails.stats[5]?.stat.name.charAt(0).toUpperCase() +
                  pokemonDetails.stats[5]?.stat.name.slice(1)}{' '}
                : {pokemonDetails.stats[5]?.base_stat}
              </p>
              <StatProgressBar
                pokemonType={pokemonDetails.types[0].type.name as PokemonType}
                value={pokemonDetails.stats[5]?.base_stat}
              />
            </div>
          )}
          <div>
            <h2>Weaknesses</h2>
            <p></p>
          </div>
        </div>
      </section>
    </>
  );
};
