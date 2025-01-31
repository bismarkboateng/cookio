"use client";

import { getEmailFromCookies } from "@/app/(auth)/helpers";
import RecipeForm from "@/app/(dashboard)/components/add/add";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface RecipeDetailProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: RecipeDetailProps) {
  const router = useRouter()

  useEffect(() => {
    const fetchUserSession = async () => {
      const email = await getEmailFromCookies();

      if (!email) {
        router.push("/account/sign-in");
      }
    };

    fetchUserSession();
  }, [router]);

  return (
    <section>
      <h1 className="text-2xl mb-2 md:text-4xl text-black-color text-center mt-10">
        Update Recipe
      </h1>
      <section>
        <RecipeForm type="Update" id={params.id} />
      </section>
    </section>
  );
}
