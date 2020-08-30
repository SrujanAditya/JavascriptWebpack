import "./pageNotFound.css";
import customErrorHtml from "./pageNotFound.html";

export function handleError() {
  const mainContainer = document.getElementById("main");
  mainContainer.innerHTML = customErrorHtml;
}
