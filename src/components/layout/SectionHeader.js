export default function SectionHeader({subHeader,mainHeader}) {
  return (
    <>
      <h3
        className="uppercase text-biege font-semibold leading-4 mb-1">
        {subHeader}
      </h3>
      <h4
        className="logo font-bold text-4xl italic">
        {mainHeader}
      </h4>
    </>
  );
}