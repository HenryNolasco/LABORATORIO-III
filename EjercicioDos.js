const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerSaludo() {
    const ahora = new Date();
    const hora = ahora.getHours();
    
    if (hora >= 6 && hora < 12) {
        return "Buenos días";
    } else if (hora >= 12 && hora < 18) {
        return "Buenas tardes";
    } else if (hora >= 18 && hora <= 23) {
        return "Buenas noches";
    } else {
        return "Es hora de dormir";
    }
}

function mostrarSaludoPersonalizado() {
    rl.question("¿Cuál es tu nombre? ", (nombre) => {
        const saludo = obtenerSaludo();
        console.log(`\n${saludo}, ${nombre}!`);
        console.log(`Hora actual: ${new Date().toLocaleTimeString()}`);
        rl.close();
    });
}

// Ejecutar el programa
mostrarSaludoPersonalizado();