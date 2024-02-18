/* EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos. */

// Inicio la clase Cuenta con su constructor que contendra los parametros
class Cuenta {
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    numCuenta: number;

    constructor (nombre:string, cantidad:number, tipoCuenta:string, numCuenta:number) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numCuenta = numCuenta;
    }

// Metodo para depositar dinero
    depositar(cantidad:number) {
        if ( cantidad < 5) {
            console.log('El valor a depositar debe ser mayor a $5');
        } else {
            return `Tu deposito fue hecho correctamente por la cantidad de $${cantidad}`
        }
    }

    retirar(valor:number) {
        if ( valor < 5) {
            return 'El valor a retirar debe ser mayor a $5'
        } else if ( valor > this.cantidad) { 
            return `No tienes fondos suficientes! 😭`
        } else {
            this.cantidad -= valor;
            return `Has retirado $${ valor }, ahora el total en tu cuenta es de ${ this.cantidad } `;
        }
    }

// Mostrar los datos del user e imprimirlos
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Numero de Cuenta: ${this.numCuenta}`);
        console.log(`Tipo de Cuenta: ${this.tipoCuenta}`);
        console.log(`Balance actual es de: ${this.cantidad}`);
    }
}

const cuenta1 = new Cuenta('Josue', 100, 'Corriente', 50073928);
console.log(cuenta1);

console.log(cuenta1.mostrarDatos());
console.log(cuenta1.depositar(10));
console.log(cuenta1.retirar(3));

console.log(cuenta1);

