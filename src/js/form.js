document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Borrar mensajes de error previos
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => (msg.style.display = "none"));

    let isValid = true;

    // Validar nombre (obligatorio)
    if (!name.trim()) {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    // Validar email (obligatorio y formato válido)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim() || !emailPattern.test(email)) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Validar teléfono (solo números y longitud mínima)
    const phonePattern = /^\d+$/;
    if (!phone.trim()) {
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    } else if (phone.length < 10) {
      document.getElementById("phoneLengthError").style.display = "block";
      isValid = false;
    }

    // Validar mensaje (obligatorio)
    if (!message.trim()) {
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }

    // Si todo es válido, enviar el formulario (por ejemplo, loguear los datos)
    if (isValid) {
      alert("Formulario enviado con éxito!");
      // Aquí puedes agregar el código para enviar el formulario (por ejemplo, con fetch o axios)
      console.log("Nombre:", name);
      console.log("Email:", email);
      console.log("Teléfono:", phone);
      console.log("Mensaje:", message);
    }
  });
