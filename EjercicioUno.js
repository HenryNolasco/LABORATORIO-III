const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funciones para las operaciones
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: No se puede dividir entre cero";
    }
    return a / b;
}

function mostrarMenu() {
    console.log("\n=== CALCULADORA ===");
    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Salir");
}

function pedirNumeros(callback) {
    rl.question("Ingrese el primer número: ", (num1) => {
        rl.question("Ingrese el segundo número: ", (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            callback(a, b);
        });
    });
}

function ejecutarCalculadora() {
    function menuPrincipal() {
        mostrarMenu();
        
        rl.question("Seleccione una opción (1-5): ", (opcion) => {
            switch(opcion) {
                case '1':
                    pedirNumeros((a, b) => {
                        console.log(`Resultado: ${a} + ${b} = ${sumar(a, b)}`);
                        menuPrincipal();
                    });
                    break;
                    
                case '2':
                    pedirNumeros((a, b) => {
                        console.log(`Resultado: ${a} - ${b} = ${restar(a, b)}`);
                        menuPrincipal();
                    });
                    break;
                    
                case '3':
                    pedirNumeros((a, b) => {
                        console.log(`Resultado: ${a} × ${b} = ${multiplicar(a, b)}`);
                        menuPrincipal();
                    });
                    break;
                    
                case '4':
                    pedirNumeros((a, b) => {
                        const resultado = dividir(a, b);
                        console.log(`Resultado: ${a} ÷ ${b} = ${resultado}`);
                        menuPrincipal();
                    });
                    break;
                    
                case '5':
                    console.log("¡Hasta luego!");
                    rl.close();
                    break;
                    
                default:
                    console.log("Opción no válida. Por favor, seleccione 1-5.");
                    menuPrincipal();
                    break;
            }
        });
    }
    
    menuPrincipal();
}

// Ejecutar el programa
ejecutarCalculadora();