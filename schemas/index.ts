import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, {
        message: "Password is required(edited)"
    })
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "email is required"
    }
    ),
    password: z.string().min(6, {
        message: "minimum 6 characters required(edited)"
    }),
    name: z.string().min(3, {
        message: "Name is required"
    })
})