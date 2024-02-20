## Notas Clase 2 06-02-2023
-----------------------------------------------------------------------
### Condicionales en JS

Son estructuras sintaticas que sirven para tomar una decisión a partir de una condicion.

Estas variables estan declaradas, pero no definidas, no tienen un valor por eso son undefined

let alumno
let materia

JS recorre el codigo de arriba para abajo

El nombre de variables cons se debe poner en MAYUSUCLA
const GANADOR = 55561
Esto significa que la variable GANADOR sera constante con ese numero

Es muy importante el etodo parse() rse para definir si una variable que es numero poner

let edad = Number(prompt('Ingrese edad'))

-----------------------------------------------------------------------

La diferencia entre alert y console.log, es que basicamente el Alert lo ve el usuario y console.log se ve desde la consola

-----------------------------------------------------------------------

### Estructura del IF

    if (estudiaste) {
        //bloque de codigo a ejecutar
        console.log('Aprobaste el examen');
    }

#### Signos 

== es igual 
=== estrictamente igual - analiza el tipo de Datos
por ejemplo si es == y tenemos '3' como string y 3 como number, JS dira true
por eso se utiliza === para que anlice contenido y tipo de variable


En JavaScript, el operador === se utiliza para comparar dos valores, pero a diferencia del operador ==, el operador === también compara los tipos de datos de los valores. Este operador se llama "igualdad estricta" o "igualdad estricta de valor y tipo".

Cuando utilizas ===, JavaScript compara los valores y los tipos de los valores. Devolverá true si ambos valores son iguales y tienen el mismo tipo de datos. Si los valores son diferentes o tienen tipos de datos diferentes, devolverá false.

Por ejemplo:

    console.log(5 === 5);      // true, los dos son números y tienen el mismo valor
    console.log(5 === '5');    // false, aunque tienen el mismo valor, uno es un número y el otro es una cadena
    console.log(5 === 6);      // false, los valores son diferentes
    console.log(5 === true);   // false, los tipos de datos son diferentes

En resumen, === se utiliza para una comparación más estricta que ==, ya que considera tanto el valor como el tipo de datos. Es una buena práctica usar === en lugar de == para evitar errores inesperados y asegurarte de que las comparaciones sean precisas.


!= es diferente
!== es estrictamente distinto


    > Mayor
    >= Mayor Igual
    < Menor
    <= Menor igual

Ejemplo

    if (ticket==GANADOR){
        alert('Ganaste')
    }

    if (ticket != GANADOR){
        alert('No ganaste')
    }

-----------------------------------------------------------------------

Sumamos el ELSE / Siempre se abre {} al final del cierre del IF } 

    if (ticket==GANADOR){
        alert('Ganaste')
    } else {
    alert('No Ganaste')
    }

-----------------------------------------------------------------------


Sumamos ELSE IF  - es una mezcla entre el elsa y el IF , este coloca luego del IF, pero no al final, ya que al final de todo va el ELSE solo

Condiciones anidadas 

    if / else if / else

    let edad = 95;

    if (edad < 18) {
        alert("Nada de alcohol ni fiesta");
    } else if (edad < 30) {
        alert("Todavia de falta experiencia");
    } else if (edad < 55) {
        alert("No sabes que es tik tok");
    } else if (edad < 85) {
        alert("Ya es hora de retirarse");
    } else {
        alert("Te pasaste de experiencia 💀");
    }

-----------------------------------------------------------------------

Operadores LOGICOS

En estos operadores, se pueden poner 2 condicionales YY - && - y  OO - || 


SI y SI Para que sea TRUE deben cumplirse ambos

Por ejemplo >>

 if ((nombre == "Don") && (apellido == "Pepe")) 



UNO u OTRO Para que sea TRUE deben cumplirse ambos

Por ejemplo >> 

    if ((nombre == "Don") || (apellido == "Pepe")) 


    let nombre   = prompt("Ingresar nombre");
    let apellido = prompt("Ingresar apellido");

    if ((nombre == "Don") && (apellido == "Pepe")) {
        alert("Hola Pepe, bienvenido al club, vamos a comer jamon"); 
    } else{
        alert("Error: Usuario desconocido");
    }

-----------------------------------------------------------------------

Mezclando un poco

También es posible combinar || (OR) y && (AND) al igual que un operador matemático (+ - / *) y operar, valga la redundancia, entre booleanos → condiciones

    let nombre  = prompt("Ingresar nombre");

    if ((nombre != "") && ((nombre == "Pepe") || (nombre == "pepe"))) {
        alert("Hola Pepeeeeeeee"); 
    } else{
        alert("Error: Ingresar nombre válido");
    }

-----------------------------------------------------------------------


![alt text](image-1.png)

![alt text](image-2.png)

-----------------------------------------------------------------------

Operador NOT

El ! es el NOT , es una negacion

!estudia 

Sirve para cambiar un valor a un booleano de TRUE a FALSE 