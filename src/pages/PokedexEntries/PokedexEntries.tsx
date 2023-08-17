import { useEffect } from 'react';
import { NavBar } from '../../components/NavBar';
import { capitalizeFirstLetter, convertDigits } from '../../utils';
import { Pokemon } from './types';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPokedexEntries,
  fetchSelectedPokemonDetails,
} from './reducer/pokedexEntriesSlice';
import { PokedexEntry } from './components/PokedexEntry';
import { getPokedexEntries } from './reducer/selectors';

import './PokedexEntries.css';
import { AppDispatch } from '../../redux/types';

export function PokedexEntries() {
  const dispatch = useDispatch<AppDispatch>();
  const pokemons = useSelector(getPokedexEntries);

  useEffect(() => {
    dispatch(fetchPokedexEntries());
  }, [dispatch]);

  const handleSelectedPokemon = (pokemon: Pokemon) => {
    dispatch(fetchSelectedPokemonDetails(pokemon));
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
