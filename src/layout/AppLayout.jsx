import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen w-full grid-cols-[20rem_1fr] grid-rows-[min-content_1fr]">
      <Sidebar />
      <Header />
      <Main />
    </div>
  );
}

export default AppLayout;

function Main() {
  return <div className="bg-cyan-500">Main</div>;
}
