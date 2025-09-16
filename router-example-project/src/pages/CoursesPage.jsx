import { Link, useLoaderData } from "react-router";

export default function CoursesPage() {
  const courses = useLoaderData();

  return (
    <>
      <h1>"Coruses Page"</h1>
      <div id="courses">
        {courses.map((item) => (
          <div className="card">
            <img src={`http://localhost:5000/images/${item.image}`} alt="" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <br />
              <Link to={"/kurslar/" + item.id}>Detay</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function coursesLodader() {
  const res = await fetch("http://localhost:5000/courses");
  return res.json();
}
