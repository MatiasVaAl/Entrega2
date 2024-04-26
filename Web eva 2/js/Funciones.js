function mostrarFormulario() {
    formulario = document.getElementById("cnt_formulario");
    festi_img = document.getElementById("imagen_fest");
    info = document.getElementById("cnt_mostrarInfo")
    formulario.style.display = "block";
    info.style.display = "none";
    festi_img.style.display = "none";
  }

function mostrarTarjeta() {
  tarjeta = document.getElementById("cnt_tarjeta");
  tarjeta.style.display = "block";
}

function mostrarInfo() {
  info = document.getElementById("cnt_mostrarInfo")
  formulario = document.getElementById("cnt_formulario");
  tarjeta = document.getElementById("cnt_tarjeta");
  festi_img = document.getElementById("imagen_fest");
  /*Mostramos la info*/
  info.style.display = "block";
  festi_img.style.display = "block";
  /*Ocultamos los otros datos */
  formulario.style.display = "none";
  tarjeta.style.display = "none";
}
