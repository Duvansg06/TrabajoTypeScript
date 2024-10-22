interface Estudiante {
    nombre: string,
    notas: number[]
}

let estudiantes: Estudiante []= [];

function agregarEstudiante(nombre: string, notas: number[]): void {
    const nuevoEstudiante: Estudiante = { nombre, notas };
    estudiantes.push(nuevoEstudiante);
}

function buscarEstudiante(nombre: string): Estudiante | undefined {
    return estudiantes.find(estudiante => estudiante.nombre === nombre);
}

function calcularPromedioGeneral(): number{
    const totalNotas: number[] = estudiantes.flatMap(estudiante => estudiante.notas);
    const sumaTotal: number = totalNotas.reduce((suma, nota) => suma + nota, 0);
    return totalNotas.length ? sumaTotal / totalNotas.length : 0;
}

agregarEstudiante("Juan", [8, 9, 7]);
agregarEstudiante("María", [6, 8, 10]);


console.log(buscarEstudiante("Juan")); 
console.log(calcularPromedioGeneral()); 
