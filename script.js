// FUNÇÃO PARA ABRIR GALERIA
function abrirGaleria() {
  const inicio = document.getElementById("inicio");
  const galeria = document.getElementById("galeria");
  const musica = document.getElementById("musica");

  // Remove a tela inicial
  inicio.classList.remove("ativa");

  // Adiciona a galeria após animação
  setTimeout(() => {
    galeria.classList.add("ativa");
    document.body.style.overflow = "auto"; // habilita scroll na galeria
    musica.play(); // inicia música ao entrar
  }, 400);
}

// FUNÇÃO PARA VOLTAR À TELA INICIAL
function voltar() {
  const inicio = document.getElementById("inicio");
  const galeria = document.getElementById("galeria");
  const musica = document.getElementById("musica");

  // Remove a galeria
  galeria.classList.remove("ativa");

  // Adiciona a tela inicial após animação
  setTimeout(() => {
    inicio.classList.add("ativa");
    document.body.style.overflow = "hidden"; // desabilita scroll
    musica.pause();        // pausa música
    musica.currentTime = 0; // opcional: volta pro início
  }, 400);
}

// PARA A MÚSICA AO FECHAR ABA OU NAVEGADOR
window.addEventListener("beforeunload", () => {
  const musica = document.getElementById("musica");
  if (musica) {
    musica.pause();
    musica.currentTime = 0;
  }
});