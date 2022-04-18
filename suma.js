function suma(lado1,lado2){
    return parseInt(lado1+lado2);
}
function multi(lado1,lado2){
    return parseInt(lado1*lado2);
}

function calcularSuma(){
    var numero1 =parseInt(document.getElementById("NumeroUno").value);
    var numero2=parseInt(document.getElementById("NumeroDos").value);


    var calculo=suma(numero1,numero2);
    alert(calculo);
    console.log(calculo);
    document.writeln(calculo);
}

function calcularMultiplicacion(){
    var numero1 =parseInt(document.getElementById("NumeroUno").value);
    var numero2=parseInt(document.getElementById("NumeroDos").value);


    var calculo=multi(numero1,numero2);
    alert(calculo);
    console.log(calculo);
    document.writeln(calculo);
}





