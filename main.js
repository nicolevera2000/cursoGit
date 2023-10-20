const boton = document.getElementById("boton");
const nombre_prod=document.getElementById("nombre_productos");
const cajas=document.getElementById("cajas");
const ing_indv=document.getElementById("valor_individual");
let lista_productos;

const recienLlegado=prompt("Cuantos productos va ingresar");
let contador_clicks=0;
let lista_llena_productos=[];

boton.addEventListener('click',()=>{
    if(contador_clicks<recienLlegado){
    lista_productos={
        "nombre producto": `${nombre_prod.value}`,
        "cuantas cajas": `${cajas.value}`,
        "cuantos articulos indv": `${ing_indv.value}`
    }
   lista_llena_productos.push(lista_productos);
    nombre_prod.value="";
    cajas.value="";
    ing_indv.value="";
    metodoPresentar();
    cuandoSellena();
    contador_clicks++;
    }
    else{
        alert("ya no se puede agregar gracias");
        nombre_prod.value="";
        cajas.value="";
        ing_indv.value="";
        
    }

    
})

const metodoPresentar =()=>{
    console.log(`
    Ingreso el producto: ${lista_productos["nombre producto"]}
    Con ${lista_productos["cuantas cajas"]} cajas en el stock
    en cada caja viene ${lista_productos["cuantos articulos indv"]}`);
}

const cuandoSellena=()=>{
    if(lista_llena_productos.length==recienLlegado){
        console.log(`La lista de productos se lleno`);
        for (let i = 0; i < lista_llena_productos.length; i++) {
            console.log(lista_llena_productos[i]);
            
        }
    }
    
}





