/**
 * 8.Elabore un algoritmo con un menú simple con las cuatro operaciones básicas:
 *  sumar, restar, multiplicar, dividir.
 */

let clave = prompt("        MENU            \n" +
                "[1] SUMAR \n" +
                "[2] RESTAR \n" +
                "[3] MULTIPLICAR \n" +
                "[4] DIVIDIR \n" +
                "[5] SALIR \n \n" );

switch(clave){
    case "1":
        let a = prompt("Digite el valor de a");
        let b = prompt("Digite el valor de b");        
        prompt("El resultado de Sumar a + b = " + (parseFloat(a) + parseFloat(b)));
        
        break;
    case "2":
        let c= prompt("Digite el valor de a");
        let d = prompt("Digite el valor de b");  
        prompt("El resultado de Restar a - b = " + (parseFloat(c) - parseFloat(d)));
    
    break;
    case "3":
        let e = prompt("Digite el valor de a");
        let f = prompt("Digite el valor de b");          
        prompt("El resultado de Multiplicar a * b = " + (parseFloat(e) * parseFloat(f)));
    
    break;
    case "4":
        let g = prompt("Digite el valor de a");
        let h = prompt("Digite el valor de b");          
        prompt("El resultado de Dividir a % b = " + (parseFloat(g) /  parseFloat(h)));
    
    break;
    case "5":        
        prompt("Ha salido de la aplicación ");
    
    break;
}