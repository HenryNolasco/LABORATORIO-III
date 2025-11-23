const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPrecioEntrada(edad) {
    if (edad < 0 || isNaN(edad)) {
        return "Error: La edad no puede ser negativa o no válida";
    }
    
    if (edad < 12) {
        return 3.00;
    } else if (edad >= 12 && edad <= 59) {
        return 5.00;
    } else {
        return 2.50;
    }
}

function programaCine() {
    console.log("=== CINE - CALCULADORA DE PRECIOS ===");
    
    rl.question("Ingrese su edad: ", (input) => {
        const edad = parseInt(input);
        const precio = calcularPrecioEntrada(edad);
        
        if (typeof precio === 'string') {
            console.log(`\n❌ ${precio}`);
        } else {
            console.log(`\n✅ Precio de entrada: $${precio.toFixed(2)}`);
            
            // Mostrar categoría
            if (edad < 12) {
                console.log("Categoría: Niño (menor de 12 años)");
            } else if (edad >= 12 && edad <= 59) {
                console.log("Categoría: Adulto (12-59 años)");
            } else {
                console.log("Categoría: Adulto mayor (60+ años)");
            }
        }
        
        rl.close();
    });
}

// Ejecutar el programa
programaCine();