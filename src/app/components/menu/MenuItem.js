import Image from "next/image";

export default function MenuItem() {
  return (
    <div
      className="relative backdrop-blur-xl bg-white/20 py-6 px-6 rounded-3xl w-64 my-4 group hover:shadow-2xl hover:shadow-biege/50 duration-600 transition-all">
      <div
        className="flex items-center absolute rounded-full py-4 px-3 left-12 -top-16">
        {/* <!-- svg  --> */}
        <Image
          src={'/assets/img/pep-pizza.png'}
          alt={'pizza'}
          width={140}
          height={100} />
      </div>
      <div className="mt-8">
        <p className="text-xl text-center font-semibold my-2 pt-8">
          Pepperoni Pizza
        </p>

        <div className="border-t-2"></div>

        <div className="flex justify-between">
          <div className="my-2">
            <p className="font-semibold text-base mb-2">
              Price
            </p>
            <div className="flex space-x-2">
              <p className="font-semibold text-biege">
                12$
              </p>
            </div>
          </div>
          <div className="my-2">
            <button className="
                bg-primary text-white items-center uppercase flex gap-2 px-3 py-2 rounded-full font-semibold mb-2">
              add to cart
            </button>
            <div className="text-base font-semibold">
              <p>Like BTN</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}