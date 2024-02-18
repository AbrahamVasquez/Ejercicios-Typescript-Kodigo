/* EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
propiedades. */

// Creo la clase inicial con el constructor y parametros a contener
class CabeceraPagina {
    private titulo:string;
    private color:string;
    private fuente:string;

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    };

    // Método para obtener el título, color y fuente de la página
    obtenerCaracteristicas(): {titulo: string, color: string, fuente: string} {
        return {
            titulo: this.titulo,
            color: this.color,
            fuente: this.fuente
    }
    }

    // Metodo para alinear el Titulo
    alinearTitulo( alinear: 'centrado' | 'derecha' | 'izquierda') : void {
        console.log(`Este título se mostrará alineado a una direccion ${alinear}.`);
    }

    // Metodo para imprimir propiedades/caracteristicas
    imprimirPropiedades(): void {
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
    }
};

const pagina1 = new CabeceraPagina ('Harry Potter', 'Azul', 'Arial',);
console.log(pagina1);

const caracteristicas = pagina1.obtenerCaracteristicas();
console.log(caracteristicas);

pagina1.alinearTitulo('centrado');
pagina1.imprimirPropiedades();

console.log(pagina1);