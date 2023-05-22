//MODO OSCURITO
document.addEventListener("DOMContentLoaded", function (event) {
  console.log(event);
  let darkmode = sessionStorage.getItem("darkmode")
  if (darkmode == "negro") {
    console.log(darkmode)
    darkColor();
    document.getElementById("flexSwitchCheckDefault").checked = true
  } else {
    console.log(darkmode)

    lightColor();
    document.getElementById("flexSwitchCheckDefault").checked = false
  }
});

function darkMode(evento) {
  if (evento) {
    darkColor();
  } else {
    lightColor();
  }

}

function darkColor() {

  sessionStorage.setItem("darkmode", "negro");
  document.body.style.backgroundColor = "#222";
  document.body.style.color = "#fff";
}

function lightColor() {
  sessionStorage.setItem("darkmode", "blanco");
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#222";
}



