import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./src/pages/HomePage";
import FoodAdminPage from "./src/pages/FoodAdminPage";
import Layout from "./src/components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/admin", element: <FoodAdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
