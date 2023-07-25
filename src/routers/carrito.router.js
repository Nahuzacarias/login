import {Router} from 'express'

const router = Router()

router.post('/',async(request,response)=>{

  const agregarprod = request.body
    const id = await carro.addCarrito(agregarprod)
    console.log(id)
    response.status(200).json({
      status: true,
      data: id,
    })
})

router.get('/:cid',async(request,response)=>{

  const prod = await carro.getCarrito()
  const id = request.params.cid
  const product = await prod.find(item=>item.id==id)
  return response.status(200).json({
    status:true,
    data:product,
    
  })
  
})

router.post('/:cid/products/:pid',async(req,res)=>{

  const id = req.params.cid
  const prod = req.params.pid
  const result = await carro.addproducttocart(id,prod,req.body.quantity)
  return res.status(200).json({
    status:true,
    data:result,
    
  })


})


export default router