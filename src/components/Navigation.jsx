import { useState } from "react";
import { Link } from "react-router-dom";

const className = {
  padding: "0.8rem 1.2rem",
};

const navItem = [
  { to: "/", label: "Dashboard" },
  { to: "bookings", label: "Bookings" },
  { to: "cabins", label: "Cabins" },
  { to: "setting", label: "Settings" },
  { to: "user", label: "User" },
];

function Navigation() {
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
        >
          {item.label}
        </NavItem>
      ))}
    </ul>
  );
}

export default Navigation;

function NavItem({ children, item, selectedItem, handleSelectItem }) {
  const isSelectedItem = selectedItem === item.label;

  return (
    <li>
      <Link
        onClick={() => handleSelectItem(item.label)}
        style={className}
        className={`block rounded-lg ${isSelectedItem ? "bg-[#6EE7B7]" : ""}`}
        to={item.to}
      >
        {children}
      </Link>
    </li>
  );
}
