function getInitials(nomeCompleto) {
  return nomeCompleto
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase())
    .join("");
}

function createSlug(slug) {
  return slug.toLowerCase();
}

function average(avr) {
  if (!avr.length) {
    throw new Error("non puoi calcolare la media di un array vuoto");
  }
  avr.forEach((n) => {
    if (isNaN(n)) {
      throw new Error("utilizza solo numeri");
    }
  });
  const averageNumb = avr.reduce((acc, numb) => acc + numb, 0);
  return averageNumb / avr.length;
}
module.exports = { getInitials, createSlug, average };
