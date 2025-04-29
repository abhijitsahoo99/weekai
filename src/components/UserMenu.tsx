"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const UserMenu = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <div className="relative">
      {session.user.image ? (
        <Image
          src={session.user.image}
          alt={session.user.name || "User"}
          width={40}
          height={40}
          className="object-cover rounded-full border-2 border-white"
        />
      ) : (
        <div className="w-10 h-10 bg-gray-300 flex items-center justify-center text-gray-600 rounded-full border-2 border-white">
          {session.user.name?.charAt(0) || "U"}
        </div>
      )}
    </div>
  );
};

export default UserMenu;
