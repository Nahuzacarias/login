import { Router } from 'express';

const router = Router();
router.get('/home', async (request, response) => {
    const limite = request.query.limite;
  const prod2 = await prod2.getProducts(limite);
  

  response.render('home',  {prod2} );
});
router.get('realtimeproducts',async(req,res)=>{

  res.render('realtimeproducts',{})
})
export default router;
