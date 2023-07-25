const socket = io ()

socket.on('products',async(data)=>{

const listaproducts=document.getElementById('mensajes')
let products= ''
data.foreach(product=>{
products += <><h2>{product.title}</h2>
<h2>{product.description}</h2>
<h2>{product.price}</h2>
<h2>{product.code}</h2>
<h2>{product.stock}</h2>
<h2>{product.category}</h2>
</>


})
listaproducts.innerHTML = products
})