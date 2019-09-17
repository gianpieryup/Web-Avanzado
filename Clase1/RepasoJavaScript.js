//----------------Ejercicios de repaso
/* Ejercicio 1: Escribir un programa que permita ingresar la edad de una persona en años y la
convierta a días, imprimiendo el resultado. Considerar que todos los años tienen 365 días.*/
function conversorEdad(años){
    return años*360;
}
console.log(conversorEdad(5));
/*Ejercicio 2: Leer una medida en metros e imprimir esta medida expresada en centímetros,
pulgadas, pies y yardas. Los factores de conversión son:
• 1 pie = 12 pulgadas • 1 yarda = 3 pies • 1 pulgada = 2,54 cm. • 1 metro = 100 cm.*/
function multiConversor(metros) {
    var centimetros = metros *100;
    console.log("En centimetros: " + centimetros );
    var pulgadas = centimetros/2.54;
    console.log("En pulgadas: " + pulgadas);
    var pies = 12*pulgadas;
    console.log("En pies: " + pies);
    var yardas = 3*pies;
    console.log("En yardas: " + yardas);   
}

/* Ejercicio 3: Ingresar tres números enteros, calcular su promedio y mostrarlo por pantalla.*/
function promedio(a,b,c) {
    return (a+b+c)/3;
}
console.log(promedio(1,2,3));

/*Ejercicio 4: Leer un período en segundos e imprimirlo expresado en días, horas, minutos y
segundos. Por ejemplo, 200000 segundos equivalen a 2 días, 7 horas, 33 minutos y 20
segundos.*/
function segundosADias(segundos) {
    var dias = Math.trunc(segundos/86400);
    segundos = segundos - dias*86400;    
    var horas = Math.trunc(segundos/3600);
    segundos = segundos - horas*3600;
    var minutos = Math.trunc(segundos/60);
    segundos = segundos - minutos*60;
    console.log(dias + " Dias, " + horas + " horas, " + minutos + " minutos y " + segundos+" segundos");
}
segundosADias(200000);

/*Ejercicio 5: Una inmobiliaria paga a sus vendedores un salario de $800, más una comisión
de $50 por cada venta realizada, más el 5% del valor de esas ventas. Realizar un programa
que imprima el número del vendedor y el salario que le corresponde en un determinado
mes. Se leen el número del vendedor, la cantidad de ventas que realizó y el valor total de
las mismas.*/
function salario(numVendedor,cantVentas,valorTotal) {
    var salario =  800 + 50*cantVentas + 0.05*valorTotal;
    console.log("El vendedor es " + numVendedor + " con un salario de " + salario);  
}
salario(51200,10,500);

//----------------Estructuras iterativas
/* Ejercicio 1: Realizar un programa para ingresar desde el teclado un conjunto de números.
Mostrarlos a medida que se los ingresa. Finalizar la lectura de datos con el valor -1.*/
function consola(params) {
    while(params != -1 /*El valor de la consola es != -1 */){
        console.log(params);        
    }
}

/* Ejercicio 2: Realizar un programa para ingresar desde el teclado un conjunto de números. Al
finalizar mostrar por pantalla el primer y último elemento ingresado. Finalizar la lectura con
el valor -1.*/


/* Ejercicio 3: Realizar un programa para ingresar desde el teclado un conjunto de números e
informar si la cantidad de elementos es impar o par, sin utilizar contadores. Finalizar la
lectura de datos con el valor -1.*/


/* Ejercicio 4: Realizar un programa para ingresar desde el teclado un conjunto de números e
informar el último elemento ingresado en una posición par. Finalizar la lectura de datos con
el valor -1.
Ejemplos: Si la secuencia es 3 7 4 5 6 7 9 -1 el valor a informar es 7 Si la secuencia es 3 7 4
5 -1 el valor a informar es 5
Ejercicio 5: Realizar un programa para ingresar desde el teclado un conjunto de números e
informar los elementos ingresados menores a un valor ingresado previamente. Finalizar la
lectura de datos con el valor -1. */


/*Ejercicio 15: Leer diez números e imprimir el mayor, el menor y el rango del conjunto (El
    rango de un conjunto se calcula restando el mayor menos el menor).*/
//DUDAS EL 15
