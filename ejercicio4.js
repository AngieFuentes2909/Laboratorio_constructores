function Libro(titulo, autor, genero, precio) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.prestado = false;

    this.prestar = function () {
        if (!this.prestado) {
            this.prestado = true;
            return `el libro "${this.titulo}" ha sido prestado`;
        } else {
            return `alerta el libro "${this.titulo}" ya esta prestado en estos momentos`;
        }
    };
    this.devolver = function () {
        if (this.prestado) {
            this.prestado = false;
            return `el libro "${this.titulo}" ha sido devuelto`;
        } else {
            return `alerta el libro "${this.titulo}" no esta prestado`;
        }
    };
}

const libro1 = new Libro("Peter Pan", "James Matthew Barrie", "fantasia", 45000);


console.log(libro1.prestar());
console.log(libro1.prestar());
console.log(libro1.devolver());
console.log(libro1.devolver());

