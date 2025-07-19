import z, { email } from "zod"

export const signInSchema= z.object({
 email:z.string(),
 password:z.string().min(8).max(25),
 name:z.string().min(3).max(50),
 photo:z.string().optional()
})


