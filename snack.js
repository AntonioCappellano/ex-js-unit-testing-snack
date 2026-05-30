function getInitials(nomeCompleto) {
  return nomeCompleto
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase())
    .join("");
}
module.exports = { getInitials };
