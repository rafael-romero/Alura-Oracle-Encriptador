function borrarDatosDeAmbosCampos(){
  const $resultadoMensaje = document.querySelector("#resultado-mensaje");
  $resultadoMensaje.textContent = "";
  const $mensajeUsuario = document.querySelector("#mensaje-usuario");
  $mensajeUsuario.value = "";
  ocultarMensajeResultado();
}

function copiarTextoAlPortapapeles(){
  let textoCopiado = document.querySelector("#resultado-mensaje").innerHTML;
  navigator.clipboard.writeText(textoCopiado).then(() =>{
    alert("Texto Copiado en el portapapeles!!!")
  })
  .catch(err => {
    alert("Algo salio MAL!!!", err);
  })
}

// El codigo debajo, hace lo mismo que lo que esta arriba, pero utiliza document.execCommand() el 
// cual se desanconseja su uso...
// function copiarTextoAlPortapapeles(){
//   let textoCopiado = document.querySelector("#resultado-mensaje");
//   textoCopiado.select();
//   document.execCommand("copy");
//   alert("Texto Copiado");
// }
// document.querySelector("btn-copiar-al-portapapeles").addEventListener("click", copiarTextoAlPortapapeles);


