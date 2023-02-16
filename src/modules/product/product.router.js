import express from "express"
import * as productcontroller from './product.controller.js'
const productRouter=express.Router()

productRouter.get('/',productcontroller.getAllproduct)

productRouter.get('/getproduct',productcontroller.getproduct)
  
productRouter.post('/',productcontroller.addproduct)
 
productRouter.put('/',productcontroller.updateproduct)
 
productRouter.delete('/',productcontroller.deleteproduct)
 
 export default productRouter;