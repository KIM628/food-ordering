import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center
    group hover:bg-white transition-all hover:shadow-md hover:shadow-black/25
    ">
      <div className="text-center ">
        <img
          className="max-h-auto max-h-24 block mx-auto"
          src="/pizza.png"
          alt="pizza" />
      </div>
      <h4 className="font-semibold text-xl my-3">
        Pepperoni Pizza
      </h4>
      <p className="text-gray-500 text-sm">
        Commodo cillum reprehenderit sit cillum veniam labore. Pariatur proident tempor aliquip veniam.
      </p>
      <button className="bg-primary text-white px-8 py-2 rounded-full mt-4">
        Add to cart $12
      </button>
    </div>
  )
}