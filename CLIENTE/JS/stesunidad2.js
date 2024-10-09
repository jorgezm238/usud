function testUnidad2_1(){
    let nombre;
    let nota;
    nombre=prompt('Escriba nombre: ','');
    nota=prompt('Escriba su nota: ','');
    if (nota >= 5 ) {
        alert(nombre + ' está aprobado con un ' + nota);
    } else {
        alert(nombre + ' está suspenso con un ' + nota);
    }
}

function testUnidad2_2(){
    let num1,num2;
    num1=prompt ('Introduce el primer numero: ')
    num1=parseInt(num1);
    num2=prompt ('Introduce el segundo numero: ')
    num2=parseInt(num2);

    if (num1 > num2) {
        alert('El mayor es el ' + num1);
    } else {
        alert('El mayor es el ' + num2); 
       }
} 