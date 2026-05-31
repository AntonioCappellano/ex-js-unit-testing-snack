function getInitials(nomeCompleto) {
  return nomeCompleto
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase())
    .join("");
}

function createSlug(slug) {
  return slug.toLowerCase()
}
module.exports = { getInitials, createSlug };
