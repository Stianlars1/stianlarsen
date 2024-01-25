export function darkenColor(hexColor: string, percent: number): string {
  // Convert hex to RGB first
  let r = parseInt(hexColor.slice(1, 3), 16);
  let g = parseInt(hexColor.slice(3, 5), 16);
  let b = parseInt(hexColor.slice(5, 7), 16);

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;

  // Calculate lightness
  const lightness = (1 - percent / 100) * ((2 * l - s) / 2);

  // Return HSL color
  return `hsl(${h * 60}, ${
    s ? (s / (1 - Math.abs(2 * l - s - 1))) * 100 : 0
  }%, ${lightness * 100}%)`;
}
