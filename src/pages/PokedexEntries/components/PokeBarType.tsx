import { FC } from 'react';
import { colorsByType } from '../../../utils/constants';
export type PokemonType = keyof typeof colorsByType;

export const BarType: FC<{ pokemonType: PokemonType }> = ({ pokemonType }) => {
  const barColor = colorsByType[pokemonType];

  return (
    <>
      <div className={`min-w-full h-3 ${barColor} rounded-t-lg`}></div>
    </>
  );
};
