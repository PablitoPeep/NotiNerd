//Reloj
// Obtener la referencia al elemento que mostrará la hora actual
var currentTimeElement = document.getElementById("current-time");

// Función para actualizar la hora actual
function updateCurrentTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Formatear la hora en formato HH:MM:SS
  var formattedTime = hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" +
    seconds.toString().padStart(2, "0");

  // Mostrar la hora actual en el elemento correspondiente
  currentTimeElement.textContent = "Hora actual: " + formattedTime;
}

// Actualizar la hora actual cada segundo
setInterval(updateCurrentTime, 1000);

// Inicializar la hora actual al cargar la página
updateCurrentTime();