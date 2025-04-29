"use client";

import { signIn, useSession } from "next-auth/react";
import UserMenu from "./UserMenu";

export default function TrialButton() {
  const { data: session } = useSession();

  if (session) {
    return <UserMenu />;
  }

  return (
    <button
      onClick={() => signIn("google")}
      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      Start your 4-weeks free trial
    </button>
  );
}
