
// // De la clase anterior vimos el siguiente ejercicio

// // Para ayudar a un profesor con su clase 👇👇👇
// //      > Declarar una variable alumno y materia
// //      > Declarar 3 variables nota
// //      > Calcular el promedio de las notas
// //      > Mostrar el promedio + el nombre del alumno



// // let alumno = prompt('Ingrese el nombre del alumno')
// // let materia = prompt('Ingrese la materia cursada')


// // let nota1 = Number(prompt('Ingrese la primer nota'))
// // let nota2 = Number(prompt('Ingrese la segunda nota'))
// // let nota3 = Number(prompt('Ingrese la tercer nota'))

// // //				1 + 	2 		3		=> '123' / 3
// // let promedio = (nota1 + nota2 + nota3) / 3

// // alert('El promedio del alumno ' + alumno + ' es de ' + promedio)

// let alumno = prompt('Ingrese el nombre del alumno')
// let aprueba = true

// // Si aprueba, le felicitamos
// 	// true o false
// if (aprueba) {
// 	// Bloque de codigo a ejecutar SI aprueba es true
// 	console.log('Felicidades ' + alumno + ' aprobaste')
// }

// console.log('Saliste del programa')



// Armar un programa de la lotería 
// 	Se declara una constante que es el número ganador
// 	Se pide al usuario su número de ticket
// 	El programa debe decirle al usuario a través de un alert si es ganador
// 	Si encima el ganador se llama Pepe le regalamos un jamon
// 	Si no es ganador también debe mostrarse un mensaje


// const GANADOR = 53930


// let ticket = prompt('Ingrese el numero de ticket')

// // Tenemos que condicionar, 
// // si (if) ticket es igual a GANADOR, entonces gana
// // si no (else), entonces a seguir participando
// if (ticket == GANADOR) {
// 	// Bloque de codigo a ejecutar
// 	alert('Te ganaste la loteria 💲💲💲')
// } else {
// 	alert('Segui participando')
// } 

// // // ticket == GANADOR
// // if (ticket != GANADOR) {
// // 	// Bloque de codigo a ejecutar
// // 	alert('Segui participando')
// // }

// console.log('Fin del programa')


// Pedir un nombre de usuario y contraseña
// Si coinciden con los datos de admin entonces puede entrar al sistema


// const GANADOR = 53930



// Verificar usuario y pass
// PARA acceder al sistema

// let usuario = prompt('Ingrese nombre de usuario')
// let pass = prompt('Ingrese la contraseña')

// // Verifico nombre de usuario
// if (usuario == 'admin') {
// 	// Verifico la pass
// 	if (pass == '123') {
// 		// Ingrese al sistema

// 		let ticket = prompt('Ingrese el numero de ticket')

// 		if (ticket == GANADOR) {
// 			// Bloque de codigo a ejecutar
// 			alert('Te ganaste la loteria 💲💲💲')
// 		} else {
// 			alert('Segui participando')
// 		} 

// 	} else {
// 		alert('Se ingreso mal la password')
// 	}
// } else {
// 	alert('Se ingreso mal el nombre de usuario')
// }



// console.log('Fin del programa')

//		('string').toLowerCase()      ('string').toUpperCase() 
let nombre  = prompt("Ingresar nombre").toLowerCase()
// Lo que sea que se ingrese pero en minuscula
// PEPE -> me va a a dar error

if ((nombre != "") && (nombre == 'pepe')) {
    alert("Hola Pepeeeeeeee"); 
} else{
    alert("Error: Ingresar nombre válido");
}

console.log('Se ingreso',nombre)