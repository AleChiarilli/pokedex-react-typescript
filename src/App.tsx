import './App.css'
import { useEffect, useState } from 'react'

type Pokemon = {
  url: string;
  name: string;
}

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([])

  useEffect(() => {
    callPokeApi()
  }, [])

  const callPokeApi = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const data: { results: Pokemon[] } = await response.json()
    setPokemons(data.results)
  }


  return (
    <>
      <h1>Pokemon</h1>
      <div className="card">

        {pokemons.map((item, i) => (
          <a href={item.url} key={i}>{item.name}</a>
        ))}

      </div>
    </>
  )
}

export default App
