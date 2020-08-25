const DOMStringParser = (function () {
  let parser;

  function createParser() {
      let object = new DOMParser();
      return object;
  }

  return {
      getParser: function () {
          if (!parser) {
            parser = createParser();
          }
          return parser;
      }
  };
})();

export function parseStringToHtml(string){
  return DOMStringParser.getParser().parseFromString(string,'text/html');
}