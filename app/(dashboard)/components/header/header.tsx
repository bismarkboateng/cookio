"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CircleUserRound, Loader2Icon, Plus } from "lucide-react";
import Logo from "@/components/composites/logo/logo";

import { LogOut } from "lucide-react";
import { useEffect } from "react";
import { getUserSession } from "@/app/(auth)/helpers";
import { useAuthStore } from "@/store/auth/auth-store";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Text from "@/components/ui/text";
import useLogout from "@/app/(auth)/hooks/useLogout";

export default function Header() {
  const { onLogoutHandler, loading } = useLogout();
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

  async function onLogout() {
    onLogoutHandler();
  }

  return (
    <section className="flex justify-between items-center mt-7">
      <section className="flex items-center gap-8">
        <Logo />
      </section>

      {isAuth ? (
        <section className="flex items-center gap-3">
          <Link href="/recipes/add">
            <Button
              className="bg-green hover:bg-green active:bg-green
              text-blank text-sm rounded-3xl text-white"
            >
              <Plus />
              <span>Add Recipe</span>
            </Button>
          </Link>

          <Dialog>
            <DialogTrigger>
              <div
                className="bg-g p-2 rounded-full  bg-gradient-to-tr from-[#3898EC]
                  to-green transition-all duration-500 hover:bg-green"
              >
                <CircleUserRound className="text-sm cursor-pointer text-white" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Your Profile</DialogTitle>
                <DialogDescription>Personal Information.</DialogDescription>
              </DialogHeader>
              <section className="flex flex-col">
                <div>Username</div>
                <div>Email</div>
                <div>Password</div>

                <div className="flex flex-row gap-5 mt-3">
                  <Button className="w-[25%] bg-green hover:bg-green active:bg-green text-white">
                    Update
                  </Button>
                  <Button
                    className="w-[25%] bg-transparent hover:bg-transparent border border-green
                      hover:border-green active:border-green text-black"
                  >
                    {loading ? (
                      <Loader2Icon className="w-4 h-4 animate-spin text-white" />
                    ) : (
                      <>
                        <Text className="text-green">Logout</Text>
                        <LogOut
                          onClick={onLogout}
                          className="text-sm cursor-pointer text-green"
                          size={18}
                        />
                      </>
                    )}
                  </Button>
                </div>
              </section>
            </DialogContent>
          </Dialog>
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
