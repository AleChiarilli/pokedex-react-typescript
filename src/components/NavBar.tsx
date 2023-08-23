import { useSelector, useDispatch } from 'react-redux';
import { searchPokemon } from '../pages/PokedexEntries/reducer/selectors';
import { AppDispatch } from '../redux/types';
import { SEARCH_POKEMON } from '../pages/PokedexEntries/reducer/pokedexEntriesSlice';

export const NavBar = () => {
  const searchPoke = useSelector(searchPokemon);

  const dispatch = useDispatch<AppDispatch>();

  const handleSearchPokemon = (text: string) => {
    dispatch(SEARCH_POKEMON(text));
  };

  return (
    <>
      <nav className="py-5 w-full">
        <ul className="w-full flex flex-row align-middle items-center">
          <li>
            <img
              src="https://img.icons8.com/officel/80/pokedex.png"
              className="h-10 mr-3"
              alt="AlexDex Logo"
            />
          </li>
          <li className="mr-10 font-semibold text-2xl">
            <a>
              <span className="text-red-500">Alex</span>
              <span>Dex</span>
            </a>
          </li>
          <li className="mr-5">Home</li>
          <li className="mr-5">About</li>
          <li className="flex-1">Repository</li>
          <li>
            <input
              onChange={e => handleSearchPokemon(e.currentTarget.value)}
              type="text"
              name="search"
              value={searchPoke}
              id="search"
              placeholder="🔍 Charizard"
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </li>
        </ul>
      </nav>
    </>
  );
};
