import './App.css';
import { useEffect, useState } from 'react';

type Pokemon = {
  url: string;
  name: string;
};

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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

  return (
    <>
      <h1 className="underline">Pokemon</h1>
      <div className="card">
        {pokemons.map((item, i) => (
          <a href={item.url} key={i}>
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
}

export default App;
