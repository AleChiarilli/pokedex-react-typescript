import { FC } from 'react';
const colorsByType = {
  grass: 'bg-green-600',
  poison: 'bg-purple-600',
  fire: 'bg-red-600',
  flying: 'bg-orange-100',
  water: 'bg-sky-400',
  bug: 'bg-lime-700',
  normal: 'bg-neutral-400',
  fairy: 'bg-pink-300',
  ground: 'bg-yellow-900',
  fighting: 'bg-orange-600',
  psychic: 'bg-pink-800',
  rock: 'bg-amber-900',
  steel: 'bg-teal-700',
  electric: 'bg-yellow-300',
  ghost: 'bg-purple-800',
  dragon: 'bg-purple-500',
};

export type PokemonType = keyof typeof colorsByType;

export const BarType: FC<{ pokemonType: PokemonType }> = ({ pokemonType }) => {
  const barColor = colorsByType[pokemonType];

  return (
    <>
      <div className={`min-w-full h-3 ${barColor} rounded-t-lg`}></div>
    </>
  );
};
