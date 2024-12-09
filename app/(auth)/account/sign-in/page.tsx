"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema } from "../../utils"

import { Button } from "@/components/ui/button"
import {
  Form, FormControl, FormField,
  FormItem, FormLabel, FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

import { signInUser } from "../../services/accounts"
import { Loader2Icon } from "lucide-react"
import { useRouter } from "next/navigation"



export default function Signin() {
  const router = useRouter()
  const [loading, setLoading] = useState("")
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        email: "",
        password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    try {
      await signInUser({values, setLoading})
      router.push("/recipes")
    } catch (error) {
      console.log(error)
      return
    }
  }
  
  return (
    <section className="w-[30%] mx-auto mt-20 border border-gray-200 p-10
    rounded">
     <div className="flex flex-col items-center justify-center mb-2">
      <h1 className="font-bold text-2xl mb-1">Cookio</h1>
      <div>Welcome back!</div>
     </div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Email</FormLabel>
              <FormControl className="focus:outline-offset-0">
                <Input
                 type="email"
                 className="focus:outline-offset-0 focus:outline-ring-0"
                 required
                 placeholder="email" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                 type="password"
                 required
                 placeholder="******" {...field}
                />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit"
        className="w-full bg-orange-color hover:bg-orange-color
        active:bg-orange-500 font-bold flex items-center justify-center">
          {loading === "loading" ? (
            <Loader2Icon className="w-4 h-4 animate-spin" />
          ): "Sign in"}
        </Button>
        <div className="flex items-center justify-center">
          {loading === "error" && (
            <span className="text-red-400">Error, try again</span>
          )}
        </div>
      </form>
    </Form>
    </section>
  )
}
