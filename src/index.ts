type Libro = {
    titulo: string;
    autor: string;
    añoDePublicacion: number;
}


let biblioteca: Libro [] = [];

function agregarLibro (libro: Libro): void {
    
    biblioteca.push(libro);
}
console.log()

function buscarLibro(titulo : string): Libro | null {

    return biblioteca.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase()) || null;
}

agregarLibro({titulo:"Cien anos de soledad", autor:"Garcia marquez", añoDePublicacion:1994});
agregarLibro({titulo:"La rana", autor:"duvier", añoDePublicacion:1998});
agregarLibro({titulo:"el bate", autor:"cristofer", añoDePublicacion:1989});
agregarLibro({titulo:"el tarro", autor:"karol franco", añoDePublicacion:1979})


function mostrarLibro(): void {
    if(biblioteca.length === 0) {
        console.log("No hay libro disponible en la biblioteca");
    }else {
        console.log("Libros disponibles en la biblioteca:");
        biblioteca.forEach(libro => {
            console.log(`\n-Titulo: ${libro.titulo}, \nAutor: ${libro.autor}, \nAño de publicacion: ${libro.añoDePublicacion}`);
        });
    }
}

const LibroBuscado = buscarLibro("Duvan G.");
console.log(`\nEstas buscando: ${LibroBuscado?.titulo}`)
if (LibroBuscado){
    console.log(`\nLibro encontrado: \n\tTitulo: ${LibroBuscado.titulo} Autor: ${LibroBuscado.autor} Año de publicacion: ${LibroBuscado.añoDePublicacion}`);
}else{
    console.log('Libro no encontrado.');
}




