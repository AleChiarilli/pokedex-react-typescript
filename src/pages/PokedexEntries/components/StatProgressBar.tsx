import { FC } from 'react';
import { PokemonType } from './PokeBarType';

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

export const StatProgressBar: FC<{
  value: number;
  pokemonType: PokemonType;
}> = ({ value, pokemonType }) => {
  const barColor = colorsByType[pokemonType];

  const convertedValue = (valueStat: number) =>
    Math.round((valueStat / 250) * 100);
  const width = convertedValue(value);
  return (
    <div className="mb-5 h-1 bg-gray-200">
      <div className={`h-1 ${barColor}`} style={{ width: `${width}%` }}></div>
    </div>
  );
};
