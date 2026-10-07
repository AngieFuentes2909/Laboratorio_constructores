const prompt = require('prompt-sync')();

function Vehiculo(marca, modelo, año, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio = precio;
    this.encendido = false;

    this.encender = function () {
        if (!this.encendido) {
            this.encendido = true;
            return `el vehiculo ${this.marca} ${this.modelo} ha sido encendido`;
        } else {
            return `el vehiculo ${this.marca} ${this.modelo} ya esta prendido`;
        }
    };

    this.apagar = function () {
        if (this.encendido) {
            this.encendido = false;
            return `el vehiculo ${this.marca} ${this.modelo} ha sido apagado`;
        } else {
            return `el vehiculo ${this.marca} ${this.modelo} ya esta apagado`;
        }
    };

    this.cambiarColor = function (nuevoColor) {
        this.color = nuevoColor;
        return `el color del vehiculo ${this.marca} ${this.modelo} ahora es ${this.color}`;
    };

    this.mostrarInfo = function () {
        return `Vehiculo: ${this.marca} ${this.modelo} (${this.año}) , color: ${this.color} , Precio: $${this.precio}  Encendido: ${this.encendido ? "Sí" : "No"}`;
    };
}

console.log("registro del carro1");
const marca1 = prompt("ingresa la marca: ");
const modelo1 = prompt("ingresa el modelo: ");
const año1 = prompt("ingresa el año: ");
const color1 = prompt("ingresa el color: ");
const precio1 = prompt("ingresa el precio: ");

console.log("\n registro del carro2");
const marca2 = prompt("ingresa la marca: ");
const modelo2 = prompt("ingresa el modelo: ");
const año2 = prompt("ingresa el año: ");
const color2 = prompt("ingresa el color: ");
const precio2 = prompt("ingresa el precio: ");

console.log("\n registro del carro3");
const marca3 = prompt("ingresa la marca: ");
const modelo3 = prompt("ingresa el modelo: ");
const año3 = prompt("ingresa el año: ");
const color3 = prompt("ingresa el color: ");
const precio3 = prompt("ingresa el precio: ");

const auto1 = new Vehiculo(marca1, modelo1, año1, color1, precio1);
const auto2 = new Vehiculo(marca2, modelo2, año2, color2, precio2);
const auto3 = new Vehiculo(marca3, modelo3, año3, color3, precio3);

console.log(auto1.mostrarInfo());
console.log(auto1.encender());
console.log(auto1.encender());
console.log(auto1.cambiarColor("azul oscuro"));
console.log(auto1.mostrarInfo());

console.log("\n datos del carro2 ");
console.log(auto2.mostrarInfo());

console.log("\n datos del carro3 ");
console.log(auto3.mostrarInfo());