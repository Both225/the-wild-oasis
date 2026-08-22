import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout.jsx";
import ErrorPage from "./layout/ErrorPage.jsx";
import DashboardPage from "./features/dashboard/DashboardPage.jsx";
import BookingPage from "./features/bookings/BookingPage.jsx";
import CabinPage from "./features/cabins/CabinPage.jsx";
import UserPage from "./features/user/UserPage.jsx";
import SettingPage from "./features/setting/SettingPage.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/bookings",
        element: <BookingPage />,
      },
      {
        path: "/cabins",
        element: <CabinPage />,
      },
      {
        path: "/setting",
        element: <SettingPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
