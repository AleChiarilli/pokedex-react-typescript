import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { PokedexEntries } from './pages/PokedexEntries/PokedexEntries';
import { PokedexEntry } from './pages/PokedexEntries/components/PokedexEntry';

export const router = () => {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<PokedexEntries />}
        loader={() =>
          fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
        }
      >
        <Route path=":pokemonName" element={<PokedexEntry />} />
      </Route>,
    ),
  );
};
