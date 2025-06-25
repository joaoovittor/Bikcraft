// Ativar links do menu
//Ativar itens do orcamento
const parametros = new URLSearchParams(location.search);

function AtivarParametro(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
  console.log(elemento);
}

parametros.forEach(AtivarParametro);
