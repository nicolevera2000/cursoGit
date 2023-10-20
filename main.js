const boton = document.getElementById("boton");
const nombre_prod=document.getElementById("nombre_productos");
const cajas=document.getElementById("cajas");
const ing_indv=document.getElementById("valor_individual");
let lista_productos;

boton.addEventListener('click',()=>{
    
    lista_productos={
        "nombre producto": `${nombre_prod.value}`,
        "cuantas cajas": `${cajas.value}`,
        "cuantos articulos indv": `${ing_indv.value}`
    }
    nombre_prod.value="";
    cajas.value="";
    ing_indv.value="";
    
    
})



