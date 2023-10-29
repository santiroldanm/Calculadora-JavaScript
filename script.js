//AGREGAR A LA PANTALLA EL ELEMENTO TOCADO
function agregar(valor) {
    document.getElementById("pantalla").value += valor
}
//BORRAR TODOS ELEMENTOS DE LA PANTALLA
function borrar() {
    document.getElementById("pantalla").value = ''
}
//CALCULAR LO DE LA PANTALLA
function calcular() {
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}

