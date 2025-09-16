import {
  Link,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router";

export default function CourseEditPage() {
  const course = useRouteLoaderData("kurs-detay");
  return (
    <>
      <h1>Kurs Edit Page</h1>
      <div className="course-desc">
        <img src={`http://localhost:5000/images/${course.image}`} alt="" />
        <div>
          <div>{course.description}</div>
          <div className="icons">
            <span>
              <i className="fa-regular fa-user"></i> {course.users}
            </span>
            <span>
              <i className="fa-regular fa-thumbs-up"></i> {course.likes}
            </span>
            <span>
              <i className="fa-regular fa-comment"></i> {course.comments}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export async function coursesDetailLoader({ params }) {
  const { id } = params;
  const res = await fetch("http://localhost:5000/courses/" + id);
  return res.json();
}
