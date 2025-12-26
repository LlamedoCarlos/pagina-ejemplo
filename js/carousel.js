/* ========================================
   CARRUSEL DE IMÁGENES
   ======================================== */

// Selección de elementos del DOM
const imagenesCarrusel = document.querySelectorAll(".imagen-carrusel");
const botonAnterior = document.querySelector(".boton-carrusel.anterior");
const botonSiguiente = document.querySelector(".boton-carrusel.siguiente");
const puntosIndicadores = document.querySelectorAll(".punto");

// Variable para rastrear la diapositiva actual
let diapositivaActual = 0;

/**
 * Función para mostrar una diapositiva específica
 * @param {number} n - Índice de la diapositiva a mostrar
 */
function mostrarDiapositiva(n) {
  // Remover la clase "activa" de todas las imágenes y puntos
  imagenesCarrusel.forEach((img) => img.classList.remove("activa"));
  puntosIndicadores.forEach((punto) => punto.classList.remove("activo"));

  // Control de límites del carrusel (navegación circular)
  if (n >= imagenesCarrusel.length) {
    diapositivaActual = 0; // Volver al inicio
  } else if (n < 0) {
    diapositivaActual = imagenesCarrusel.length - 1; // Ir al final
  } else {
    diapositivaActual = n;
  }

  // Agregar la clase "activa" a la imagen y punto actuales
  imagenesCarrusel[diapositivaActual].classList.add("activa");
  puntosIndicadores[diapositivaActual].classList.add("activo");
}

// Evento click para el botón siguiente
botonSiguiente.addEventListener("click", () => {
  mostrarDiapositiva(diapositivaActual + 1);
});

// Evento click para el botón anterior
botonAnterior.addEventListener("click", () => {
  mostrarDiapositiva(diapositivaActual - 1);
});

// Evento click para cada punto indicador
puntosIndicadores.forEach((punto, indice) => {
  punto.addEventListener("click", () => {
    mostrarDiapositiva(indice);
  });
});
