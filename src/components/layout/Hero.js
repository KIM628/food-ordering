import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything<br />
          is better <br />
          with a&nbsp;
          <span className="text-primary font-bold">
            Pizza
          </span>
        </h1>
        <p className="my-6 text-gray-600 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life .
        </p>
        <div className="flex gap-4 text-sm">
          <button
            className="bg-primary text-white items-center uppercase flex gap-2 px-4 py-2 rounded-full animate-bounce">
            Order now
            <Right />
          </button>
          <button className="flex text-gray-600 items-center gap-2 py-2 font-semibold border-0">
            Learn more
            <Right />
          </button>
        </div>
      </div>
        <div className="relative hidden md:block">
          <Image src={'/assets/img/P.svg'} alt={'pizza'} layout={'fill'} objectFit={'conatin'} />
        </div>
    </section>
  );
}