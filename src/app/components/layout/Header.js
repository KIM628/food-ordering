import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link
        className="text-primary font-semibold text-2xl "
        href={'/'}>
        CoZzy Pizza
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={'/'}>Home</Link>
        <Link href={'/menu'}>Menu</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/contact'}>Contact</Link>
        <div className="flex items-center gap-4">
          <Link
            className="leaf text-white px-8 py-2 rounded-bl-tl rounded-tr-tl"
            href={'/login'}>
            Login
          </Link>
          <Link
            className="leaf rounded-tl-tl rounded-br-tl text-white px-8 py-2"
            href={'/register'}>
            Register
          </Link>
        </div>
      </nav>
    </header>
  )
}