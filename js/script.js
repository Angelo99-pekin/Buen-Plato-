// JavaScript: validación sencilla del formulario de contacto
const formulario = document.getElementById("formularioContacto");

if (formulario) {
  formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const respuesta = document.getElementById("respuestaFormulario");

    if (nombre === "" || correo === "" || telefono === "" || mensaje === "") {
      respuesta.textContent = "Por favor, completa todos los campos.";
      respuesta.style.color = "red";
      return;
    }

    const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoCorreo.test(correo)) {
      respuesta.textContent = "Escribe un correo electrónico válido.";
      respuesta.style.color = "red";
      return;
    }

    if (!/^\d{7,15}$/.test(telefono)) {
      respuesta.textContent = "El teléfono debe contener entre 7 y 15 números.";
      respuesta.style.color = "red";
      return;
    }

    respuesta.textContent = "¡Gracias! Tu formulario fue validado correctamente.";
    respuesta.style.color = "green";
    formulario.reset();
  });
}
