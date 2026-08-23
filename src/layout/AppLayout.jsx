import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Logo from "../components/Logo";
import { useState } from "react";

function AppLayout() {
  const [selectedFeature, setSelectedFeature] = useState("Dashboard");

  function handleSelectedFeature(featureLabel) {
    setSelectedFeature(featureLabel);
  }

  return (
    <div className="grid h-screen w-full grid-cols-[25rem_1fr] grid-rows-[min-content_1fr]">
      <Logo />
      <Sidebar handleSelectedFeature={handleSelectedFeature} />
      <Header selectedFeature={selectedFeature} />
      <Outlet />
    </div>
  );
}

export default AppLayout;
