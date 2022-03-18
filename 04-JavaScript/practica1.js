
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

console.log("IF - ELSE")
let numero3= 20;
let numero4= 15;
if(numero1>numero2){
    console.log("El numer 1 es mayor al numero 2");
}
else if(numero1=numero2){
    console.log("Los numeros son iguales");
}
else{
    console.log("El numero 2 es mayo igual a 1");
}

console.log("CICLOS CONDICIONALES")
let numerowhile=5;
while(numerowhile<=10){
    console.log(numerowhile);
    numerowhile= numerowhile + 2;
}
console.log("Ya salio el ciclo while");

console.log("CICLO DO-WHILE")
let numeroDowhile=10;
do{
    numeroDowhile =numeroDowhile+2;
    console.log(numeroDowhile);
}while(numeroDowhile<20);
console.log("Salio de el ciclo Do While");

console.log("Ciclo for")

let numerofor=0
for(numerofor;numerofor<=12;numerofor=numerofor+1){
    console.log(numerofor);
}
console.log("Salimos del ciclo for "+numerofor);

console.log("SWITCH")
switch(prompt("Como esta el clima?")){
    case "lluvioso":
        console.log("No te vayas a mojar");
        break;
    case "nublado":
        console.log("Pnte bloqueador");
        break;
    case "nublado":
        console.log("Ponte bloqueador");
        break;
    default:
        console.log("No se como esta el clima");
        break;
}
console.log("Salimos del switch");