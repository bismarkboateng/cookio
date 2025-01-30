"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signInFormSchema } from "../../utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

import { signInUser } from "../../services/accounts";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import Logo from "@/components/composites/logo/logo";

import { useAuthStore } from "@/store/auth/auth-store";
import Link from "next/link";
import { toast } from "sonner";
import { setEmailInCookies } from "../../helpers";
import Text from "@/components/ui/text";

export default function Signin() {
  const setEmail = useAuthStore((state) => state.setEmail);
  const router = useRouter();
  const [loading, setLoading] = useState("");
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    try {
      const val = await signInUser({ values, setLoading });
      if (!val) {
        toast.error("error, try again");
        return;
      }
      setEmail(values.email);
      await setEmailInCookies(values.email);
      toast.success("signed in");
      router.push("/recipes");
    } catch (error) {
      console.log(error);
      toast.error("error");
      setLoading("");
      return;
    }
  }

  return (
    <section
      className="w-[90%] md:w-[50%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%]
        mx-auto mt-20 border border-gray-200 p-10 rounded shadow"
    >
      <div className="flex flex-col items-center justify-center mb-2">
        <Logo />
        <Text className="mt-5">Hola 👋, Welcome back!</Text>
        <Text className="text-sm text-grey mb-2">
          Enter your credentials to access your account
        </Text>
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
                    className="shad-input focus:outline-offset-0
                  focus:outline-ring-0 input-hover"
                    required
                    placeholder="Enter your email"
                    {...field}
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
          <Button
            type="submit"
            className="w-full bg-green hover:bg-green
        active:bg-green font-bold flex items-center justify-center"
          >
            {loading === "loading" ? (
              <Loader2Icon className="w-4 h-4 animate-spin" />
            ) : (
              "Sign in"
            )}
          </Button>
          <div className="flex items-center justify-center">
            {loading === "error" && (
              <span className="text-red-400">Error, try again</span>
            )}
          </div>
        </form>
        <div className="text-xs">
          Dont have an account?{" "}
          <Link href="/account/sign-up" className="text-green underline">
            Sign up
          </Link>
        </div>
      </Form>
    </section>
  );
}
