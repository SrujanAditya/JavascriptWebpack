export function DOMStringParser(string) {
  const parser = new DOMParser();
  return parser.parseFromString(string, 'text/html');
}
