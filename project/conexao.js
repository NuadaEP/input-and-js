const dados = retornaDados();

dados.forEach(function (dado) {
  renderLi(dado.nome);
  renderLi(dado.idade);
  renderLi(dado.sexo);

  const hr = document.createElement("hr");
  document.querySelector("#lista").appendChild(hr);
});
