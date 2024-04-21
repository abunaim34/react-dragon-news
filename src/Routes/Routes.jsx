import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import News from "../Pages/News";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root /> ,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: () => fetch('/news.json')
        },
        {
          path: '/news/:id',
          element: <PrivateRoutes><News /></PrivateRoutes>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register />
        }
      ]
    },
]);

export default router;