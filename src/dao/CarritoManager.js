import fs from 'fs'

export class CarritoManager {
   constructor() {
      this.path = "CarritoManager.json"
      this.Carrito = [];

   }

   getCarrito = async () => {
      try {
         const data = await fs.promises.readFile(this.path, "utf-8");
         if (data) {
            const carro = JSON.parse(data);
            return carro;
         } else {
            return [];
         }
      } catch (error) {
         console.log(error);
      }
   }


 addCarrito = async () => {

   const carro = await this.getCarrito();

   let producto = {

      products:[],

   }
   if (carro.length === 0) {
      producto.id = 1;
   } else {
      producto.id = carro[carro.length - 1].id + 1;
   }
   carro.push(producto);

   try {
      await fs.promises.writeFile(this.path, JSON.stringify(carro, null, "\t"));
      return carro
   } catch (error) {
      console.error("Error al escribir en el archivo:", error);
   }
}

addproducttocart=async(productId,cartId,quantity)=>{
   try{
      const carts = await this.getCarrito()
      const cartIndex = carts.findIndex(elem => elem.id == cartId)
      if (cartIndex == -1) return 'El Carrito no existe'
      const products = carts[cartIndex].products
      const productIndex = products.findIndex(elem => elem.product == productId)
      if (productIndex == -1) {
          products.push({product: parseInt(productId), quantity: quantity})
      } else {
          products[productIndex].quantity += quantity
      }
      await fs.promises.writeFile(this.path, JSON.stringify(carts, null,'\t'))
      return (carts)
  }
catch{

   console.error("No se puede agregar al carrito")
}
}

}




