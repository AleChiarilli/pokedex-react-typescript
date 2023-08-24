import { FC } from 'react';

export const StatProgressBar: FC<{ value: number }> = ({ value }) => {
  const convertedValue = (valueStat: number) =>
    Math.round((valueStat / 250) * 100);
  const width = convertedValue(value);
  return (
    <div className="mb-5 h-1 bg-gray-200">
      <div className={`h-1 bg-purple-500`} style={{ width: `${width}%` }}></div>
    </div>
  );
};
