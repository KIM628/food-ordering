import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import SectionHeaders from "./components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="max-w-md text-gray-500 mx-auto mt-4 flex
        flex-col gap-4">
          <p className="">
            LoremSint aliqua velit pariatur laborum ullamco. Occaecat mollit consectetur duis cupidatat laborum nulla.
          </p>
          <p>
            LoremSint aliqua velit pariatur laborum ullamco. Occaecat mollit consectetur duis cupidatat laborum nulla.
          </p>
          <p>
            LoremSint aliqua velit pariatur laborum ullamco. Occaecat mollit consectetur duis cupidatat laborum nulla.
          </p>
        </div>
      </section>

      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500"
            href="tel:+0123456789">
            +0123456789
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  )
}