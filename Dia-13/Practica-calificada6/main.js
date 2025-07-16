let saldo = 0;
const limiteDiario = 500;
let retiradoHoy = 0;
let transacciones = 0;

function bancoSimulador() {
    while (true) {
        let opcion = parseInt(prompt(
            "MENU BANCARIO\n" +
            "Selecciona una opcion:\n"+
            "1. Ingresar dinero\n" +
            "2. Retirar dinero\n" +
            "3. Consultar saldo\n" +
            "4. Consultar numero de transacciones\n" 
            
    ))

    switch (opcion) {
        case "1":
            let deposito = prompt("Cuanto deseas ingresar?");
            let montoDeposito = parseFloat(deposito);

            if (deposito !== null && deposito.trim() !== "" && montoDeposito > 0) {
            saldo += montoDeposito;
            transacciones++;
            alert("Deposito exitoso");
            } else {
            alert("Monto invalido");
            }
        break;

        case "2":
            let retiro = prompt("Cuanto deseas retirar?");
            let montoRetiro = parseFloat(retiro);

            if (retiro === null || retiro.trim() === "" || montoRetiro <= 0) {
            alert("Monto invalido");
            } else if (montoRetiro > saldo) {
            alert("Saldo insuficiente");
            } else if ((retiradoHoy + montoRetiro) > limiteDiario) {
            alert("Has excedido tu limite diario de retiro");
            } else {
            saldo -= montoRetiro;
            retiradoHoy += montoRetiro;
            transacciones++;
            alert("Retiro exitoso");
            }
        break;

        case "3":
            alert(`Saldo actual: S/ ${saldo}`);
        break;

        case "4":
            alert(`Transacciones realizadas: ${transacciones}`);
        break;

        default:
            alert("Opcion invalida. Por favor elige entre 1 y 4");
        break;
    }
}
}

bancoSimulador();