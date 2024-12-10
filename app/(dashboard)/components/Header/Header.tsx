"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "lucide-react";
import Logo from "@/components/Logo";

import { LogOut } from "lucide-react";
import { LogoutUser } from "@/app/(auth)/services/accounts";
import { useEffect } from "react";
import { getUserSession } from "@/app/(auth)/helpers";
import { useAuthStore } from "@/store/auth/auth-store";

export default function Header() {
  const { isAuth, setAuth } = useAuthStore((state) => state);

  useEffect(() => {
    const fetchSession = async () => {
      const value = await getUserSession();
      if (value) {
        setAuth();
      }
    };

    fetchSession();
  }, [setAuth]);

  const li_styles = "cursor-pointer text-sm font-medium text-black-color";

  return (
    <section className="flex justify-between mt-7">
      <section className="flex items-center gap-8">
        <Logo />
        <ul className="flex items-center gap-5">
          <li className={li_styles}>
            <Link href="/recipes">Recipes</Link>
          </li>
          <li className={li_styles}>Categories</li>
          <li className={li_styles}>Favorites</li>
        </ul>
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
          >
            <LogOut
              onClick={LogoutUser}
              className="text-sm cursor-pointer"
              size={18}
            />
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
