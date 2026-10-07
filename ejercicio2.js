function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre
    this.especie = especie
    this.edad = edad
    this.peso = peso

    this.presentarse = function () {
        console.log("hola mi nombre es " + this.nombre + " mi especie es " + this.especie + " tengo " + this.edad + " años y mi peso es " + this.peso);
    }
}

const mascota1 = new Mascota("Willie", "Gato", 2, 4.5);
const mascota2 = new Mascota("Canela", "Gato", 1, 5.5);
const mascota3 = new Mascota("Zoe", "Gato", 1, 4.8);

console.log(mascota1.presentarse());
console.log(mascota2.presentarse());
console.log(mascota3.presentarse());


