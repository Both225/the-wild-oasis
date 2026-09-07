import { Button } from "antd";

import { useSignOut } from "../features/authentication/useSignOut";
import Spinner from "../components/ui/Spinner";
import UserAvatar from "../features/user/UserAvatar";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function Header() {
  const { isSignOut, signOut } = useSignOut();
  const navigate = useNavigate();

  function onSignOut() {
    signOut();
  }

  if (isSignOut) return <Spinner />;

  return (
    <div className="bg-surface col-start-2 flex items-center justify-between px-12 py-6">
      <div className="flex w-full items-center justify-end gap-8">
        <UserAvatar />
        <button onClick={() => navigate("/account")}>
          <HiOutlineUser
            size={24}
            className="hover:cursor-pointer"
            style={{ color: "blue" }}
          />
        </button>
        <Button onClick={onSignOut}>Sign Out</Button>
      </div>
    </div>
  );
}

export default Header;
