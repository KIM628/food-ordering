import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero bg-hero bg-cover bg-center py-8 rounded-xl ">
      <div className=" text-biege py-8 px-4">
        <h1 className="text-4xl font-semibold ">
          Everything<br />
          is better <br />
          with a&nbsp;
          <span className="text-primary font-bold">
            Pizza
          </span>
        </h1>
        <p className="my-4 text-sm py-6">
          Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life .
        </p>
        <div className="flex gap-4 text-sm py-4">
          <button
            className="bg-primary text-white items-center uppercase flex gap-2 px-4 py-2 rounded-full animate-pulse">
            Order now
            <Right/>
          </button>
          <button className="flex gap-2 py-2 font-semibold">
            Learn more
            <Right/>
          </button>
        </div>
      </div>
    </section>
  )
}