import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/home", element: <HomePage /> },
        { path: "/products", element: <ProductsPage /> },
        { path: "/cart", element: <CartPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
