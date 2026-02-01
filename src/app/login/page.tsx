"use client";

import { useToast } from "@/hooks/use-toast";
import { login, signup } from "./actions";
import { useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";
import Link from "next/link";

function LoginContent() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const error = searchParams.get("error");
  const message = searchParams.get("message");

  // Show toast message based on the query parameter
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Uh Oh! Something went wrong.",
        description: error.replace(/-/g, " "),
      });
    }

    if (message) {
      toast({
        variant: "success",
        title: "Successful",
        description: message.replace(/-/g, " "),
      });
    }
  }, [error, message, toast]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div>
          <h2 className="text-center text-5xl font-extrabold font-spaceGrotesk tracking-tight text-gray-900">
            Home Finance Malaysia
          </h2>
          <p className="mt-3 text-center text-md text-gray-600">
            Welcome! Please sign in to continue
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4 rounded-md">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 block w-full rounded-md border border-gray-500 px-3 py-2 shadow-sm focus:border-violet-500 focus:outline-none focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <button
              formAction={login}
              className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Log In
            </button>
            <button
              formAction={signup}
              className="flex w-full justify-center rounded-md bg-black text-white px-3 py-3 text-lg font-semibold shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 hover:bg-gradient-to-r hover:from-[#47FFDF] hover:to-[#755FF5] border-black"
            >
              Create Account
            </button>
          </div>

          <Link href={`${baseUrl}/forgot-password`} className="opacity-80">
            <p className="text-center underline capitalize hover:text-teal-500 mt-4">Forgot your password?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
