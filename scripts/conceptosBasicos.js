//CONSOLE.LOG -> enviar mensajes a la consola del navegador

console.log("HOLA MUNDO");
console.log("Mi mensaje");


//CONCEPTOS BÁSICOS EN JAVASCRIPT
    //1. tipos de variables
    //2. Manejo del DOM
    //3. Condicionales
    //4. Ciclos

//VARIABLES EN JS -> 3, solo usaremos 2
    //1. VAR -> no utilizar
    //2. LET -> cambia en el tiempo
    //3. CONST -> no puede cambiar

//TIPOS DE DATOS QUE SE PUEDEN ALMACENAR
    //numericos 
    let numero =7;

    //cadena de caracteres -> string
    let texto = "Hola mundo"

    //Booleanos -> dato que puede ser verdadero o falso
    let esVerdadero = true; 
    let esFalso = false;

    //Arreglos -> arrays -> almacenar varios datos al mismo tiempo en una variable
    let arregloNombres = ["Luisa", "Paula", "lucia"];
    let arregloNumeros = [1, 2, 3];
    
    //Objetos -> representación de elementos de la vida real pero en el código
        //-> Atributos -> caracteristicas
        //-> Métodos -> acciones
    const celular = {
        color: "blanco",
        modelo: "iphone 14",
        ancho: "350px",

        enviarMensajes: function(){
            //establecer la acción a realizar
            console.log("Mensaje enviado")
        },

        sumar: function (){
            console.log(5+4);
        }
    }

    function buscarObjeto(){
        console.log("le muestra lo que esta buscando")
    }

    function filtrarInformacion (){
        console.log("solo información sobore depresión")
    }

    //En la carpeta scripts van todos los archivos de Js pero destinados a darle dinamismo al sitio web

    //NODE JS -> para implementar js en backend
    
