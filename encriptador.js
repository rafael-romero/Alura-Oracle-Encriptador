function copiarMensaje(){
  const $resultadoMensaje =  document.querySelector("#resultado-mensaje");
  const $mensajeUsuario = document.querySelector("#mensaje-usuario");
  $mensajeUsuario.value = $resultadoMensaje.value;
  $mensajeUsuario.focus();
}

const $btnCopiarMensaje = document.querySelector("#btn-copiar-mensaje");
$btnCopiarMensaje.addEventListener("click", function(event){
  event.preventDefault();
  copiarMensaje();
});

function desencriptarMensaje(mensaje){
  let mensajeDesencriptado =  mensaje.replaceAll("ufat", "u")
  mensajeDesencriptado =  mensajeDesencriptado.replaceAll("ober", "o")
  mensajeDesencriptado =  mensajeDesencriptado.replaceAll("ai", "a")
  mensajeDesencriptado =  mensajeDesencriptado.replaceAll("imes", "i")
  mensajeDesencriptado =  mensajeDesencriptado.replaceAll("enter", "e")
  return mensajeDesencriptado;
}

const $btnDesencriptar = document.querySelector("#btn-desencriptar");
$btnDesencriptar.addEventListener("click", function(event){
  event.preventDefault();
  const $mensajeUsuario = document.querySelector("#mensaje-usuario");
  const errores= validarTexto($mensajeUsuario.value);
  if(errores.length > 0){
    mostrarErrores(errores);  
    return;
  }
  const $resultadoMensaje = document.querySelector("#resultado-mensaje");
  $resultadoMensaje.textContent = "";
  const mensajeDesencriptado = desencriptarMensaje($mensajeUsuario.value);
  mostrarMensaje(mensajeDesencriptado);
  eliminarMensajeError();
});

function encriptarMensaje(mensajeDelUsuario){
  let mensajeEncriptado =  mensajeDelUsuario.replaceAll("e", "enter");
  mensajeEncriptado =  mensajeEncriptado.replaceAll("i", "imes");
  mensajeEncriptado =  mensajeEncriptado.replaceAll("a", "ai");
  mensajeEncriptado =  mensajeEncriptado.replaceAll("o", "ober");
  mensajeEncriptado =  mensajeEncriptado.replaceAll("u", "ufat");
  return mensajeEncriptado;
}


const $btnEncriptar = document.querySelector("#btn-encriptar");
$btnEncriptar.addEventListener("click", function(event){
  event.preventDefault();
  const $mensajeUsuario = document.querySelector("#mensaje-usuario");
  const errores= validarTexto($mensajeUsuario.value);
  if(errores.length > 0){
    mostrarErrores(errores);  
    return;
  }
  const mensajeEncriptado = encriptarMensaje($mensajeUsuario.value);
  mostrarMensaje(mensajeEncriptado);
  eliminarMensajeError();
});


