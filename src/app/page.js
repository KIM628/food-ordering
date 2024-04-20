import Header from "./components/layout/Header";
import Hero from "./components/layout/Hero";
import HomeMenu from "./components/layout/HomeMenu";
import Story from "./components/layout/Story";
import ContactUs from "./components/layout/ContactUs";
import Footer from "./components/layout/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <Story />
      <ContactUs />
      <Footer/>
    </>
  );
}
