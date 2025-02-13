// ejercicio 1 Comentarios en línea y multilínea 
// Este es un comentario en línea. Los comentarios en línea se usan para agregar explicaciones o notas breves 
// directamente junto a una línea de código. Todo lo que esté después de '//' será ignorado por el intérprete de 
// JavaScript.
// console.log('Hola Mundo');

/*
Este es un comentario multilínea. Los comentarios multilínea se utilizan cuando se necesita escribir explicaciones 
más largas o detalladas que no caben en una sola línea. Pueden abarcar varias líneas de código y se encierran 
entre '/*' al inicio y '*\
/*console.log('Hola Mundo');'*/


//ejercicio 2 Declarar diferentes tipos de variables y mostrar sus valores por consola. 
// Declaración de una variable con let
// let nombre = "santos"; // Una variable que puede ser modificada
// console.log("El nombre es:", nombre);

// // Declaración de una variable con const
// const edad = 21; // Una variable cuyo valor no puede ser modificado
// console.log("La edad es:", edad);

//ejercicio 3 Crear un array con al menos cinco elementos de diferentes tipos.
// Crear un array con elementos de diferentes tipos
const miArray = [
    42,                         // Número
    "Hola, mundo!",              // Cadena de texto
    true,                        // Booleano
    { nombre: "Juan", edad: 30 }, // Objeto
    [1, 2, 3],                   // Array
    function() {                 // Función
        console.log("Soy una función dentro de un array!");
    }
];

// Mostrar los elementos del array en la consola
console.log("Elemento 1 (Número):", miArray[0]);
console.log("Elemento 2 (Cadena):", miArray[1]);
console.log("Elemento 3 (Booleano):", miArray[2]);
console.log("Elemento 4 (Objeto):", miArray[3]);
console.log("Elemento 5 (Array):", miArray[4]);

// Llamar a la función dentro del array
console.log("Elemento 6 (Función):");
miArray[5]();

// ejercicio 4 Escribe una función que tome dos números y aplique una operación
// Función que toma dos números y aplica una operación (suma en este caso)
// function aplicarOperacion(num1, num2) {
//     // Realiza la operación (suma)
//     const resultado = num1 + num2;

//     // Retorna el resultado
//     return resultado;
// }

// // Ejemplo de uso de la función
// const numero1 = 5;
// const numero2 = 10;

// // Llamada a la función y almacenamiento del resultado
// const resultadoOperacion = aplicarOperacion(numero1, numero2);

// // Mostrar el resultado en la consola
// console.log(`El resultado de la operación es: ${resultadoOperacion}`);

//ejercicio 5 Crea una función flecha que reciba un string y lo imprima en mayúsculas
//const imprimirEnMayusculas = (texto) => {
   // console.log(texto.toUpperCase());
//};

// Ejemplo de uso
//imprimirEnMayusculas("guillermo"); // Imprime "HOLA MUNDO"



// 6 Implementa un bucle que imprima los números del 1 al 10.

// Bucle for que imprime los números del 1 al 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// 7 Crea un objeto que represente un objeto del mundo real con sus respectivas propiedades
// Definimos un objeto que representa un Coche
// const coche = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     año: 2022,
//     color: "Rojo",
//     kilometraje: 15000,
//     encendido: false,

//     // Método para encender el coche
//     encender: function() {
//         if (!this.encendido) {
//             this.encendido = true;
//             console.log("El coche está encendido.");
//         } else {
//             console.log("El coche ya está encendido.");
//         }
//     },

//     // Método para apagar el coche
//     apagar: function() {
//         if (this.encendido) {
//             this.encendido = false;
//             console.log("El coche está apagado.");
//         } else {
//             console.log("El coche ya está apagado.");
//         }
//     },

//     // Método para obtener la información del coche
//     obtenerInformacion: function() {
//         return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Kilometraje: ${this.kilometraje} km`;
//     }
// };

// // Ejemplo de uso del objeto coche
// console.log(coche.obtenerInformacion());
// coche.encender();
// coche.apagar();

// 8 Agrega un método al objeto creado anteriormente e imprima una descripción del mismo
// Definimos un objeto que representa un Coche
// const coche = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     año: 2022,
//     color: "Rojo",
//     kilometraje: 15000,
//     encendido: false,

//     // Método para encender el coche
//     encender: function() {
//         if (!this.encendido) {
//             this.encendido = true;
//             console.log("El coche está encendido.");
//         } else {
//             console.log("El coche ya está encendido.");
//         }
//     },

//     // Método para apagar el coche
//     apagar: function() {
//         if (this.encendido) {
//             this.encendido = false;
//             console.log("El coche está apagado.");
//         } else {
//             console.log("El coche ya está apagado.");
//         }
//     },

//     // Método para obtener la información del coche
//     obtenerInformacion: function() {
//         return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Kilometraje: ${this.kilometraje} km`;
//     },

//     // Método para imprimir una descripción detallada del coche
//     descripcion: function() {
//         console.log(`Este es un ${this.marca} ${this.modelo} del año ${this.año}, de color ${this.color} y con un kilometraje de ${this.kilometraje} km.`);
//     }
// };

// // Ejemplo de uso del objeto coche
// console.log(coche.obtenerInformacion());
// coche.descripcion(); // Imprime la descripción del coche
// coche.encender();
// coche.apagar();

// 9 Crea un módulo que contenga funciones matemáticas básicas (suma, resta, etc.) y utilízalo en otro archivo.
// // main.js

// // Importamos el módulo mathOperations
// const mathOps = require('./mathOperations');

// // Usamos las funciones del módulo
// const num1 = 10;
// const num2 = 5;

// console.log(`Suma: ${mathOps.suma(num1, num2)}`);
// console.log(`Resta: ${mathOps.resta(num1, num2)}`);
// console.log(`Multiplicación: ${mathOps.multiplicacion(num1, num2)}`);
// console.log(`División: ${mathOps.division(num1, num2)}`);

// // Manejo de errores en la división
// try {
//     console.log(`División por cero: ${mathOps.division(num1, 0)}`);
// } catch (error) {
//     console.log(error.message);
// }


//ejercicio 10 Escribe una función que simule una operación asincrónica utilizando setTimeout y maneje el resultado con un callback
// function operacionAsincronica(datos, callback) {
//     console.log("Procesando operación asincrónica...");
    
//     setTimeout(() => {
//         // Simulamos el procesamiento de datos
//         const resultado = `Resultado procesado: ${datos}`;

//         // Llamamos al callback con el resultado
//        callback(null, resultado); // null indica que no hubo error
//     }, 2000); // Simulación de 2 segundos de retraso
// }

//  Uso de la función con un callback
// operacionAsincronica("Datos de prueba", (error, resultado) => {
//     if (error) {
//         console.error("Error:", error);
//     } else {
//       console.log("Operación completada:", resultado);
//     }
// });

//ejercicio 11 Escribe un bloque de código que intente convertir una cadena a un número y que maneje cualquier error que pueda ocurrir.
//function convertirANumero(cadena) {
//     try {
//         // Intenta convertir la cadena a un número
//         let numero = Number(cadena);

//         // Verifica si el resultado es un número válido
//         if (isNaN(numero)) {
//             throw new Error("La cadena no es un número válido.");
//         }

//         console.log(`La conversión fue exitosa: ${numero}`);
//     } catch (error) {
//         // Maneja cualquier error que ocurra
//         console.log(`Error: ${error.message}`);
//     }
// }

// // Ejemplo de uso
// convertirANumero("123");         // Conversión exitosa
// convertirANumero("123.45");      // Conversión exitosa
// convertirANumero("abc");         // Error
// convertirANumero("123abc");      // Error
// convertirANumero("");            // Error (cadena vacía)