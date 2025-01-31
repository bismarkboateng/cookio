import { useState } from "react";
import { signInUser } from "../services/accounts";
import { z } from "zod";
import { signInFormSchema } from "../utils";

import { setEmailInCookies } from "../helpers";
import { useAuthStore } from "@/store/auth/auth-store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function useSignIn() { 
  const setEmail = useAuthStore((state) => state.setEmail)
  const [loading, setLoading] = useState("");
  const router = useRouter()

  const handleSignIn = async (values: z.infer<typeof signInFormSchema>) => {
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
        console.error(error)
        toast.error("error");
        setLoading("");
        return;
      }
  };

  return {
    handleSignIn,
    loading
  };
}
