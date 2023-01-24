import { hexToHsl } from "./utils.js";

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const hex = event.target.querySelector("input").value;
  if (/^#[0-9A-F]{6}$/i.test(hex)) {
    const hsl = hexToHsl(hex);
    console.log(hsl);
  } else {
    console.log("Invalid hex code");
  }
});
