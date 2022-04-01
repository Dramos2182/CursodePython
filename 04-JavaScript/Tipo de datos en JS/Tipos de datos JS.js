//Tipo de dato: string
var nombre= 'David'
console.log(typeof nombre)
nombre

//Tipo de dato: numerico
var numero= 10.10;
console.log(typeof numero)
numero

//Tipo de dato: objeto
var objeto={
    nombre: 'David',
    edad: 18,
    correo: 'dramosmireles2@gmail.com',
    telefono: 8991234567
};
console.log(typeof objeto)
objeto

//Tipo de dato: booleano
var bandera= false;
console.log(typeof bandera)

//Tipo de dato: Funcion
function funcion1(){}
console.log(typeof funcion1)

//Tipo de dato symbol
var simbolo =Symbol('Mi simbolo');
console.log(typeof simbolo)

//Tipo de clase es una funcion
class persona{
    constructor(nombre, apellido){
        this.nombre= nombre;
        this.apellido=apellido;
    }
}
console.log(typeof persona)

//Tipo de dato: undifined
var x
console.log(typeof x)

//Tipo de dato: null
var y= null;
console.log(typeof y)

var autos=[1,2,3,'Hola',null]
console.log(autos)
console.log(typeof autos)

var z= '';
console.log(z);
console.log(typeof z)