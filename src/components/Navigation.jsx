import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const className = {
  padding: "0.8rem 1.2rem",
};

const navItem = [
  { to: "/", label: "Dashboard", icon: "grid" },
  { to: "bookings", label: "Bookings", icon: "calendar" },
  { to: "cabins", label: "Cabins", icon: "home" },
  { to: "setting", label: "Settings", icon: "settings" },
  { to: "user", label: "User", icon: "user" },
];

function Navigation({ handleSelectedFeature }) {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  function handleSelectItem(item) {
    setSelectedItem(item);
  }

  return (
    <ul className="w-full space-y-2">
      {navItem.map((item) => (
        <NavItem
          key={item.label}
          item={item}
          selectedItem={selectedItem}
          handleSelectItem={handleSelectItem}
          handleSelectedFeature={handleSelectedFeature}
        >
          {item.label}
        </NavItem>
      ))}
    </ul>
  );
}

export default Navigation;

function NavItem({
  children,
  item,
  selectedItem,
  handleSelectItem,
  icon,
  handleSelectedFeature,
}) {
  const isSelectedItem = selectedItem === item.label;

  return (
    <li>
      <Link
        onClick={() => {
          handleSelectItem(item.label);
          handleSelectedFeature(item.label);
        }}
        style={className}
        className={`flex items-center gap-4 rounded-lg ${isSelectedItem ? "bg-[#a1f4d3]" : ""}`}
        to={item.to}
      >
        <span>
          <Icon icon={item.icon} color={"black"} />
        </span>
        {children}
      </Link>
    </li>
  );
}
