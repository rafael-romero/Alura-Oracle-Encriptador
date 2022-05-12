function eliminarMensajeError(){
  const $mensajeUsuario = document.querySelector("#mensaje-usuario");
  const $cartelError = document.querySelector("#mensaje-error");
  $cartelError.textContent = "";
  $cartelError.classList.add("ocultar");
  $cartelError.classList.remove("error");
  $mensajeUsuario.value = "";
}

function ocultarMensajeResultado(){
  const $noSeEncontroImagen = document.querySelector("#no-se-encontro-imagen");
  $noSeEncontroImagen.classList.remove("ocultar");
  const $noSeEncontroTexto = document.querySelector("#no-se-encontro-texto");
  $noSeEncontroTexto.classList.remove("ocultar");
  const $resultadoMensaje =  document.querySelector("#resultado-mensaje");
  // $resultadoMensaje.textContent = "";
  $resultadoMensaje.classList.add("ocultar");
  const $btnCopiarMensaje =  document.querySelector("#btn-copiar-mensaje");
  $btnCopiarMensaje.classList.add("ocultar");
  const $btnCopiarMensajeAlPortapapeles = document.querySelector("#btn-copiar-al-portapapeles");
  $btnCopiarMensajeAlPortapapeles.classList.add("ocultar");
}

function mostrarMensaje(mensaje){
  const $noSeEncontroImagen = document.querySelector("#no-se-encontro-imagen");
  $noSeEncontroImagen.classList.add("ocultar");
  const $noSeEncontroTexto = document.querySelector("#no-se-encontro-texto");
  $noSeEncontroTexto.classList.add("ocultar");
  const $resultadoMensaje =  document.querySelector("#resultado-mensaje");
  $resultadoMensaje.textContent = mensaje;
  $resultadoMensaje.classList.remove("ocultar");
  const $btnCopiarMensaje =  document.querySelector("#btn-copiar-mensaje");
  $btnCopiarMensaje.classList.remove("ocultar");
  const $btnCopiarMensajeAlPortapapeles = document.querySelector("#btn-copiar-al-portapapeles");
  $btnCopiarMensajeAlPortapapeles.classList.remove("ocultar");
}

function mostrarErrores(errores){
  const $cartelError = document.querySelector("#mensaje-error");
  errores.forEach(function(error){
    $cartelError.classList.remove("ocultar");
    $cartelError.textContent = error;
    $cartelError.classList.add("error")
  });
}

function validarTexto(mensajeDelUsuario){
  const errores = []
  if((mensajeDelUsuario.length == 0) || ((/^\s*$/).test(mensajeDelUsuario))){
    errores.push("El campo de texto no debe estar vacio!!!");
  }
  if(!(/^[a-z\s]*$/g).test(mensajeDelUsuario)){
    errores.push("El texto debe ser solo en minusculas y sin caracteres especiales o acentos!!!");
  }
  return errores;
};

