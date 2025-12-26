/* ========================================
   NAVEGACIÓN Y FUNCIONALIDADES INTERACTIVAS
   ======================================== */

// ========== MENÚ HAMBURGUESA ==========
const botonHamburguesa = document.querySelector(".boton-hamburguesa");
const menuNavegacion = document.querySelector(".menu-navegacion");
const enlacesMenu = document.querySelectorAll(".menu-navegacion a");

// Toggle del menú hamburguesa
botonHamburguesa.addEventListener("click", () => {
  menuNavegacion.classList.toggle("activo");
  
  // Cambiar icono del botón
  const icono = botonHamburguesa.querySelector("i");
  if (menuNavegacion.classList.contains("activo")) {
    icono.classList.remove("bx-menu");
    icono.classList.add("bx-x");
  } else {
    icono.classList.remove("bx-x");
    icono.classList.add("bx-menu");
  }
});

// Cerrar menú al hacer click en un enlace
enlacesMenu.forEach(enlace => {
  enlace.addEventListener("click", () => {
    menuNavegacion.classList.remove("activo");
    const icono = botonHamburguesa.querySelector("i");
    icono.classList.remove("bx-x");
    icono.classList.add("bx-menu");
  });
});

// Cerrar menú al hacer click fuera de él
document.addEventListener("click", (e) => {
  if (!botonHamburguesa.contains(e.target) && !menuNavegacion.contains(e.target)) {
    menuNavegacion.classList.remove("activo");
    const icono = botonHamburguesa.querySelector("i");
    icono.classList.remove("bx-x");
    icono.classList.add("bx-menu");
  }
});


// ========== BOTÓN VOLVER ARRIBA ==========
const botonVolverArriba = document.getElementById("volverArriba");

// Mostrar/ocultar botón según el scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botonVolverArriba.classList.add("visible");
  } else {
    botonVolverArriba.classList.remove("visible");
  }
});

// Volver arriba al hacer click
botonVolverArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ========== NAVBAR ACTIVA AL HACER SCROLL ==========
const barraNavegacion = document.querySelector(".barra-navegacion");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    barraNavegacion.classList.add("activa");
  } else {
    barraNavegacion.classList.remove("activa");
  }
});


// ========== RESALTAR ENLACE ACTIVO SEGÚN SECCIÓN ==========
const secciones = document.querySelectorAll("section, header");
const enlacesNavegacion = document.querySelectorAll(".menu-navegacion a");

window.addEventListener("scroll", () => {
  let actual = "";
  
  secciones.forEach(seccion => {
    const topSeccion = seccion.offsetTop;
    const alturaSeccion = seccion.clientHeight;
    
    if (window.scrollY >= (topSeccion - 150)) {
      actual = seccion.getAttribute("id");
    }
  });
  
  enlacesNavegacion.forEach(enlace => {
    enlace.classList.remove("activo");
    if (enlace.getAttribute("href") === `#${actual}`) {
      enlace.classList.add("activo");
    }
  });
});
