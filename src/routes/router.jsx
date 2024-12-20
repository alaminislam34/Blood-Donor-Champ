import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/User/Register";
import Login from "../Pages/User/Login";
import Donar from "../Pages/Donar";
import Reviews from "../Pages/Reviews";
import Contact from "../Pages/Contact";
import Profile from "../Pages/Profile";
import PageNotFound from "../Pages/PageNotFound";
import DonarForm from "../Pages/DonarForm";
import HealthInfo from "../Pages/HealthInfo";
import Practice from "../Pages/Practice/Practice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/donar",
        element: <Donar />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/healthInfo",
        element: <HealthInfo />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/donarForm",
        element: <DonarForm />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
      // practice components
      {
        path: "/practice",
        element: <Practice />,
      },
    ],
  },
]);

export default router;
