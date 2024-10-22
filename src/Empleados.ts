interface Empleado {
    nombre: string,
    apellido: string,
    puesto: string,
    salario: number
}

let empleados: Empleado []= [];

function agregarEmpleado(empleado: Empleado): void {
    empleados.push(empleado)
}

function buscarEmpleadoPorNombre(nombre: string): Empleado | null{
    return empleados.find(empleado => empleado.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase())
}

function calcularSalarioPromedio(): number{
    if (empleados.length === 0) return 0

    const sumaSalarioo = empleados.reduce((total, empleado) => total + empleado.salario, 0)
    return sumaSalarioo / empleados.length

}

agregarEmpleado({nombre: "Duvan Steven", apellido:"Guzman", puesto:"Jefote", salario: 20000000})
agregarEmpleado({nombre: "Duvier Diego", apellido:"David", puesto:"Jefote", salario: 20000000})
agregarEmpleado({nombre: "David", apellido:"Bohorquez", puesto:"Asesor", salario: 10000000})
agregarEmpleado({nombre: "Karol Estefania", apellido:"Franco", puesto:"Asesora", salario: 10000000})
agregarEmpleado({nombre: "Cristofer", apellido:"Malo", puesto:"Contador", salario: 12000000})

const empleadoBuscado = buscarEmpleadoPorNombre ("Cristofer")
console.log(`Estas bscando a: ${empleadoBuscado?.nombre}`)
if(empleadoBuscado){
    console.log(`Empleado/a encontrado/a!:
        Nombre: ${empleadoBuscado.nombre}
        Apellido: ${empleadoBuscado.apellido}
        Puesto: ${empleadoBuscado.puesto}
        Salario: ${empleadoBuscado.salario}`)
}

const salarioPromedio = calcularSalarioPromedio();
console.log(`\n El salario promedio de los empleados es: $${salarioPromedio.toFixed(2)}`);