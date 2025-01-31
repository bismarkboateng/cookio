"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { formSchema, signUpDefaultValues } from "../../utils"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import Logo from "@/components/composites/logo/logo"
import Link from "next/link"
import useSignUp from "../../hooks/useSignUp"
import { Loader2Icon } from "lucide-react"



export default function Page() {
  const { handleSignUp, loading } = useSignUp()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: signUpDefaultValues,
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    handleSignUp(values)
  } 
  
  return (
    <section className="w-[90%] md:w-[50%] lg:w-[35%] xl:w-[30%]
    2xl:w-[25%] mx-auto mt-20 border border-gray-200 p-10 rounded">
     <div className="flex flex-col items-center justify-center mb-2">
      <Logo />
      <div className="mt-5 mb-5">Create an account with us!</div>
     </div>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <FormField
          control={form.control}
          name="FullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Full Name</FormLabel>
              <FormControl className="focus:outline-offset-0">
                <Input
                 type="text"
                 className="shad-input input-hover focus:outline-offset-0 focus:outline-ring-0"
                 required
                 placeholder="Enter your name" {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="">Email</FormLabel>
              <FormControl className="focus:outline-offset-0">
                <Input
                 type="email"
                 className="shad-input input-hover focus:outline-offset-0 focus:outline-ring-0"
                 required
                 placeholder="Enter your email" {...field}
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
                 className="shad-input input-hover"
                 {...field}
                />
              </FormControl>              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit"
        className="w-full bg-green hover:bg-green
        active:bg-green font-bold flex items-center justify-center">
          {loading === "loading" ? (
            <Loader2Icon className="w-4 h-4 animate-spin" />
          ): "Sign up"}
        </Button>
        <div className="flex items-center justify-center">
          {loading === "error" && (
            <span className="text-red-400">Error, try again</span>
          )}
        </div>
      </form>
      <div className="text-xs">
        Already have an account? <Link href="/account/sign-in" className="text-green underline">Sign in</Link>
      </div>
    </Form>
    </section>
  )
}