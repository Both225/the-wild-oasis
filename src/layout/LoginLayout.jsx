import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="bg-surface-darker flex h-screen w-screen items-center justify-center">
      <Outlet />
    </div>
  );
}

export default LoginLayout;
