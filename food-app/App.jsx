import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import FoodAdminPage from "./src/pages/EditPage.jsx";
import Layout from "./src/components/Layout.jsx";
import FoodDetailPage from "./src/pages/FoodDetailPage.jsx";
import LoginPage from "./src/pages/LoginPage.jsx";
import SignInPage from "./src/pages/SignInPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/food/:foodId", element: <FoodDetailPage /> },
      { path: "/admin", element: <FoodAdminPage /> },
      {
        path: "auth",
        children: [
          { index: true, element: <SignInPage /> },
          { path: "login", element: <LoginPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
