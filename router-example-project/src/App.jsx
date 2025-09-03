import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/courses", element: <CoursesPage /> },
]);

const router_1 = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/adnan" element={<CoursesPage />} />
  </Route>
);

const router_2 = createBrowserRouter(router_1);

function App() {
  return <RouterProvider router={router_2} />;
}

export default App;
