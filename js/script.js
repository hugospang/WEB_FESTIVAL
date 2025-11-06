/* ===============================
   MONEGROS DESERT FESTIVAL 2026
   Interactividad principal
================================ */

/* ====== 1. MENÚ HAMBURGUESA ====== */
const burger = document.querySelector(".burger");
const burgerIcon = burger.querySelector("i");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-show"); // muestra/oculta el menú

  // Cambia el icono fa-bars ↔ fa-times
  if (menu.classList.contains("menu-show")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-times");
  } else {
    burgerIcon.classList.remove("fa-times");
    burgerIcon.classList.add("fa-bars");
  }
});

/* Cierra el menú al hacer clic en un enlace */
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("menu-show")) {
      menu.classList.remove("menu-show");
      burgerIcon.classList.remove("fa-times");
      burgerIcon.classList.add("fa-bars");
    }
  });
});

/* ====== 2. EFECTO DE SCROLL EN HEADER ====== */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 80) {
    header.style.background = "hsla(30, 65%, 39%, 0.90)";
    header.style.transition = "0.4s";
  } else {
    header.style.background = "rgba(221, 161, 94)";
  }
});

/* ====== 3. VALIDACIÓN SIMPLE DEL FORMULARIO ====== */
const form = document.getElementById("form-contacto");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!validarEmail(email)) {
      alert("Introduce un correo electrónico válido.");
      return;
    }

    alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.");
    form.reset();
  });
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
