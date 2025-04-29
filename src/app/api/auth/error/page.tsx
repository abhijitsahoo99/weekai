"use client";

import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {error === "Configuration"
              ? "There is a problem with the server configuration."
              : error === "AccessDenied"
              ? "You do not have permission to sign in."
              : error === "Verification"
              ? "The sign in link is no longer valid."
              : "An error occurred during authentication."}
          </p>
        </div>
        <div className="mt-5">
          <button
            onClick={() => signIn("google", { callbackUrl: "/" })}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#5657F0] hover:bg-[#4647d0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5657F0]"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
