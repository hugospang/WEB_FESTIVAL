/* ===== 1. MENÚ BURGER PARA MÓVIL ===== */
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-show"); // Activa o desactiva el menú
  burger.classList.toggle("active"); // Cambia el icono si quieres animarlo
});

/* ===== 2. CERRAR MENÚ AL HACER CLIC EN UN ENLACE ===== */
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("menu-show")) {
      menu.classList.remove("menu-show");
      burger.classList.remove("active");
    }
  });
});

/* ===== 3. EFECTO EN EL HEADER AL HACER SCROLL ===== */
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 80) {
    header.style.background = "hsla(30, 65%, 39%, 0.90)";
    header.style.transition = "0.4s";
  } else {
    header.style.background = "rgba(221,161,94)";
  }
});

/* ===== 4. VALIDACIÓN SIMPLE DEL FORMULARIO ===== */
const form = document.getElementById("form-contacto");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita el envío real (no hay backend)

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

// Función auxiliar para validar el formato de email
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
