import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl"
          href="">COZY PIZZA</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href="">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
          <Link href="" className="bg-primary rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2">
            Login
          </Link>
        </nav>
      </header>
    </>
  )
}

// bg - primary text - white px - 8 py - 2 rounded - full