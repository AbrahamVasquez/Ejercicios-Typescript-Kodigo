/* EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.  */

class Cancion {
    private autor:string;

    constructor(public titulo:string, public genero:string) {
        this.autor = '';
    };

// Metodo para obtner autor ingresado
        getAutor(): string {
            return this.autor;
        };

        setAutor(autor:string): void {
            this.autor = autor;
        };

// Imorimo lo datos de la cancion
        cancionDatos() : void{
            console.log("Título:", this.titulo);
            console.log("Género:", this.genero);
            console.log("Autor:", this.autor);
        };
};

const cancion1 = new Cancion("Bohemian Rhapsody", "Rock");
console.log(cancion1);

cancion1.setAutor("Queen");
console.log(cancion1);