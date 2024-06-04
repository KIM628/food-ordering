import SectionHeader from "./SectionHeaders";

export default function ContactUs() {
  return (
    <section className="text-center my-8">
      <SectionHeader
        subHeader={'Don\'t hesitate'}
        mainHeader={'Contact Us'}
      />
      <div className="mt-8">
        <a
          className="text-4xl text-biege underline"
          href="tel:+123456789">
          +123456789
        </a>
      </div>
    </section>
  );
}