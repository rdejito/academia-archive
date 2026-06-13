"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLoadingRouter(delay = 1000) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const push = (path: string) => {
    setLoading(true);

    setTimeout(() => {
      router.push(path);
    }, delay);
  };

  return { loading, push };
}
