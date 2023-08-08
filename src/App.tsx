import './App.css';
import { useEffect, useState } from 'react';

type Pokemon = {
  url: string;
  name: string;
  types: string;
};

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function convertDigits(num: number, width: number) {
  return '#' + num.toString().padStart(width, '0');
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState('');

  const callPokeApi = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=150`,
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

  const handleSelectedPokemon = (pokemonId: number) => {
    setSelectedPokemon(pokemonId.toString()); // Cambiar el estado de false a true
  };

  return (
    <>
      <h1>Pokemon</h1>
      <p>{selectedPokemon}</p>
      {/* <div className="card">
        {pokemons.map((item, i) => (
          <a href={item.url} key={i}>{convertDigits(i + 1, 3)} {capitalizeFirstLetter(item.name)}</a> */}
      <ul className="grid gap-4 grid-cols-3 grid-rows-3">
        {pokemons.map((item, i) => (
          <li
            key={i}
            onClick={() => handleSelectedPokemon(i + 1)}
            className="hover:cursor-pointer flex flex-col items-center hover:bg-slate-50 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <section className="flex flex-col items-center p-5">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {capitalizeFirstLetter(item.name)}
              </h2>
              <p>{convertDigits(i + 1, 3)}</p>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
