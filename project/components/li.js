function renderLi(texto) {
  const li = document.createElement("li");

  document.querySelector("#lista").appendChild(li).textContent = texto;
}
