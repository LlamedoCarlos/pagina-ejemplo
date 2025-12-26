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


// ========== VALIDACIÓN DEL FORMULARIO DE CONTACTO ==========
const formularioContacto = document.getElementById("formContacto");
const mensajeExito = document.getElementById("mensajeExito");

formularioContacto.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Obtener valores de los campos
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");
  
  // Resetear estilos de error
  [nombre, email, mensaje].forEach(campo => {
    campo.classList.remove("error");
  });
  
  let esValido = true;
  
  // Validar nombre (mínimo 2 caracteres)
  if (nombre.value.trim().length < 2) {
    nombre.classList.add("error");
    esValido = false;
  }
  
  // Validar email
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email.value.trim())) {
    email.classList.add("error");
    esValido = false;
  }
  
  // Validar mensaje (mínimo 10 caracteres)
  if (mensaje.value.trim().length < 10) {
    mensaje.classList.add("error");
    esValido = false;
  }
  
  // Si todo es válido, mostrar mensaje de éxito
  if (esValido) {
    mensajeExito.classList.add("mostrar");
    formularioContacto.reset();
    
    // Ocultar mensaje después de 5 segundos
    setTimeout(() => {
      mensajeExito.classList.remove("mostrar");
    }, 5000);
  }
});
