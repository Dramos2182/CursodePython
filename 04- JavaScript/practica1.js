
console.log("\n---------------- VARIABLES---------------")
var numero1= 4;
var numero2= 2;
console.log(numero1)
console.log("Numero1: " + numero2 + "Numero 2: "+numero2);

console.log("\n---------------- Cadenas ------------------")
var frase='Ejemplo comillas simples';
var frase2="Ejemplo comillas dobles";
console.log(frase);
console.log(frase2);
console.log("\n" + frase+ "\n" + frase2);

console.log("------------------- CONDICIONALES-----------------");
console.log(numero1>numero2);
console.log(numero1!=numero2);

console.log("-----------------OPERADORES LOGICOS -----------------");
console.log("Operador logico And");
console.log(true && false);
console.log("Operador logico Or");
console.log(true || false);

console.log("--------------- Arreglos -------------------");
let listadenumeros = [2,3,5,7,11,234];

console.log(listadenumeros[3]);
listadenumeros.push(16);
listadenumeros.push(939);
console.log(listadenumeros);
console.log(listadenumeros.length);

let listadepalabras= ["Explorer","MisionCommander", "LaunchX","Innovaccion"];
console.log(listadepalabras);
console.log(listadepalabras.length);

let palabra="Explorer";
console.log(palabra[2]);
console.log(palabra.length)

console.log("--------------- Objetos -------------------");
let explorer={
    nombre: "Nombre del explorer",
    email: "email@innovaccion.mx",
    numero: 12345,
    mission: "FrontEnd",
    proyectos: ["Abogabot","Pateleria","Taqueria", "Vacunacion"],
    proPer: {
        escolar: "Tereas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
}
console.log(explorer);
console.log(explorer.email);
console.log(explorer.proPer);

let numero1= 20;
let numero2=15;
console.log("IF - ELSE")
if(numero1>numero2){
    console.log("El numer 1 es mayor al numero 2");
}
else if(numero1=numero2){
    console.log("Los numeros son iguales")
}
else{
    console.log("El numero 2 es mayo igual a 1")
}