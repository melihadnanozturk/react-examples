import { useRouteLoaderData } from "react-router";
import CourseForm from "./CourseForm";

export default function CourseEditPage() {
  const course = useRouteLoaderData("kurs-detay");
  return (
    <>
      <h1>Kurs Edit Page</h1>
      <CourseForm method="PUT" data={course} />
    </>
  );
}

export async function coursesDetailLoader({ params }) {
  const { id } = params;
  const res = await fetch("http://localhost:5000/courses/" + id);
  return res.json();
}
