## Notas Clase 3 - Ciclos

Se les llama Bulces o Iteraciones

-----------------------------------------------------------------------

### Iteraciones o Ciclos Por conteo

Lo ideal es que las iteraciones por CONTEO >> FOR
Lo ideal es que las iteraciones por CONDICIONAL >> WHILE

Se las relaciona con la estructura FOR


    for(desde;condicion;actualizacion){
        alert('Hola Pepe')
    }


    for ( let iterador=0;iterador<10;iterador++){

        alert('Este es el valor del iterador' + iterador)
    }

El ++ lo que hace es sumar 1 al iterador siendo este un numero no string. De 1 en 1

El -- hace lo mismo, pero resta de a 1 .

Las variables que se declaran dentro del FOR solo se usan dentro del FOR y no existen fuera. Ademas, no se pueden declarar dos variables iguales dentro y fuera del FOR ya que dara problemas. 

#### BREAK
el Break es para salir del bucle de forma inmediata, en un momento determinado.
Todo lo que hay por debajo del break no se ejecutara

Salis del FOR o del IF o de donde este

#### CONTINUE
En lugar de cortar/frenar la iteracion, salta o pasa a la siguiente si la hay.
Continua el bucle si se respeta una condicion, avanza el bucle.

Osea que si i=1 y se cumple la condicion del CONTINUE, pasara el bucle a i=2 y no hara la funcion para el i=1.


-----------------------------------------------------------------------

Iteraciones o Ciclos por condicion

Se las relaciona con la estructura WHILE, DO 

#### WHILE

Se traduce como "mientras", "mientras sucede algo hare otra cosa"
Dentro del bucle debe existir algo que corte la condicion, sino sera infinito.

let condicion=true

    while (condicion){
        console.log('Al infinito y mas alla')
    }

Esto va al infinito, porque nada cambia la condicion

---

//WHILE

    let numero = 10

    while (numero == 10) {

        if (prompt('Ingrese 0 para salir') == '0') {
            numero = 0

        }

    }

-----------------------------------------------------------------------



#### DO WHILE



    do {


    } while()