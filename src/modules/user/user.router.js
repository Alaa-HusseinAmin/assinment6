import express from "express"
import * as usercontroller from './user.controller.js'
const userRouter=express.Router()

userRouter.get('/',usercontroller.getAlluser)

userRouter.get('/getstartX',usercontroller.getstartX)

userRouter.get('/getfullyname',usercontroller.getfullyname)

userRouter.get('/getcontainX',usercontroller.getcontainX)

userRouter.get('/getendX',usercontroller.getendX)

 userRouter.post('/signup',usercontroller.signup)

 userRouter.post('/signin',usercontroller.signin)

 userRouter.put('/',usercontroller.updateuser)
 
 userRouter.delete('/',usercontroller.deleteuser)
 
 export default userRouter;