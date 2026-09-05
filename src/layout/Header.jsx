import { Button } from "antd";
import Icon from "../components/ui/Icon";
import { useSignOut } from "../features/authentication/useSignOut";
import Spinner from "../components/ui/Spinner";

function Header({ selectedFeature }) {
  const { isSignOut, signOut } = useSignOut();

  function onSignOut() {
    signOut();
  }

  if (isSignOut) return <Spinner />;

  return (
    <div className="bg-surface col-start-2 flex items-center justify-between px-12 py-6">
      <h2 className="text-[2rem] font-semibold">{selectedFeature}</h2>
      <div className="flex items-center gap-4">
        <button className="cursor-pointer">
          <Icon icon={"moon"} />
        </button>
        <p>profile</p>
        <Button onClick={onSignOut}>Sign Out</Button>
      </div>
    </div>
  );
}

export default Header;
