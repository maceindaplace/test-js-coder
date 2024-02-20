

// for ( let iterador=0;iterador<=10;iterador++) {

//   console.log('Repeticion',iterador)

// }

// let num = Number(prompt('Ingrese numero para la tabla'))

// //En este caso el ++ hace que vaya de 1 en 1

// // for ( i=1;i <=10; i++ ){

// //   let resultado = i * num;
// //   console.log ( num + 'x' + i +'=' + resultado);

// // }


// //Si quisieramos que vaya de 10 en 10 / i+10


// for ( i=0;i <=100; i=i+10 ){

//   let resultado = i * num;
//   console.log ( num + 'x' + i +'=' + resultado);

// }

//FOR

// let acumulador = 0
// let i


// let numNotas = Number(prompt('Ingrese numero de notas'))

// if (numNotas == "") {

//   alert('Debe ingresar un numero de notas')


// } else {
//   for (i = 1; i <= numNotas; i++) {

//     let nota = Number(prompt('Ingrese nota ' + i))
//     acumulador += nota // es lo mismo que poner acumaldor = acumulador + nota

//   }

//   alert('Tu promedio es: ' + (acumulador / numNotas));

// }

//WHILE

// let numero = 10

// while (numero == 10) {

//   if (prompt('Ingrese 0 para salir') == '0') {
//     numero = 0

//   }
// }



// let numero = 0

// while (numero != 10) {
//   numero = Number(prompt('Adivina el numero'))
// }


//DO WHILE

let nombre 

do{

  nombre = prompt('Ingresa tu nombre').toLowerCase()

}while (nombre != 'pepe')

console.log('bienvenido ' + nombre)