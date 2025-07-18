import express from "express"
// import { JWT_SECRET } from '@repo/backend-common/config';
const app = express();
const PORT =3001;
import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET= process.env.JWT_SECRET
app.listen(PORT,()=>{

  console.log(`Http server is listening on the port ${PORT} jwtsecret ye rha ${JWT_SECRET}`)
})