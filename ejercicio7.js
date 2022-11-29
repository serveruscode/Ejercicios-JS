/**7.Elaborar un algoritmo para leer la nota de diez 
 * estudiantes y mostrar cantidad de aprobados y reprobados.
*/

const array = [8,7,7,9,10,2,4,1,5,7];
let contador = 0;
let contadorR = 0;
array.forEach(value => {
    if(value >= 7){
        contador++;
        console.log(value);
    }
})

console.log("Total de APROBADOS: " + contador);

array.forEach(value => {
    if(value < 7){
        contadorR++;
        console.log(value);
    }
})

console.log("Total de REPROBADOS: " + contadorR);