import './App.css';
import { useEffect, useState } from 'react';
import { PokedexEntry } from './components/PokedexEntry';
import { capitalizeFirstLetter, convertDigits } from './utils';

export type Pokemon = {
  url: string;
  name: string;
  id?: string;
};

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>({
    url: '',
    name: '',
  });

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
    setPokemons(data.results);
  };

  useEffect(() => {
    callPokeApi().catch(console.error);
  }, []);

  const handleSelectedPokemon = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon); // Cambiar el estado de false a true
  };

  return (
    <>
      <h1>AlexDex</h1>
      {selectedPokemon.id && (
        <section>
          <PokedexEntry pokemon={selectedPokemon} />
        </section>
      )}
      <ul className="grid gap-4 grid-cols-3 grid-rows-3">
        {pokemons.map((pokemon, index) => (
          <li
            key={pokemon.name}
            onClick={() =>
              handleSelectedPokemon({ ...pokemon, id: `${index + 1}` })
            }
            className="hover:cursor-pointer p-5 flex flex-col items-center hover:bg-slate-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {capitalizeFirstLetter(pokemon.name)}
            </p>
            <p>{convertDigits(index + 1, 3)}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
