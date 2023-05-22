function validarRut(rut) {
  var re = /^[0-9]+-[0-9kK]{1}$/;
  return re.test(rut);
}

function validarNombreApellido(nombre) {
  var re = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  return re.test(nombre);
}

function enviarFormulario() {
  var rut = document.getElementById('rut').value;
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var fechaNacimiento = document.getElementById('fecha-nacimiento').value;
  var genero = document.getElementById('genero').value;
  var domicilio = document.getElementById('domicilio').value;
  var correo = document.getElementById('correo').value;
  var usuario = document.getElementById('usuario').value;
  var contraseña = document.getElementById('contraseña').value;
  var comentarios = document.getElementById('comentarios').value;

  var resultado = document.getElementById('resultado');
  var error = false;

  resultado.innerHTML = '';

  if (!validarRut(rut)) {
      resultado.innerHTML += "<p class='error-message'>Ingrese un RUT válido.</p>";
      error = true;
  }

  if (!validarNombreApellido(nombre)) {
      resultado.innerHTML += "<p class='error-message'>Ingrese un nombre válido.</p>";
      error = true;
  }
  

  if (!validarNombreApellido(apellido)) {
      resultado.innerHTML += "<p class='error-message'>Ingrese un apellido válido.</p>";
      error = true;
  }

  // Aquí puedes agregar más validaciones según tus necesidades

  if (error) {
      return false;
  }

  resultado.innerHTML = "<p><strong>RUT:</strong> " + rut +
      "<br><strong>Nombre:</strong> " + nombre +
      "<br><strong>Apellido:</strong> " + apellido +
      "<br><strong>Fecha de nacimiento:</strong> " + fechaNacimiento +
      "<br><strong>Género:</strong> " + genero +
      "<br><strong>Domicilio:</strong> " + domicilio +
      "<br><strong>Correo:</strong> " + correo +
      "<br><strong>Usuario:</strong> " + usuario +
      "<br><strong>Contraseña:</strong> " + contraseña +
      "<br><strong>Comentarios:</strong> " + comentarios + "</p>";

  return false;
}