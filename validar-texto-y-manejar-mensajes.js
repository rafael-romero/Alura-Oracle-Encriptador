function eliminarMensajeError(){
  const $cartelError = document.querySelector("#mensaje-error");
  $cartelError.textContent = "";
  $cartelError.classList.add("ocultar");
  $cartelError.classList.remove("error");
  $mensajeUsuario.value = "";
}

function mostrarMensaje(mensaje){
  document.querySelector("#no-se-encontro-imagen").classList.add("ocultar");
  document.querySelector("#no-se-encontro-texto").classList.add("ocultar");
  const $resultadoMensaje =  document.querySelector("#resultado-mensaje");
  $resultadoMensaje.classList.remove("ocultar");
  $resultadoMensaje.textContent = mensaje;
  const $btnCopiarMensaje =  document.querySelector("#btn-copiar-mensaje");
  $btnCopiarMensaje.classList.remove("ocultar");
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

