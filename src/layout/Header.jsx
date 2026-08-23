import Icon from "../components/Icon";

function Header({ selectedFeature }) {
  return (
    <div className="bg-surface col-start-2 flex items-center justify-between px-12 py-6">
      <h2 className="text-[2rem] font-semibold">{selectedFeature}</h2>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer">
          <Icon icon={"moon"} />
        </button>
        <p>profile</p>
      </div>
    </div>
  );
}

export default Header;
