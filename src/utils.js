import color from "color-convert";

function hexToHsl(hex) {
  const rgb = color.hex.rgb(hex);
  const hsl = color.rgb.hsl(rgb);
  return hsl;
}

export { hexToHsl };
