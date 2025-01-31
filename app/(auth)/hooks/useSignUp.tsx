import { useRouter } from "next/navigation";
import { createFirebaseUserAccount } from "../services/accounts";
import { toast } from "sonner";
import { useState } from "react";
import { z } from "zod";
import { formSchema } from "../utils";


export default function useSignUp() {
  const router = useRouter()
  const [loading, setLoading] = useState("")

  const handleSignUp = async (values: z.infer<typeof formSchema>) => {
    try {
      await createFirebaseUserAccount({ values, setLoading });
      toast.success("account created");
      router.push("/account/sign-in");
    } catch (error) {
      console.error(error);
      setLoading("");
      return;
    }
  };

  return {
    handleSignUp,
    loading
  };
}
