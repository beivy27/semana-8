const btnAlerta = document.getElementById("btnAlerta");
btnAlerta.addEventListener("click", () => {
  alert("¡Hola! Esta es una alerta personalizada hecha con JavaScript ✅");
});

const form = document.getElementById("formContacto");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const mensaje = document.getElementById("mensaje");
const msgExito = document.getElementById("msgExito");

function esCorreoValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function marcarError(input, ok) {
  if (ok) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreOk = nombre.value.trim().length >= 2;
  const correoOk = esCorreoValido(correo.value.trim());
  const mensajeOk = mensaje.value.trim().length >= 10;

  marcarError(nombre, nombreOk);
  marcarError(correo, correoOk);
  marcarError(mensaje, mensajeOk);

  if (nombreOk && correoOk && mensajeOk) {
    msgExito.classList.remove("d-none");
    form.reset();

    [nombre, correo, mensaje].forEach((i) => {
      i.classList.remove("is-valid", "is-invalid");
    });

    setTimeout(() => msgExito.classList.add("d-none"), 3000);
  } else {
    msgExito.classList.add("d-none");
  }
});
