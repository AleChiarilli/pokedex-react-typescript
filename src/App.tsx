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
      <h1>Pokemon</h1>
      {/* <div className="card">
        {pokemons.map((item, i) => (
          <a href={item.url} key={i}>{convertDigits(i + 1, 3)} {capitalizeFirstLetter(item.name)}</a> */}
      {pokemons.map((item, i) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {capitalizeFirstLetter(item.name)}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.url}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {convertDigits(i + 1, 3)}
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default App;
