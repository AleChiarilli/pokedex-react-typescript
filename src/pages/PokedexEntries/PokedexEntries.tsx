import { FC, useMemo } from 'react';
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
  const { results } = useLoaderData() as { results: Pokemon[] };
  const searchByText = useSelector(searchPokemon);

  const pokemons = useMemo(
    () =>
      results.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchByText.toLowerCase()),
      ),
    [searchByText, results],
  );

  const getPokemonId = (pokemonName: string) =>
    results.findIndex(pokemon => pokemon.name === pokemonName);

  const handleSelectedPokemon = (pokemon: Pokemon) => {
    dispatch(fetchSelectedPokemonDetails(pokemon));
  };

  const getPokemonDexNumber = (pokemonName: string) =>
    convertDigits(getPokemonId(pokemonName) + 1, 3);

  return (
    <>
      <NavBar />
      <div className="flex flex-row justify-between">
        <ul className="flex flex-col gap-3">
          {pokemons.map(pokemon => (
            <li
              key={pokemon.name}
              onClick={() =>
                handleSelectedPokemon({
                  ...pokemon,
                  id: `${getPokemonId(pokemon.name) + 1}`,
                })
              }
              className="hover:cursor-pointer p-2 flex flex-row md:w-56  items-center hover:bg-slate-90 bg-white border border-gray-200 rounded-lg shadow opacity-90 hover:opacity-100"
            >
              <Link to={pokemon.name} className="flex flex-row w-full">
                <p>{getPokemonDexNumber(pokemon.name)}</p>
                <p className="md:ml-2 ml-1 md:mb-2 text-m font-medium md:font-bold tracking-tight ">
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
