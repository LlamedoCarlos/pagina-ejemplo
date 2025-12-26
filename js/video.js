/* ========================================
   CONTROL DE VIDEO DE FONDO
   ======================================== */

// Selección de elementos del DOM
const botonPausar = document.querySelector(".boton-pausar");
const videoFondo = document.querySelector(".video-fondo");
const iconoBoton = document.querySelector(".bx");
const precargador = document.querySelector(".precargador");

// Evento click para pausar/reproducir el video
botonPausar.addEventListener("click", () => {
  // Si el botón tiene la clase "pausa", reproduce el video
  if (botonPausar.classList.contains("pausa")) {
    botonPausar.classList.remove("pausa");
    videoFondo.play();
    iconoBoton.classList.add("bx-pause");
    iconoBoton.classList.remove("bx-play");
  } else {
    // Si no tiene la clase "pausa", pausa el video
    botonPausar.classList.add("pausa");
    videoFondo.pause();
    iconoBoton.classList.remove("bx-pause");
    iconoBoton.classList.add("bx-play");
  }
});

// Ocultar el precargador cuando la página termine de cargar
window.addEventListener("load", () => {
  precargador.style.zIndex = "-999";
});