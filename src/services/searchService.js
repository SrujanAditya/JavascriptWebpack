import { getBooksData } from './fetchDataService';
import { clearAndDisplayCards } from '../cardContainer/cardContainer';

export function searchByName(searchString) {
    let result = getBooksData().filter((book) =>
        book.name.toLowerCase().includes(searchString.toLowerCase())
    );
    clearAndDisplayCards(result);
}