import { FC } from 'react';
import { NavBar } from '../../components/NavBar';
import { capitalizeFirstLetter, convertDigits } from '../../utils';
import { Pokemon } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSelectedPokemonDetails } from './reducer/pokedexEntriesSlice';
import { searchPokemon } from './reducer/selectors';
import { AppDispatch } from '../../redux/types';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

export const PokedexEntries: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { results: pokemons } = useLoaderData() as { results: Pokemon[] };

  const searchByText = useSelector(searchPokemon);

  const handleSelectedPokemon = (pokemon: Pokemon) => {
    dispatch(fetchSelectedPokemonDetails(pokemon));
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-row justify-between">
        <ul className="flex flex-col gap-3">
          {pokemons
            .filter(pokemon =>
              pokemon.name.toLowerCase().includes(searchByText.toLowerCase()),
            )
            .map((pokemon, index) => (
              <li
                key={pokemon.name}
                onClick={() =>
                  handleSelectedPokemon({ ...pokemon, id: `${index + 1}` })
                }
                className="hover:cursor-pointer p-2 flex flex-row w-56 items-center hover:bg-slate-50 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Link to={pokemon.name} className="flex flex-row w-full">
                  <p>{convertDigits(index + 1, 3)}</p>
                  <p className="ml-2 mb-2 text-m font-bold tracking-tight text-gray-900">
                    {capitalizeFirstLetter(pokemon.name)}
                  </p>
                </Link>
              </li>
            ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
};
