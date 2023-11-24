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
      <nav className="pt-5 pb-3">
        <ul className="flex flex-col items-center md:flex-row md:justify-between ">
          <li>
            <img
              src="https://img.icons8.com/officel/80/pokedex.png"
              className="h-10 md:mr-3 font-semibold"
              alt="AlexDex Logo"
            />
          </li>
          <li className="md:mr-10 font-semibold text-2xl ">
            <a>
              <span className="text-red-500">Alex</span>
              <span>Dex</span>
            </a>
          </li>
          <a href="https://alexdex.vercel.app/">
            <li className="md:mr-5 font-semibold text-white">Home</li>
          </a>
          <a
            className="md:mr-5 font-semibold text-white"
            href="https://github.com/AleChiarilli/pokedex-react-typescript/blob/main/README.md"
          >
            <li>About</li>
          </a>
          <a
            className="flex-1 font-semibold text-white"
            href="https://github.com/AleChiarilli/pokedex-react-typescript/tree/main"
          >
            <li>Repository</li>
          </a>
                  </ul>
          <div className="pt-3 w-full">
            <input
              onChange={e => handleSearchPokemon(e.currentTarget.value)}
              type="text"
              name="search"
              value={searchPoke}
              id="search"
              placeholder="🔍 Charizard"
              className="pl-2 w-full border-2 border-gray-300 bg-white h-10 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

      </nav>
    </>
  );
};
