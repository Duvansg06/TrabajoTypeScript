type Reserva = {
    nombreHuesped: string;
    noches: number;
    tarifaPorNoche: number;
};

let reservas: Reserva[] = [];


function agregarReserva(nombreHuesped: string, noches: number, tarifaPorNoche: number): void {
    const nuevaReserva: Reserva = { nombreHuesped, noches, tarifaPorNoche };
    reservas.push(nuevaReserva); 
}


function buscarReserva(nombreHuesped: string): Reserva | undefined {
    return reservas.find(reserva => reserva.nombreHuesped === nombreHuesped);
}


function calcularIngresoTotal(): number {
    return reservas.reduce((total, reserva) => total + (reserva.noches * reserva.tarifaPorNoche), 0);
}


agregarReserva("Juan Pérez", 3, 100);
agregarReserva("María López", 2, 150);

console.log(buscarReserva("Juan Pérez")); 
console.log(calcularIngresoTotal()); 
