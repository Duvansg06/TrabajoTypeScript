interface Producto {
    nombre: string,
    descripcion: string,
    stock: number,
    valor: number
}

let productos: Producto []= [];

function agregarProducto(producto: Producto): void {
    productos.push(producto)
}

function buscarProductoPorNombre(nombre: string): Producto | null{
    return productos.find(producto => producto.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase())
}

function calcularTotalInventario(): number{
    if (productos.length === 0) return 0

    const totalInventario = productos.reduce((total, producto) => total + producto.valor, 0)
    return totalInventario

}

agregarProducto({nombre: "Banano", descripcion:"mandarino", stock: 80, valor: 2000})
agregarProducto({nombre: "Zapote", descripcion:"delicius", stock: 100, valor: 4000})


const productoBuscado = buscarProductoPorNombre ("Zapote")
console.log(`Estas buscando a: ${productoBuscado?.nombre}`)
if(productoBuscado){
    console.log(`Producto encontrado!:
        Nombre: ${productoBuscado.nombre}
        Descripcion: ${productoBuscado.descripcion}
        Stock: ${productoBuscado.stock}
        Valor: ${productoBuscado.valor}`)
}else{
    console.log('Producto no encontrado')
}

const totalInventario = calcularTotalInventario();
console.log(`\n El total del inventario es: $${totalInventario.toFixed(2)}`);