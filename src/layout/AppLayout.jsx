import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Logo from "../components/Logo";

function AppLayout() {
  return (
    <div className="grid h-screen w-full grid-cols-[25rem_1fr] grid-rows-[min-content_1fr]">
      <Logo />
      <Sidebar />
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
