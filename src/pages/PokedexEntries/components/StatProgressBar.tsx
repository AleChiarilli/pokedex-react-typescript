import { FC } from 'react';
import { PokemonType } from './PokeBarType';
import { colorsByType } from '../../../utils/constants';

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
