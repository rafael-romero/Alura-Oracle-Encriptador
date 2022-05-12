function ocultarElemento(elemento){
  elemento.classList.add("ocultar");
}

function mostrarElemento(elemento){
  elemento.classList.remove("ocultar");
}

function eliminarMensajeError(){
  const $mensajeUsuario = document.querySelector("#mensaje-usuario");
  const $cartelError = document.querySelector("#mensaje-error");
  $cartelError.textContent = "";
  ocultarElemento($cartelError);
  $cartelError.classList.remove("error");
  $mensajeUsuario.value = "";
}

function ocultarMensajeResultado(){
  const $noSeEncontroImagen = document.querySelector("#no-se-encontro-imagen");
  mostrarElemento($noSeEncontroImagen);
  const $noSeEncontroTexto = document.querySelector("#no-se-encontro-texto");
  mostrarElemento($noSeEncontroTexto);
  const $resultadoMensaje =  document.querySelector("#resultado-mensaje");
  $resultadoMensaje.textContent = "";
  ocultarElemento($resultadoMensaje);
  const $btnCopiarMensaje =  document.querySelector("#btn-copiar-mensaje");
  ocultarElemento($btnCopiarMensaje);
  const $btnCopiarMensajeAlPortapapeles = document.querySelector("#btn-copiar-al-portapapeles");
  ocultarElemento($btnCopiarMensajeAlPortapapeles);
}

function mostrarMensaje(mensaje){
  const $noSeEncontroImagen = document.querySelector("#no-se-encontro-imagen");
  ocultarElemento($noSeEncontroImagen);
  const $noSeEncontroTexto = document.querySelector("#no-se-encontro-texto");
  ocultarElemento($noSeEncontroTexto);
  const $resultadoMensaje =  document.querySelector("#resultado-mensaje");
  $resultadoMensaje.textContent = mensaje;
  mostrarElemento($resultadoMensaje);
  const $btnCopiarMensaje =  document.querySelector("#btn-copiar-mensaje");
  mostrarElemento($btnCopiarMensaje);
  const $btnCopiarMensajeAlPortapapeles = document.querySelector("#btn-copiar-al-portapapeles");
  mostrarElemento($btnCopiarMensajeAlPortapapeles);
}

function mostrarErrores(errores){
  const $cartelError = document.querySelector("#mensaje-error");
  errores.forEach(function(error){
    mostrarElemento($cartelError);
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

