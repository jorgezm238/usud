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

function testUnidad2_3 () {
    let num1="10"; let num2="0";
    res=num1/num2;
    alert('El resultado es: ' + res);
}

function testUnidad2_4() {
    let nombre, edad;
    nombre=prompt ('Introduce tu nombre: ')
    edad=prompt('Introduce tu edad: ')

    alert(nombre + 'ha vivido ' +  edad*365 + 'dias');
    
}

function testUnidad2_5() {
    let num;
    num=prompt ('Introduce un numero: ')
    document.write('El doble es: ' + num*2 + "<br>" + 'El triple es: ' + num*3 + "<br>" + 'El cuadruple es: ' + num*4)

}

function testUnidad2_6() {
    let a, b;
a= prompt("Escribe la base:")
b= prompt("Escribe la altura:")
alert("Area= " +(a*b/2));

}

function testUnidad2_7(){
    let diametro;
    let radio;
    diametro= prompt("Introduce el diametro: ")
    alert("La longitud es de : " + 3.14*diametro);
    radio = prompt("Introduce el radio: ")
    alert("El area es de: " + Math.PI *(radio*radio));


}

function testUnidad2_8(){
    let nombre;
    let apellido;
    let poblacion;

    nombre=prompt("Introduce tu nombre: ")
    apellido= prompt("Introduce tu primer apellido: ")
    poblacion=prompt("Introduce tu poblacion: ")

    document.write('=======================');
    document.write();
    document.write('Hola, ' , nombre, ' ', apellido);
    document.write('Adios, ' , poblacion);
    document.write('=======================');
    document.write();
    


}