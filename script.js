// Projeto Artemis · Denúncia anônima com protocolo
// Gera um protocolo no formato ART-XXXXX (ex.: ART-7K2M9)

const LETRAS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function gerarProtocolo() {
  let codigo = "";
  for (let i = 0; i < 5; i++) {
    codigo += LETRAS[Math.floor(Math.random() * LETRAS.length)];
  }
  return "ART-" + codigo;
}

const form = document.getElementById("form-denuncia");
const resultado = document.getElementById("resultado");
const protocolo = document.getElementById("protocolo");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();
  protocolo.textContent = gerarProtocolo();
  form.classList.add("escondido");
  resultado.classList.remove("escondido");
});
