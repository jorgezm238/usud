function vernumeros() {
    /*
        Hacer un programa que contenga una 
        función llamada vernumeros() 
        que permita visualizar los 10
        primeros números tantas veces como queramos
    */
    let final = prompt('Cuantas vezes quieres ver los 10 primeros numeros?');
    parseInt(final);
        for (let i=1; i<=final; i++){
            for (let i = 0; i <= 10; i++) {
                    document.write(i," ");
            }
            document.write("<br>");
        }
    }


    function multiplode3() {
        
/*Ejercicio 2.
Hacer un programa mediante una función que verifique si un número es múltiplo de 3.
Que el script se pueda repetir si el usuario quiere*/ 


       
     let continuar ='si';
       do {
        let numero =prompt('Introduce un numero');
        parseInt(numero);   
        if (numero %3 ==0) {
           alert(numero + " es multiplo de 3.");
        } else {
           alert("No es multriplo de 3.");
        }
         continuar = prompt('Quieres continuar?').toLowerCase();
       } while (continuar === 'si');

       alert('FIN DE PROGRAMA')

    }

    function recibir() {
/*Ejercicio 3.
Hacer un programa mediante una función que reciba tres valores y devuelva el mayor de ellos.*/
    
let valor1 = prompt('Introduce el primer valor: ')
let valor2 = prompt('Introduce el segundo valor: ')
let valor3 = prompt('Introduce el tercer valor: ')

if ((valor1>valor2) && (valor1>valor3)) {
    alert("El " + valor1 + " es el mayor")
}
else if ((valor2>valor1) && (valor2>valor3)) {
    alert("El " + valor2 + " es el mayor")
}
else if ((valor3>valor1) && (valor3>valor2)) {
    alert("El " + valor3 + " es el mayor")
}
alert('FIN DE PROGRAMA')
}

function ej4() {
    /*Ejercicio 4.
Hacer un programa mediante una función que permita introducir el nombre de usuario, el nombre
del servidor y el dominio y nos devuelva la dirección de correo electrónica.
 */
let usuario = prompt('Introduce el nombre del usuario: ');
let servidor = prompt('Introduce el nombre del servidor: ');
let domimio = prompt('Introduce el nombre del dominio: ');

let direccionCorreo = usuario + "@" + servidor + "." + domimio;
    //alert(nombre + servidor + dominio + " @gmail.com"); 
alert('La direccion de correo es: ' + direccionCorreo);



}