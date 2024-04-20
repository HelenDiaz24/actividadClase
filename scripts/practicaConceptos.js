//VERIFICAR QUE ESTE CONECTADO CON HTML

console.log("Hola, soy la actividad de hoy")

//TRAER LOS ELEMENTOS QUE NECESITA DE SU HTML -> los que tienen id

const edadInput = document.getElementById("edadInput");
console.log(edadInput)


const mensaje = document.getElementById("mensajeEdad")
console.log(mensaje)

function verificarEdad(){
    console.log("Entró a mi función verificar edad")

let edad =edadInput.value;
console.log(edad);



if (edad>=18) {
    console.log("Eres mayor de edad");
   
    mensaje.textContent = "Eres mayor de edad";

}else{
    console.log("Eres menor de edad");

    mensaje.textContent = "Eres menor de edad";


}


    }

