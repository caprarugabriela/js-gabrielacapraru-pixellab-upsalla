const calculateRectangleArea = (width, length) => {
  const area = width * length;

  return area;
};

console.warn(
  `Calculeaza suprafata de tapet necesara pentru o camera de 6 pe 4 m cu tavan inalt de 2.5m, stiind ca exista o usa de 2.2 pe 1.5 si
  o suprafata de ferestre de 2 pe 1.5. “Suprafata de tapet necesara este: xxx metri patrati.”`,
);
const longWall1Surface = calculateRectangleArea(6, 2.5);
const shortWall1Surface = calculateRectangleArea(4, 2.5);
const door1Surface = calculateRectangleArea(2.2, 1.5);
const window1Surface = calculateRectangleArea(2, 1.5);
const required1WallpaperSurface =
  longWall1Surface * 2 + shortWall1Surface * 2 - door1Surface - window1Surface;

console.log(
  `Suprafata de tapet este: ${required1WallpaperSurface} metri patrati.`,
);

console.warn(
  `Creaza o functie wrapper numita calculateSquareArea() pentru calculateRectangleArea(), care sa primeasca ca parametru latura unui patrat si sa calculeze suprafata acestuia.
  O functie wrapper este o functie care “imbraca” o functie existenta pentru a-i aduce imbunatatiri, extra cod sau pentru a-i limita in mod intentionat capacitatile.`,
);
const calculateSquareArea = (width) => {
  const area = calculateRectangleArea(width, width);

  return area;
};
