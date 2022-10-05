var scanf = require('scanf');

console.log('Mi Calculadora');
console.log('\n');
console.log('Escoje la operación a realizar');
console.log('\n');

console.log('1. Suma');
console.log('2. Resta');

console.log('\n');
console.log('Escoja la operación: ');

let operacionSeleccionada = scanf('%d');

switch (operacionSeleccionada) {
    case 1:
        console.log('Ingrese Numero Uno: ');
        var numeroUno = scanf('%d');
        console.log('Ingrese Numero Dos: ');
        var numeroDos = scanf('%d');

        if (isNaN(numeroUno) && isNaN(numeroDos)) {
            console.log('Por favor debes ingresar numeros');
        } else {
            let resultado = (numeroUno + numeroDos);
            console.log(`El resultado de la suma es: ${resultado}`);
        }
        break;
    case 2:
        console.log('Ingrese Numero Uno: ');
        var numeroUno = scanf('%d');
        console.log('Ingrese Numero Dos: ');
        var numeroDos = scanf('%d');

        if (isNaN(numeroUno) && isNaN(numeroDos)) {
            console.log('Por favor debes ingresar numeros');
        } else {
            let resultado = (numeroUno - numeroDos);
            console.log(`El resultado de la resta es: ${resultado}`);
        }
        break;
    default:
        console.log('La opcion seleccionada no existe en el menú')
        break;
}