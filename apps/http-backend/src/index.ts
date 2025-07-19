import express from "express"
import dotenv from 'dotenv'
import {signInSchema} from "@repo/common/types"
import {prismaClient}  from "@repo/db/client"
const app= express()

dotenv.config()
app.use(express.json())

app.post("/signin",async(req,res)=>{
  const data = signInSchema.safeParse( req.body);
if(!data.success){
    return res.status(400).json({
      message: 'Invalid input',
      errors: data.error.flatten(),
    });
}
const {email,password}= data.data
const existingUser= prismaClient.user.findFirst({
  where:{
    email
  },
})
console.log(existingUser)
return res.json(400)
})



app.listen(3001,()=>{
console.log(`✅ Server started successfully! Listening at http://localhost:3001`);
})

