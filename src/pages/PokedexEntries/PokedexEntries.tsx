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
      <div className="flex flex-row">
        <ul className="grid gap-4 grid-cols-3 grid-rows-3">
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
                className="hover:cursor-pointer p-5 flex flex-col items-center hover:bg-slate-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <Link to={pokemon.name}>
                  <p className="mb-2 text-m font-bold tracking-tight text-gray-900">
                    {capitalizeFirstLetter(pokemon.name)}
                  </p>
                  <p>{convertDigits(index + 1, 3)}</p>
                </Link>
              </li>
            ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
};
