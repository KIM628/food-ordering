import SectionHeader from "./SectionHeaders";

export default function Story() {
  return (
    <section className="text-center my-8">
      <SectionHeader
        subHeader={'Our story'}
        mainHeader={'About us '}
      />
      <div className="text-brown max-w-md mx-auto mt-4 flex flex-col gap-4">
        <p>
          Ut commodo eu anim consequat deserunt sit incididunt. Excepteur ex consequat exercitation ipsum sint excepteur ad eu. Magna tempor et incididunt occaecat occaecat enim ea et qui. Velit aliquip consequat minim pariatur. Velit est incididunt amet qui Lorem. Nostrud anim Lorem dolore enim laborum voluptate. Occaecat proident aliquip minim culpa laborum eu aute veniam irure reprehenderit pariatur ipsum.
        </p>
      </div>
    </section>
  );
}