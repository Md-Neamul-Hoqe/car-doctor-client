import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Credentials/Login";
import Credentials from "../Pages/Credentials/Credentials";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Bookings from "../Pages/Bookings/Bookings";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/services`),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Credentials />,
      },
      {
        path: "/register",
        element: <Credentials />,
      },
    ],
  },
]);

export default Routes;
