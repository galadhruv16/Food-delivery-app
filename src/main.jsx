import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Head from "./components/Head.jsx";
import Menu from "./components/Menu.jsx";
import Contact from "./components/Contact.jsx";
import Cart from "./components/Cart.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
function App() {
  return (
    <div>
      <Head />

      <Outlet />
    </div>
  );
}

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Menu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      ,
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
