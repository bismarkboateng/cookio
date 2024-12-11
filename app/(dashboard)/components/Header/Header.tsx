"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Loader2Icon, Plus } from "lucide-react";
import Logo from "@/components/Logo";

import { LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { clearUserSession, getUserSession } from "@/app/(auth)/helpers";

import { useAuthStore } from "@/store/auth/auth-store";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase-config";



export default function Header() {
  const { isAuth, setAuth } = useAuthStore((state) => state);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSession = async () => {
      const value = await getUserSession();
      if (value) {
        setAuth();
      }
    };

    fetchSession();
  }, [setAuth]);

  async function onLogoutHandler() {
    setLoading(true)
    signOut(auth).then( async () => {
      console.log("signed out")
      await clearUserSession()
   }).catch((error) => {
       console.error(error)
       setLoading(false)
   })
   setLoading(false)
  }

  return (
    <section className="flex justify-between mt-7">
      <section className="flex items-center gap-8">
        <Logo />
      </section>

      {isAuth ? (
        <section className="flex items-center gap-3">
          <Link href="/recipes/add">
            <Button
              className="bg-orange-color hover:bg-orange-color active:bg-orange-color
        text-white text-sm rounded-3xl"
            >
              <Plus />
              <span>Add Recipe</span>
            </Button>
          </Link>
          <div
            className="bg-gray-100 p-2 rounded-full hover:bg-orange-color hover:text-white
      transition-all duration-500"
            onClick={onLogoutHandler}
          >
            {loading ? (
              <Loader2Icon className="w-4 h-4 animate-spin" />
            ) : (
              <LogOut
                onClick={onLogoutHandler}
                className="text-sm cursor-pointer"
                size={18}
              />
            )}
          </div>
        </section>
      ) : (
        <section className="flex items-center gap-3">
          <Link href="/account/sign-in">
            <Button
              className="bg-orange-color hover:bg-orange-color active:bg-orange-color
        text-white text-sm rounded-3xl"
            >
              Sign in
            </Button>
          </Link>
        </section>
      )}
    </section>
  );
}
