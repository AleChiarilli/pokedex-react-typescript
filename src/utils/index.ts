export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertDigits(num: number, width: number) {
  return '#' + num.toString().padStart(width, '0');
}
