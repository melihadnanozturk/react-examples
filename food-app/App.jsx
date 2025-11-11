import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import FoodAdminPage from "./src/pages/EditPage.jsx";
import Layout from "./src/components/Layout.jsx";
import FoodDetailPage from "./src/pages/FoodDetailPage.jsx";
import LoginPage from "./src/pages/LoginPage.jsx";
import SignInPage from "./src/pages/SignInPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./src/pages/slices/AccountSlice.js";
import ControlPage from "./src/pages/ControlPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/food/:foodId", element: <FoodDetailPage /> },
      { path: "/admin", element: <ControlPage /> },
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
  const dispatch = useDispatch();

  useEffect(() => {
    const userString = localStorage.getItem("user");
    dispatch(setUser(JSON.parse(userString)));
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
