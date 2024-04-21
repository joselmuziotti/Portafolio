document.getElementById('formularios').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById('name').value.trim();
    var mensajeError = document.getElementById('mensaje-error');
    mensajeError.textContent = '';
  
    if (nombre === '') {
      mensajeError.textContent = '* El campo nombre no puede estar vacío';
    } else if (nombre.length > 50) {
      mensajeError.textContent = '* El nombre no debe tener más de 50 caracteres';
    } else {
      alert('¡El formulario se envió correctamente!');
    }
  });

  document.getElementById('formularios').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value.trim();
  
    var mensajeError = document.getElementById('mensaje-error-email');
    mensajeError.textContent = '';
  
    var emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email === '') {
      mensajeError.textContent = '* El campo email no puede estar vacío';
    } else if (!emailRegExp.test(email)) {
      mensajeError.textContent = '* Formato de correo electrónico inválido';
    } else {
      alert('¡El formulario se envió correctamente!');
    }
  });

  document.getElementById('formularios').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var asunto = document.getElementById('asunto').value.trim();
    var mensajeError = document.getElementById('mensaje-error-asunto');
    mensajeError.textContent = '';
  
    if (asunto === '') {
      mensajeError.textContent = '* El campo asunto no puede estar vacío';
    } else if (asunto.length > 50) {
      mensajeError.textContent = '* El asunto no debe tener más de 50 caracteres';
    } else {
      alert('¡El formulario se envió correctamente!');
    }
  });

  document.getElementById('formularios').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var mensaje = document.getElementById('mensaje').value.trim();
    var mensajeError = document.getElementById('mensaje-error-textarea');
    mensajeError.textContent = '';
  
    if (mensaje === '') {
      mensajeError.textContent = '* El cuadro mensaje no puede estar vacío';
    } else if (mensaje.length > 300) {
      mensajeError.textContent = '* El mensaje no debe tener más de 300 caracteres';
    } else {
      alert('¡El formulario se envió correctamente!');
    }
  });
  