import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesDetail, { coursesDetailLoader } from "./pages/CoursesDetail";
import CoursesPage, { coursesLodader } from "./pages/CoursesPage";
import CourseEditPage from "./pages/CourseEditPage";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import HelpPage from "./pages/HelpPage";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import CourseCreatePage from "./pages/CourseCreatePage";
import { courseFormAction } from "./actions/courseFormAction";
import { deleteCourseAction } from "./actions/DeleteCourseAction";
import Test from "./pages/Test";
import NotFoundPages from "./pages/NotFoundPages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "ev", element: <HomePage /> },
      { path: "hakkimda", element: <AboutPage /> },
      {
        path: "kurslar",
        children: [
          { index: true, element: <CoursesPage />, loader: coursesLodader },
          {
            id: "kurs-detay",
            path: ":courceId",
            loader: coursesDetailLoader,
            children: [
              { index: true, element: <CoursesDetail /> },
              {
                path: "edit",
                element: <CourseEditPage />,
                action: courseFormAction,
              },
            ],
            action: deleteCourseAction,
          },
          {
            path: "yeni",
            element: <CourseCreatePage />,
            action: courseFormAction,
          },
        ],
      },
      {
        path: "yardim",
        element: <HelpPage />,
        children: [
          { path: "contact", element: <Contact /> },
          { path: "faq", element: <FAQ /> },
        ],
      },
      { path: "*", element: <NotFoundPages /> },
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
