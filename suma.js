function suma(lado1,lado2){
    return lado1+lado2;
}




function calcularSuma(){
    const input =document.getElementById("NumeroUno");
    const value=input.value;

    const input1 =document.getElementById("NumeroDos");
    const value1=input1.value1;


    const calculo=suma(value,value1);
    alert(calculo);


}

