function testUnidad2()
{
    var cadena = "abc";
    var cadena2 = String ("abc");
    var cadena3 = new String ("abc");

   // console.log(typeof "abc");
    document.write(typeof cadena );
    document.write("</br>");
    document.write(typeof cadena2);
    document.write("</br>");
    document.write(typeof cadena3);
    document.write("</br>");
    document.write(typeof cadena3.valueOf());
    document.write("</br>");
    let longitud = 10;
    longitud = "10";
    document.write(typeof longitud);
    document.write("</br>");
    if(cadena=="abc"){
        var x = 10;
        let y = 11;
    }
    document.write(x);
    document.write("</br>");
    document.write(y);
    document.write("</br>");


    let extLet = 1;
    var extVar = 1;
    if (true) {
    let intLet = 10;
    var intVar = 10;
    console.log("Dentro del bloque");
    console.log("extLet:", extLet);
    console.log("extVar:", extVar);
    console.log("intLet:", intLet);
    console.log("intVar:", intVar);
    }
    console.log("Fuera del bloque");
    console.log("extLet:", extLet);
    console.log("extVar:", extVar);
    console.log("intVar:", intVar);
    console.log("intLet:", intLet);
    
    
}