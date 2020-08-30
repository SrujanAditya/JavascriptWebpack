import {getBooksData} from "./dataService";
import {displayCards} from "../cardContainer/cardContainer";

export function searchByName(searchString) {
  const result = getBooksData().filter((book) =>
    book.name.toLowerCase().includes(searchString.toLowerCase()),
  );
  displayCards(result);
}
