var num1 = Number(prompt("Dame un número"));
var num2 = Number(prompt("Dame otro número"));
var opera = prompt("Qué operación quieres hacer: + , - , * , /");

var result;

switch(opera) {
    case "+":
        result = num1 + num2;
        alert("Has elegido SUMAR y el resultado es " + result);
        break;
    case "-":
        result = num1 - num2;
        alert("Has elegido RESTAR y el resultado es " + result);
        break;
    case "*":
        result = num1 * num2;
        alert("Has elegido MULTIPLICAR y el resultado es " + result);
        break;
    case "/":
        if(num2 === 0){
            alert("No puedes dividir entre 0");
        } else {
            result = num1 / num2;
            alert("Has elegido DIVIDIR y el resultado es " + result);
        }
        break;
    default:
        alert("Operación no válida. Solo puedes usar + , - , * , /");
}
