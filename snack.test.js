const { getInitials, createSlug, average } = require("./snack.js");

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Mario Rossi")).toBe("MR");
  expect(getInitials("mario rossi")).toBe("MR");
  expect(getInitials("Giovanna Arco")).toBe("GA");
  expect(getInitials("Giovanna   Arco")).toBe("GA");
});

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase", () => {
  expect(createSlug("La Mia Bicicletta")).toBe("la mia bicicletta");
});

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri", () => {
  expect(average([2, 4, 6])).toBe(4);
  expect(() => average([])).toThrow();
  expect(() => average([2, "numero"])).toThrow();
});
