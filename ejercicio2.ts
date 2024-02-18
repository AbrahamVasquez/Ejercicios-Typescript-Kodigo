/* EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar • Restar • Multiplicar
• Dividir • Potencia • Factorial
*/

class Calculadora {

    // Metodo Sumar
    sumar(num1: number, num2: number): number {
        return num1 + num2;
    }

    // Metodo Restar
    restar(num1: number, num2: number): number {
        return num1 - num2;
    }

    // Metodo Multiplicar
    multiplicar(num1: number, num2: number): number {
        return num1 * num2;
    }

    // Metodo Dividir
    dividir(num1: number, num2: number): number {
        return num1 / num2;
    }

    // Metodo Potencia
    potencia(numBase: number, numExponente: number): number {
        return Math.pow(numBase, numExponente);
    }

    // Metodo Factorial
    factorial(n: number): number {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
}
}

const calculadora1 = new Calculadora();

console.log("Suma:", calculadora1.sumar(5, 3));
console.log("Resta:", calculadora1.restar(5, 3)); 
console.log("Multiplicación:", calculadora1.multiplicar(5, 3));
console.log("División:", calculadora1.dividir(6, 2)); 
console.log("Potencia:", calculadora1.potencia(2, 3)); 
console.log("Factorial:", calculadora1.factorial(5));