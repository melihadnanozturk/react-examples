import {
  createBrowserRouter,
  Route,
  RouterProvider,
  UNSAFE_useFogOFWarDiscovery,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetailPage from "./pages/ProductsDetails";
import CartPage from "./pages/cart/Cart";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import MainLayout from "./layouts/Main";
import { use, useEffect } from "react";
import request from "./api/apiClient";
import { useDispatch } from "react-redux";
import { setCart } from "./pages/cart/cartSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    request.cart
      .get()
      .then((cart) => dispatch(setCart(cart)))
      .catch((error) => console.log(error));
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
