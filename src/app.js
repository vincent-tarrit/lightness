import { hexToHsl } from "./utils.js";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const hex = event.target.querySelector("input").value;
  const hsl = hexToHsl(hex);
  console.log(hsl);
});
