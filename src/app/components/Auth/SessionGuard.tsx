"use client";
import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { refreshAccessTokenError } from "@/lib/variable";

export function SessionGuard() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.error === refreshAccessTokenError) signOut();
  }, [session]);

  return null;
}
