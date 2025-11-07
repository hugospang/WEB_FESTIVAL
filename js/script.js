// MENÚ HAMBURGUESA
const burger = document.querySelector(".burger");
const burgerIcon = burger.querySelector("i");
const menu = document.querySelector(".menu");

// Abrir / cerrar menú
burger.addEventListener("click", () => {
  menu.classList.toggle("menu-show");

  const isOpen = menu.classList.contains("menu-show");

  // Cambiar icono
  burgerIcon.classList.toggle("fa-bars", !isOpen);
  burgerIcon.classList.toggle("fa-times", isOpen);

  // Bloquear/desbloquear scroll body
  document.body.style.overflow = isOpen ? "hidden" : "";
});

// Cerrar menú al hacer clic
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("menu-show")) {
      menu.classList.remove("menu-show");
      burgerIcon.classList.add("fa-bars");
      burgerIcon.classList.remove("fa-times");
      document.body.style.overflow = "";
    }
  });
});

// SCROLL HEADER
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 80) {
    header.style.background = "hsla(30, 65%, 39%, 0.9)";
    header.style.transition = "0.4s";
  } else {
    header.style.background = "rgba(221, 161, 94)";
  }
});

// FORMULARIO
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

// Función auxiliar validación
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// PÁGINA DE ENTRADAS
const cards = document.querySelectorAll(".compra-card");
const total = document.getElementById("precio-total");

let totalCompra = 0;

cards.forEach((card) => {
  const precio = parseInt(card.dataset.precio);
  const cantidadElem = card.querySelector(".cantidad");
  let cantidad = 0;

  card.querySelector(".btn-sumar").addEventListener("click", () => {
    cantidad++;
    cantidadElem.textContent = cantidad;
    actualizarTotal();
  });

  card.querySelector(".btn-restar").addEventListener("click", () => {
    if (cantidad > 0) {
      cantidad--;
      cantidadElem.textContent = cantidad;
      actualizarTotal();
    }
  });

  function actualizarTotal() {
    totalCompra = Array.from(cards).reduce((acc, c) => {
      const precioC = parseInt(c.dataset.precio);
      const cant = parseInt(c.querySelector(".cantidad").textContent);
      return acc + precioC * cant;
    }, 0);
    total.textContent = totalCompra + "€";
  }
});

// POPUP CONFIRMACIÓN DE COMPRA
document.addEventListener("DOMContentLoaded", () => {
  const btnConfirmar = document.getElementById("btn-confirmar");

  if (btnConfirmar) {
    btnConfirmar.addEventListener("click", (e) => {
      e.preventDefault();
      mostrarPopupCompra();
    });
  }

  function mostrarPopupCompra() {
    // Fondo oscuro
    const overlay = document.createElement("div");
    overlay.className = "popup-overlay";

    // Contenedor del popup
    const popup = document.createElement("div");
    popup.className = "popup-compra";
    popup.innerHTML = `
      <h2>¡Gracias por tu compra!</h2>
      <p>Nos vemos en el desierto 🌵</p>
      <button class="btn-cerrar-popup">Cerrar</button>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(popup);
    document.body.style.overflow = "hidden";

    // Cerrar al pulsar fuera o el botón
    overlay.addEventListener("click", cerrarPopup);
    popup
      .querySelector(".btn-cerrar-popup")
      .addEventListener("click", cerrarPopup);

    function cerrarPopup() {
      overlay.remove();
      popup.remove();
      document.body.style.overflow = "";
      window.location.href = "index.html";
    }
  }
});
