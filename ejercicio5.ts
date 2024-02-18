/* EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo. */

// Inicializo la clase abstracta
abstract class Persona {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: number;
    edad: number;

// Creo el constructor con los parametros solicitados
    constructor(nombre:string, apellido:string, direccion:string, telefono:number, edad:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

// Metodo que checkea edad de usuario
    checkMayorEdad(edad:number) {
        if (edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} Es mayor de edad ✅`);
        } else {
            console.log(`${this.nombre} ${this.apellido} No es mayor de edad 😭`);           
        }
    }

    abstract mostrarDatosPersonales(): void;
}

// Creo la clase que heredera atributos de clase Persona
class Empleado extends Persona {
    sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: number, edad: number, sueldo: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = sueldo;
    }

    cargarSueldo(sueldo:number): void {
        this.sueldo = sueldo;
    }

    imprimirSueldo(): void {
        console.log(`El sueldo de ${this.nombre} ${this.apellido} es de: $${this.sueldo}`);
    }

    mostrarDatosPersonales(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
    }
}

const empleado1 = new Empleado('Abraham', 'Vasquez', 'San Salvador', 60108439, 25, 3000);
console.log(empleado1);

empleado1.mostrarDatosPersonales();
empleado1.checkMayorEdad(17);
empleado1.imprimirSueldo();