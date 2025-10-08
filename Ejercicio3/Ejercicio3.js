function sumar(num1, num2){
    suma = num1 + num2;
    console.log(suma);
}

function restar(num1, num2){
    resta = num1 - num2;
    console.log(resta);
}

function multiplicar(num1, num2){
    multiplicacion = num1 * num2;
    console.log(multiplicacion);
}

function dividir(num1, num2){
    if(num2 == 0){
        console.log("No se puede dividir entre 0")}
    else{
        division = num1 / num2;
        console.log(division);}
}
sumar(7, 12);
restar(300, 12);
multiplicar(8, 7);
dividir(8, 0);