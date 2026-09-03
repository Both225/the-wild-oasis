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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import BookingDetail from "./pages/BookingDetail.jsx";
import CheckIn from "./pages/CheckIn.jsx";

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
        path: "/bookings/:bookingId",
        element: <BookingDetail />,
      },
      {
        path: "/check-in/:bookingId",
        element: <CheckIn />,
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

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-right" />

      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
    </QueryClientProvider>
  </StrictMode>,
);
