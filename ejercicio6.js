/** 	Elaborar un algoritmo para leer las notas de 1 estudiantes.
Calcular el promedio de cada estudiante de la siguiente manera:
Nota 1 (20%)
Nota 2 (30%)
Nota 3 (50%)
*/

let nota1 = prompt("Digite la nota 1");
let nota2 = prompt("Digite la nota 2");
let nota3 = prompt("Digite la nota 3");

let promedio = (nota1*0.2) + (nota2*0.3) + (nota3*0.5) 
document.write("La nota del promedio del estudiante es: " + promedio)