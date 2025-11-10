import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Services from "../Pages/Services/Services";
import AddService from "../Pages/AddService/AddService";
import Register from "../Pages/Register/Register";
import CardDetals from "../Pages/CardDetals/CardDetals";
import Update from "../Pages/ServiceUpdate/Update";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/add-service",
        element: <AddService />,
      },
      {
        path: "/service-detals/:id",
        element: <CardDetals />,
      },
      {
        path: "/update/:id",
        element: <Update />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },
    ],
  },
]);
