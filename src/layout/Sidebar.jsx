import Navigation from "../components/ui/Navigation";
import Uploader from "../data/Uploader";

function Sidebar({ handleSelectedFeature }) {
  return (
    <div className="bg-surface row-start-2 row-end-3 h-full p-8 shadow">
      <Navigation handleSelectedFeature={handleSelectedFeature} />
    </div>
  );
}

export default Sidebar;
