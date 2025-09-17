import createBrowserRouter from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Home";
import ProductDetailPage from "./pages/Home";
import CartPage from "./pages/Home";
import LoginPage from "./pages/Home";
import RegisterPage from "./pages/Home";
import MainLayout from "./layouts/MainLayout";

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
          { path: ":/productId", element: <ProductDetailPage /> },
        ],
      },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <h1>Store App</h1>
    </>
  );
}

export default App;
