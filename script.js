function abrirGaleria() {
  const inicio = document.getElementById("inicio");
  const galeria = document.getElementById("galeria");
  const musica = document.getElementById("musica");

  inicio.classList.remove("ativa");

  setTimeout(() => {
    galeria.classList.add("ativa");
    document.body.style.overflow = "auto"; // 🔥 libera scroll
  }, 300);

  musica.play();
}

function voltar() {
  const inicio = document.getElementById("inicio");
  const galeria = document.getElementById("galeria");

  galeria.classList.remove("ativa");

  setTimeout(() => {
    inicio.classList.add("ativa");
    document.body.style.overflow = "hidden"; // 🔥 trava de novo
  }, 300);
}