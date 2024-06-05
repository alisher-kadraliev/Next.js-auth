"use client"
import * as z from "zod"
import { CardWrapper } from "./card-wrapper"
import { useForm } from "react-hook-form"
import { RegisterSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "../ui/input"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"

export const RegisterForm = () => {
    const [isPending,startTransition] = useTransition()
    const [error,setError] = useState<string | undefined>('')
    const [success,setSuccess] = useState<string | undefined>('')
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name:""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError('')
        setSuccess('')
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
            })
        })
    }
    return (
        <CardWrapper
            headerLabel="Create Account"
            backButtonHref="/auth/login"
            backButtonLabel="Already have account"
        >
            <Form {...form}>
                <form action="" className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="email@gmail.com"
                                        type="email"
                                        disabled={isPending}
                                    >

                                    </Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}>

                        </FormField>
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="*******"
                                        type="password"
                                        disabled={isPending}
                                    >
                                    </Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Your Name" type="text" disabled={isPending}>
                                        
                                    </Input>
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}>

                        </FormField>
                    </div>
                    <FormError message={error}></FormError>
                    <FormSuccess message={success}></FormSuccess>
                    <Button type="submit" className="w-full" disabled={isPending}>Register</Button>
                </form>
            </Form>
        </CardWrapper>
    )
}