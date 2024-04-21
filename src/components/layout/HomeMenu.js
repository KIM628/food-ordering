import MenuItem from "../menu/MenuItem";
import SectionHeader from "./SectionHeader";


export default function HomeMenu() {
  return (
    <section className="mt-8">
      <div className="text-center">
        <div>
          <SectionHeader
            subHeader={'Check out'}
            mainHeader={'Menu'}
          />
        </div>
      </div>
                                {/* cards */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
    </section>
  );
}