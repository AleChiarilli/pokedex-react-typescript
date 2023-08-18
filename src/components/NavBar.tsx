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
              src="https://w7.pngwing.com/pngs/363/696/png-transparent-pokemon-go-computer-icons-psyduck-pokemon-go.png"
              className="h-10 mr-3"
              alt="AlexDex Logo"
            />
          </li>
          <li>
            <a>
              <span className="text-red-500 font-medium">Alex</span>
              <span>Dex</span>
            </a>
          </li>
          <li>Home</li>
          <li>About</li>
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
