const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularCostoEstacionamiento(horas) {
    if (horas < 0 || isNaN(horas)) {
        return "Error: Las horas no pueden ser negativas o no válidas";
    }
    
    if (horas <= 1) {
        return 2.00;
    } else if (horas <= 4) {
        return 5.00;
    } else {
        return 10.00;
    }
}

function programaEstacionamiento() {
    console.log("=== CALCULADORA DE ESTACIONAMIENTO ===");
    console.log("Tarifas:");
    console.log("• 1 hora → $2.00");
    console.log("• 2-4 horas → $5.00");
    console.log("• Más de 4 horas → $10.00\n");
    
    rl.question("Ingrese las horas de estacionamiento: ", (input) => {
        const horas = parseFloat(input);
        const costo = calcularCostoEstacionamiento(horas);
        
        if (typeof costo === 'string') {
            console.log(`\n❌ ${costo}`);
        } else {
            console.log(`\n⏰ Horas estacionado: ${horas} horas`);
            console.log(`💰 Total a pagar: $${costo.toFixed(2)}`);
            
            // Mostrar tarifa aplicada
            if (horas <= 1) {
                console.log("Tarifa aplicada: Hasta 1 hora ($2.00)");
            } else if (horas <= 4) {
                console.log("Tarifa aplicada: 2-4 horas ($5.00)");
            } else {
                console.log("Tarifa aplicada: Más de 4 horas ($10.00)");
            }
        }
        
        rl.close();
    });
}

// Ejecutar el programa
programaEstacionamiento();