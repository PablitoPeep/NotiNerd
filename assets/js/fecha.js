function mostrarFechaActualizable() {
    let fecha = new Date();
    document.getElementById('fecha').innerHTML = 'Hola bienvenido a nuestro sitio ' + fecha;
    let tiempo = setTimeout(function() {
        mostrarFechaActualizable()
    },1000);
}
// Selecciona el botón de cambio de tema
const btnCambiarTema = document.getElementById('cambiar-tema');

// Escucha el evento "click" en el botón
btnCambiarTema.addEventListener('click', () => {
  // Selecciona el elemento body y cambia la clase de Bootstrap
  $('body').toggleClass('bg-light text-dark bg-dark text-light');
});function mostrarFechaActualizable() {
    let fecha = new Date();
    document.getElementById('fecha').innerHTML = 'Hola bienvenido a nuestro sitio ' + fecha;
    let tiempo = setTimeout(function() {
        mostrarFechaActualizable()
    },1000);
}