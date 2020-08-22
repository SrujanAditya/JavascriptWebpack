import './cardContainer.css';
import cardContainer from './cardContainer.html';
import { generateCard } from './../card/card';

export function displayCardContainer() {
    document.body.innerHTML += cardContainer;
}

export function displayCards(books) {
    let mainContainer = document.getElementById("main");
    books.forEach(book => {
        mainContainer.appendChild(generateCard(book));
    });
}

export function clearAndDisplayCards(books){
    let mainContainer = document.getElementById("main");
    mainContainer.innerHTML='';
    displayCards(books);
}