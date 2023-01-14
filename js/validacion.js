export function valida(input) {
 const tipoDeInput = input.dataset.tipo;
 console.log(tipoDeInput);
 console.log(input.parentElement);
 if (input.validity.valid) {
  input.parentElement.classList.remove("input-container--invalid");
  input.parentElement.querySelector("input-message-error").innerHTML = "";
 } else {
  input.parentElement.classList.add("input-container--invalid");
  input.parentElement.querySelector(".input-menssage-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
 }
}

const tipoDeErrores = [
 "valueMissing",
 "typeMismatch",
 "patternMismatch",

];

const mensajesDeError = {
 nombre: {
  valueMissing: "El campo nombre no puede estar vacío",
 },
 email: {
  valueMissing: "El campo correo no puede estar vacío",
  typeMismatch: "El correo no es válido",
 },

 asunto: {
  valueMissing: "Este campo no puede estar vacío",
  patternMismatch: "El estado debe contener entre 10 a 20 caracteres.",
 },
 texto: {
  valueMissing: "Este campo no puede estar vacío",
  patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
 },
};



function mostrarMensajeDeError(tipoDeInput, input) {
 let mensaje = "";
 tipoDeErrores.forEach((error) => {
  if (input.validity[error]) {
   /*  console.log(tipoDeInput, error);
    console.log(input.validity[error]);
    console.log(mensajesDeError[tipoDeInput][error]); */
   mensaje = mensajesDeError[tipoDeInput][error];
  }
 });
 return mensaje;
}