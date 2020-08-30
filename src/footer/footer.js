import footer from "./footer.html";
import "./footer.css";

export function displayFooter() {
  const footerDiv = document.createElement("footer");
  footerDiv.classList.add("footer");
  footerDiv.innerHTML = footer;
  document.body.appendChild(footerDiv);
}
