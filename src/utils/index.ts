export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function convertDigits(num: number, width: number) {
  return '#' + num.toString().padStart(width, '0');
}

export function replaceWhitespace(input?: string): string {
  if (!input) return '';

  const modifiedText = input.replace(/[\n\f]/g, ' ');
  return modifiedText;
}
