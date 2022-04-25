const salariosCons=colombia.map(

  function(personita){

       personita.salary+=1;
     return personita.salary;
  }

);



const numeros =[1,2,3,4,5,6,7,8,9,];
const dobles =numeros.map(function(numero){

return numero*2;

})

const productos=[
{id:"abc", nombre:"Starboy", precio:6},
{id:"bcc", nombre:"Santa", precio:8},
{id:"cca", nombre:"Renyi", precio:4},
{id:"bca", nombre:"Cuy", precio:2}
];

const productosDescuento=productos.map(function(producto){
  //if(producto.precio<5) return producto

  return{
    ...producto,
    precio: producto.precio * 2, 
    nombre: producto.nombre +"abc" 
  };



});



