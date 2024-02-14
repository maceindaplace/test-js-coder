NOTAS 02/02/23
En TERMINAL .exit para salir 

VARIABLES
- Las variables deben ser descriptivas sobre lo que vamos a guardar en ella.
- Se puede por let, var, cons 
- Las variables del tipo CONS > no se pueden modificar, deben ser constantes
- Las variables del tipo LET > pueden cambiar su valor

Hay muchas palabras reservadas que no se pueden utilizar
Las variables string llevan comillas "variable"
Datos numericos, string y true/false 
No hay diferencias entre comillas dobles y simples? / Dudas

Consola

- En la consola del navegador se puede correr JS, esto desde el inspector del navegador
- Para ver resultados y debug
- Con Ctrl + L  se limpia la consola 

CONECTAR JS con HTML

<script src="/js/testing.js"></script>

Nunca se pone en el head, se tiene que poner arriba del cierre </body>
Al cerrar las lineas de codigo de JS se ponen punto y coma ;

Para comentar en JS //
Atajo para comentar Ctrl + / o en Mac Cmnd + /
Para mover las lineas arriba o abajo presionando ALT y flecha arriba o abajo

Las cadenas de texto se concatenar - concatenar

Si concateno string "911" + 1  > dara como resultado string "9111"
Pero si hacemos string "911" - 1  > dara como resultado un numero y hara la resta 910 /


CONSOLE LOG


CUADRO PROMPT / Para que el usuario ingrese

let nombre = PROMPT('Por favor ingrese su nombre')

Este comando siempre es STRING

Para solucionar esto se puede poner Number(PROMPT('Por favor ingrese su nombre'))

CUADRO ALERT / Interrumpe el flujo y el usuario debe aceptar para seguir
