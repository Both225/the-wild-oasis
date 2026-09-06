import { Button } from "antd";
import Icon from "../components/ui/Icon";
import { useSignOut } from "../features/authentication/useSignOut";
import Spinner from "../components/ui/Spinner";
import UserAvatar from "../features/user/UserAvatar";

function Header() {
  const { isSignOut, signOut } = useSignOut();

  function onSignOut() {
    signOut();
  }

  if (isSignOut) return <Spinner />;

  return (
    <div className="bg-surface col-start-2 flex items-center justify-between px-12 py-6">
      <div className="flex w-full items-center justify-end gap-8">
        <UserAvatar />
        <Button onClick={onSignOut}>Sign Out</Button>
      </div>
    </div>
  );
}

export default Header;
