"use client";
import Home from "@/components/home/Home";
import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";

const MainPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, []);
  return (
    <Suspense fallback={"loading..."}>
      <main className="main_container">
        <Home />
      </main>
    </Suspense>
  );
};

export default MainPage;
