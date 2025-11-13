import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import AddService from "../Pages/AddService/AddService";
import Register from "../Pages/Register/Register";
import Update from "../Pages/ServiceUpdate/Update";
import Profile from "../Pages/Profile/Profile";
import MyServices from "../Pages/MyServices/MyServices";
import ServiceDetals from "../Pages/ServiceDetals/ServiceDetals";
import Error from "../Components/Error";
import MyBooking from "../Pages/MyBooking/MyBooking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />, // ✅ Proper way to handle errors
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "my-services",
        element: <MyServices />,
      },
      {
        path: "my-bookings",
        element: <MyBooking />,
      },
      {
        path: "add-service",
        element: <AddService />,
      },
      {
        path: "service-detals/:id",
        element: <ServiceDetals />,
      },
      {
        path: "update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`https://handy-home-server.vercel.app/services/${params.id}`),
      }, 
    ],
  },
  // ✅ Global catch-all route (outside layout)
  {
    path: "*",
    element: <Error />,
  },
]);
