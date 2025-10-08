function mostrarEnElemento(idElemento, mensaje){
    document.getElementById(idElemento).innerHTML = mensaje;
}
function restar(num1, num2){
    let resta = num1 - num2;
    mostrarEnElemento("resta", "El resultado de la resta es: " + resta)
    console.log(resta);
}