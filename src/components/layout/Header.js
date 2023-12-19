"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session = useSession();
  console.log(session);9
  const status = session.status;
  return (
    <>
      <header className="flex items-center justify-between">

        <Link href={"/"}
          className="text-primary font-semibold text-2xl">
          COZY PIZZA
        </Link>

        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={" "}>Menu</Link>
          <Link href={" "}>About</Link>
          <Link href={" "}>Contact</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          {status === 'authenticated' && (
            <button
              onClick={() => signOut()}
              className="bg-primary rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2
          ">
              Logout
            </button>
          )}
          {status === 'unauthenticated' && (
            <>
              <Link href={'/register'}> Register </Link>
              <Link href={'/login'}
                className="bg-primary rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2
            ">
                Login
              </Link>
            </>
          )}

        </nav>
      </header>
    </>
  )
}

export default Header;

// bg - primary text - white px - 8 py - 2 rounded - full