import express from 'express';
import { dbconnection } from './database/dbconnection.js';
import productRouter from './src/modules/product/product.router.js';
import userRouter from './src/modules/user/user.router.js';


const app = express()
const port = 3000

dbconnection()
app.use(express.json())
app.use('/users',userRouter)
app.use('/products',productRouter)








app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 