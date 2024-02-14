




// // De la clase anterior vimos el siguiente ejercicio

// // Para ayudar a un profesor con su clase 👇👇👇
// //      > Declarar una variable alumno y materia
// //      > Declarar 3 variables nota
// //      > Calcular el promedio de las notas
// //      > Mostrar el promedio + el nombre del alumno


// let alumno = prompt('Ingrese el nombre del alumno');
// let materia = prompt('Ingrese la materia cursada');


// let nota1 = Number(prompt('Ingrese la primer nota'));
// let nota2 = Number(prompt('Ingrese la segunda nota'));
// let nota3 = Number(prompt('Ingrese la tercer nota'));

// let promedio = (nota1 + nota2 + nota3) / 3;

// // alert('El promedio del alumno ' + alumno + ' en ' + materia + ' es ' + promedio);


// //Si Aprubea, lo felicitamos
// let aprobar 


// if (promedio>6) {
//     aprueba=true;
//     console.log('Felicitaciones ' + alumno + ' Aprobaste con ' + promedio );
// }

// console.log('Saliste del programa');

// // Esta bien que use alert o mejor uso console.log?


let nombre  = prompt("Ingresar nombre").toLowerCase();

if ((nombre != "") && ((nombre == "Pepe") || (nombre == "pepe"))) {
    alert("Hola Pepeeeeeeee"); 
} else{
    alert("Error: Ingresar nombre válido");
}
