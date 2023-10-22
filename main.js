const boton = document.getElementById("boton");
const nombre_prod=document.getElementById("nombre_productos");
const cajas=document.getElementById("cajas");
const ing_indv=document.getElementById("valor_individual");
let notificacion=document.getElementById("not");
let lista_productos;

const recienLlegado=prompt("Cuantos productos va ingresar");
let contador_clicks=0;
let lista_llena_productos=[];

boton.addEventListener('click',()=>{
    if(contador_clicks<recienLlegado){
        notificacion.textContent=`Se agrego el producto n°${contador_clicks+1}`
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

        crearTabla();
        console.log(`Su stock tiene ${lista_llena_productos.length}`);

        for (let i = 0; i < lista_llena_productos.length; i++) {

            console.log(`Producto n°${i}
                        ${lista_llena_productos[i]["nombre producto"]}
                        ${lista_llena_productos[i]["cuantas cajas"]}
                        ${lista_llena_productos[i]["cuantos articulos indv"]} `);
               
        }
    }
    
}
let contenedor=document.querySelector(".contenedor_tabla")
const crearTabla=()=>{
    
    
    let tabla=
    `<table><thead><tr><th>NOMBRE DE PRODUCTO</th><th>CAJA DE PRODUCTO</th><th>UNIDADES POR CAJA</th></tr></thead><tbody>`;
    
    for ( i = 0; i < lista_llena_productos.length; i++) {
        
        tabla += `<tr><td>${lista_llena_productos[i]["nombre producto"]}</td><td>${lista_llena_productos[i]["cuantas cajas"]}</td><td>${lista_llena_productos[i]["cuantos articulos indv"]}</td></tr>`;
        
    }
    
    tabla +=`</tbody></table>`;
    contenedor.innerHTML=tabla
    console.log(tabla);
}










