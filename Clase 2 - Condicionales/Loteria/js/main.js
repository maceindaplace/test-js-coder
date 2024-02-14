


const GANADOR = 53930



let usuario = prompt('Ingrese nombre de usuario')
let pass = prompt('Ingrese su clave de acceso')

if (usuario == 'admin') {
    //verifico pass
    if (pass == '123') {
        //ingreso al sistema

        let ticket = Number(prompt('Ingrese numero de ticket'))

        if (ticket == GANADOR) {
            alert('Ganaste la loteria!!')

        } else {
            alert('No ganaste esta vez')
        }
    }else{
        alert('Se ingreo mal el password')
    }
}else{
    alert('Se ingreso mal el usuario')
}





console.log('FIn del programa')