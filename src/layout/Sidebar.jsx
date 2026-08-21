import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

function Sidebar() {
  return (
    <div className="bg-tertiary/40 row-start-1 row-end-3 flex h-full flex-col gap-12 px-8 py-5">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Sidebar;
