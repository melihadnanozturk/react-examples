import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage, { coursesLodader } from "./pages/CoursesPage";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import HelpPage from "./pages/HelpPage";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
const router = createBrowserRouter([
  {
    path: "/adnan",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "ev", element: <HomePage /> },
      { path: "hakkimda", element: <AboutPage /> },
      { path: "kurslar", element: <CoursesPage />, loader: coursesLodader },
      {
        path: "yardim",
        element: <HelpPage />,
        children: [
          { path: "contact", element: <Contact /> },
          { path: "faq", element: <FAQ /> },
        ],
      },
    ],
  },
]);

// const router_1 = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/ev" element={<HomePage />} />
//     <Route path="/hakkimda" element={<AboutPage />} />
//     <Route path="/kurslar" element={<CoursesPage />} />
//   </Route>
// );

// const router_2 = createBrowserRouter(router_1);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
