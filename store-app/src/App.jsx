import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductsDetails";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import MainLayout from "./layouts/Main";
import { useEffect } from "react";
import request from "./api/apiClient";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "products",
        children: [
          { index: true, element: <ProductsPage /> },
          { path: ":productId", element: <ProductDetailPage /> },
        ],
      },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    request.cart
      .get()
      .then((cart) => console.log("CART : ", cart))
      .catch((error) => console.log(error));
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
