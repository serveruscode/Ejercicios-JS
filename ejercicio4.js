/**
 * Escriba un programa que muestre la tabla de 
 * multiplicar del 1 al 10 del número ingresado por el usuario.
 * 
 * Estructura repetitiva
 * for, while, do while
 * foreach = solo trabaja con arreglos
 */

let tabla = 12;
let result;

for(let i=1; i <= 10; i++){ 
    result = tabla * i;
    console.log(tabla + "*" + i + "=" + result);
}

let k = 1;
while(k <= 10){
    result = tabla * k;
    console.log(tabla + "*" + k + "=" + result);
    k++;
}


let j = 1;
do{
    result = tabla * j;
    console.log(tabla + "*" + j + "=" + result);
    j++;
}while(j <= 10)


