import { Link } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <Link to={"/"}>Dashboard</Link>
      </li>
      <li>
        <Link to={"bookings"}>Bookings</Link>
      </li>
      <li>
        <Link to={"cabins"}>Cabins</Link>
      </li>
      <li>
        <Link to={"users"}>Users</Link>
      </li>
      <li>
        <Link to={"setting"}>Setting</Link>
      </li>
    </ul>
  );
}

export default Navigation;
