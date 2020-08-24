export function DOMStringParser(string) {
  let parser = new DOMParser();
  return parser.parseFromString(string, 'text/html');
}
