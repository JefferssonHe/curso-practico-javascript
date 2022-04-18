/* function suma(lado1,lado2){
    return parseInt(lado1+lado2);
}
function multi(lado1,lado2){
    return parseInt(lado1*lado2);
}

 */

function calcularSuma(){
    var numero1 =parseInt(document.getElementById("NumeroUno").value);
    var numero2=parseInt(document.getElementById("NumeroDos").value);


    var calculo=numero1+numero2;
    alert(calculo);
    console.log(calculo);

}

function calcularMultiplicacion(){
    var numero1 =parseInt(document.getElementById("NumeroUno").value);
    var numero2=parseInt(document.getElementById("NumeroDos").value);


    var calculo=numero1*numero2;
    alert(calculo);
    console.log(calculo);

}


function calcularRaiz(){

    var numero1 =parseInt(document.getElementById("NumeroUno").value);
var calculo=Math.sqrt(numero1).toFixed(2);
alert(calculo);

}

function calcularDescuento(){
var numero3=parseInt(document.getElementById("NumeroTres").value);
var numero4=parseInt(document.getElementById("NumeroCuatro").value);

const d=(numero3*(100-numero4)/100).toFixed(3);


const respuesta=document.getElementById("respuesta");
respuesta.innerText=d;




alert(d);
console.log({
numero3,
numero4,
d
});



}


