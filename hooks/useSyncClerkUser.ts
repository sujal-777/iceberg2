"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { syncUserWithBackend } from "@/pages/api/syncUser";

export const useSyncClerkUser = () => {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    if (isSignedIn && user) {
      syncUserWithBackend(user);
    }
  }, [isSignedIn, user]);
};
