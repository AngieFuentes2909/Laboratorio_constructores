function Computador(marca, procesador, ramGB, precio) {
    this.marca = marca;
    this.procesador = procesador;
    this.ramGB = ramGB;
    this.precio = precio;
}

const pc1 = new Computador("Asus", "Intel Core i3", 8, 1850000);
const pc2 = new Computador("HP", "Ryzen 5", 16, 2500000);
const pc3 = new Computador("Dell", "Intel Core i7", 16, 3200000);

console.log(pc1);
console.log(pc2);
console.log(pc3);





