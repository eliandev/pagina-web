document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Borrar mensajes de error previos
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((msg) => (msg.style.display = "none"));

    let isValid = true;

    // Validar nombre
    if (!name.trim()) {
      document.getElementById("nameError").style.display = "block";
      isValid = false;
    }

    // Validar email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.trim() || !emailPattern.test(email)) {
      document.getElementById("emailError").style.display = "block";
      isValid = false;
    }

    // Validar teléfono
    const phonePattern = /^\d+$/;
    if (!phone.trim()) {
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").style.display = "block";
      isValid = false;
    } else if (phone.length < 8) {
      document.getElementById("phoneLengthError").style.display = "block";
      isValid = false;
    }

    // Validar mensaje
    if (!message.trim()) {
      document.getElementById("messageError").style.display = "block";
      isValid = false;
    }

    // Mostrar mensaje de éxito si todo es válido
    if (isValid) {
      const successMessage = document.getElementById("successMessage");
      successMessage.style.display = "block";

      // Limpiar los inputs
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";

      // Ocultar mensaje de éxito después de 3 segundos
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000); // 3000 ms = 3 segundos
    }
  });
