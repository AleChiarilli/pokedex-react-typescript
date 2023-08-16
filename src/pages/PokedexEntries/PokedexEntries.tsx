import { useEffect } from 'react';
import { NavBar } from '../../components/NavBar';
import { capitalizeFirstLetter, convertDigits } from '../../utils';
import { Pokemon } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { SAVE_POKEDEX_ENTRIES, SELECT_POKEMON } from './reducer/slice';
import { PokedexEntry } from './components/PokedexEntry';
import { getPokedexEntries } from './reducer/selectors';

import './PokedexEntries.css';

export function PokedexEntries() {
  const pokemons = useSelector(getPokedexEntries);
  const dispatch = useDispatch();

  const callPokeApi = async () => {
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
    dispatch(SAVE_POKEDEX_ENTRIES(data.results));
  };

  useEffect(() => {
    callPokeApi().catch(console.error);
  }, []);

  const handleSelectedPokemon = (pokemon: Pokemon) => {
    dispatch(SELECT_POKEMON(pokemon));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-row">
        <ul className="grid gap-4 grid-cols-3 grid-rows-3">
          {pokemons.map((pokemon, index) => (
            <li
              key={pokemon.name}
              onClick={() =>
                handleSelectedPokemon({ ...pokemon, id: `${index + 1}` })
              }
              className="hover:cursor-pointer p-5 flex flex-col items-center hover:bg-slate-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {capitalizeFirstLetter(pokemon.name)}
              </p>
              <p>{convertDigits(index + 1, 3)}</p>
            </li>
          ))}
        </ul>
        <PokedexEntry />
      </div>
    </>
  );
}
