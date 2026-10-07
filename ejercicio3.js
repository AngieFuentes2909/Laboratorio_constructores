function Estudiante(nombre, curso, nota) {
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;

    this.aprobado = this.nota >= 3.0;

    this.resultadoAprobado = function () {
        if (this.aprobado) {
            return `el estudiante ${this.nombre} paso el curso ${this.curso} con una nota de ${this.nota}`;
        } else {
            return `el estudiante ${this.nombre} no paso el curso ${this.curso} con una nota de ${this.nota}`;
        }
    };

}
const estudiante1 = new Estudiante("Angie", "Matematicas", 5);
const estudiante2 = new Estudiante("Saray", "Programacion", 2.9);
const estudiante3 = new Estudiante("Wilder", "Ingles", 4.1);

console.log(estudiante1.resultadoAprobado());
console.log(estudiante2.resultadoAprobado());
console.log(estudiante3.resultadoAprobado());