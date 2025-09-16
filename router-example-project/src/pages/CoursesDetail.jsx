import { Link, useLoaderData, useParams } from "react-router";

export default function CoursesPage() {
  const resp = useLoaderData();
  return (
    <>
      <h1>{resp.title}</h1>
    </>
  );
}

export async function coursesDetailLoader({ params }) {
  const { id } = params;
  const res = await fetch("http://localhost:5000/courses/" + id);
  return res.json();
}
