import { FC } from 'react';
import './App.css';

type Props = {
  pokemonId: string;
};

export const PokedexEntry: FC<Props> = ({ pokemonId }) => {
  return <>{pokemonId}</>;
};
