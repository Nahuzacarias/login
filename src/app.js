import express from "express";
import productRouter from "./routers/products.router.js";
import carritoRouter from "./routers/carrito.router.js";
import mongoose from "mongoose";
import handlebars from "express-handlebars"
import viewsRouter from "./routers/cart.router.js"
//import prodhandlebars from "./src/routers/handlebars.router.js"
//import { Server } from 'socket.io';

const app = express();

// const io = new Server(serverhttp)

app.use(express.json());

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

//app.use(express.static('./public'))
app.use("/products", productRouter);
app.use("/api/carts", carritoRouter);
app.use('/products',viewsRouter)
//app.use('/',prodhandlebars)

//io.on('connection',async(socket)=>{

const uri = "mongodb+srv://zacariasnahu:coder@cluster0.qnpopak.mongodb.net/";

//top-level await
try {
  await mongoose.connect(uri, {
    dbName: "ecommerce",
    
  });
  console.log("DB connected!");
  app.listen(8080, () => console.log("server running"));
//   const response = await userModel.find().explain("executionStats");
} catch (err) {
  console.log(err.message);
}
