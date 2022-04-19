
const lista1=[100,200,300,500,600,700,550,350];
let lista2=[];
const r=parseInt(100*Math.random(1,100));
const sumaLista1=0;
let sumalista2=0;

let sl=0;

for(let i=0; i< 10; i++){
  lista2[i]=parseInt(100*Math.random(1,100));
  sumalista2=sumalista2+lista2[i];
  document.write("Matriz"+"["+i+"]= " +lista2[i]+"<br>");
}

let prom=sumalista2/lista2.length;


/* prom=parseInt(sumalista2/100); */
document.write("SUMA= "+ sumalista2);
document.write("<br>PROMEDIO= "+ prom);

/* function sumarLista(lista){

  for(let j=0 ; j<lista.length; j++){
sl=sl+lista[j];


  }

return sl;

}
 */

function calcularMediaArimetica(lista){

const sumaLista=lista.reduce(
  function(valorAcumulado=0,nuevoElemento ){
    return valorAcumulado+nuevoElemento;
  }


);
const promedioLista=sumaLista/lista.length;

return promedioLista;
}

const array1 = [1, 2, 3, 5];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);


