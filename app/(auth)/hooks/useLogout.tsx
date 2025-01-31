import { useState } from "react";
import { clearUserEmailFromCookies, clearUserSession } from "../helpers";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase-config";

export default function useLogout() {
  const [loading, setLoading] = useState(false);

  const onLogoutHandler = async () => {
    setLoading(true);
    signOut(auth)
      .then(async () => {
        await clearUserSession();
        await clearUserEmailFromCookies();
      })
      .catch((error) => {
        console.error(error)
        setLoading(false);
      });
    setLoading(false);
  };
  return {
    onLogoutHandler,
    loading,
  };
}
