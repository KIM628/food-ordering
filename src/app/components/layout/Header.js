import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between pb-4">
      <Link
        className="logo text-primary font-semibold text-2xl "
        href={'/'}>
        CoZzy Pizza
      </Link>
      <nav className="flex items-center gap-8 text-biege font-semibold">
        <Link
          className="relative hover:text-org cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-org before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-org after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
          href={'/'}>
          Home
        </Link>
        <Link
          className="relative hover:text-org cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-org before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-org after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
          href={'/menu'}>
          Menu
        </Link>
        <Link
          className="relative hover:text-org cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-org before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-org after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
          href={'/about'}>
          About
        </Link>
        <Link
          className="relative hover:text-org cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-org before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-org after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
          href={'/contact'}>
          Contact
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className="leaf text-biege px-8 py-2 rounded-bl-tl rounded-tr-tl"
            href={'/login'}>
            Login
          </Link>
          <Link
            className="leaff rounded-tl-tl rounded-br-tl text-biege px-8 py-2"
            href={'/register'}>
            Register
          </Link>
        </div>
      </nav>
    </header>
  );
}