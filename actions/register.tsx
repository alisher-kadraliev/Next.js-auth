"use server"

import bcrypt from "bcrypt"
// import {db} from "@/lib/db"
import * as z from "zod"
import { RegisterSchema } from "@/schemas"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
        return { error: 'Invalid Field!' }
    }

    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    


    return { success: "Register success and Email sended!" }
}