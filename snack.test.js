const { getInitials } = require("./snack.js");

// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
  expect(getInitials("Mario Rossi")).toBe("MR");
  expect(getInitials("mario rossi")).toBe("MR");
  expect(getInitials("Giovanna Arco")).toBe("GA");
  expect(getInitials("Giovanna   Arco")).toBe("GA");

});
