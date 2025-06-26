// Ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function AtivarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(AtivarLink);
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
//Ativar Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function EventoPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativo");
  const ativo = resposta.classList.contains("ativo");
  console.log(ativo);
  pergunta.setAttribute("aria-expanded", ativo);
}
function AtivarPergunta(pergunta) {
  pergunta.addEventListener("click", EventoPergunta);
}
perguntas.forEach(AtivarPergunta);
// Galeria de Bicicletas

const ImgBicicletas = document.querySelectorAll(".bicicleta-img img");
const Containerbicicletas = document.querySelector(".bicicleta-img");
function FuncaoBicicleta(event) {
  const elemento = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    Containerbicicletas.prepend(elemento);
  }
}
function ClickBicicleta(bicicleta) {
  bicicleta.addEventListener("click", FuncaoBicicleta);
}
ImgBicicletas.forEach(ClickBicicleta);
// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
